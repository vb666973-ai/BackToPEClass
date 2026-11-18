import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { toast } from 'sonner';
import { EMPTY_PROGRESS, readProgress, saveProgress } from '@/lib/storage';
import type { Progress, Report } from '@/types/product';
interface ProgressContextValue { progress:Progress; count:number; nextDay:number; updateAttendance:(day:number,done:boolean)=>void; saveReport:(report:Report)=>void; acceptSafety:()=>void; reset:()=>void; restore:(data:Progress)=>void; storageOk:boolean; }
const ProgressContext=createContext<ProgressContextValue|null>(null);
export function ProgressProvider({children}:{children:ReactNode}) {
 const [progress,setProgress]=useState<Progress>(readProgress);const [storageOk,setStorageOk]=useState(true);
 const commit=useCallback((data:Progress,message?:string)=>{const saved=saveProgress(data);setProgress(data);setStorageOk(saved);if(!saved)toast.warning('Browser storage is unavailable. Changes are kept for this visit only; download a personal backup.');else if(message)toast.success(message);},[]);
 const updateAttendance=useCallback((day:number,done:boolean)=>{const completed={...progress.completed};if(done)completed[day]=new Date().toISOString();else delete completed[day];commit({...progress,completed},done?'Attendance saved in this browser.':'Attendance updated in this browser.');},[progress,commit]);
 const count=Object.keys(progress.completed).length;const nextDay=Array.from({length:12},(_,i)=>i+1).find(d=>!progress.completed[d])??12;
 return <ProgressContext.Provider value={{progress,count,nextDay,storageOk,updateAttendance,saveReport:r=>commit({...progress,report:r},'Your report card is saved privately in this browser.'),acceptSafety:()=>commit({...progress,safetyRead:true}),reset:()=>commit(structuredClone(EMPTY_PROGRESS),'Personal progress cleared.'),restore:data=>commit(data,'Personal progress restored in this browser.')}}>{children}</ProgressContext.Provider>;
}
export function useProgress(){const value=useContext(ProgressContext);if(!value)throw new Error('ProgressProvider is required');return value;}
