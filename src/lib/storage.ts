import { z } from 'zod';
import type { Progress } from '@/types/product';
export const EMPTY_PROGRESS:Progress = { completed:{}, report:{name:'',favorite:'',learned:'',manageable:'',next:''}, safetyRead:false };
export const progressSchema = z.object({completed:z.record(z.string().regex(/^(?:[1-9]|1[0-2])$/),z.string().datetime()),report:z.object({name:z.string().max(80),favorite:z.string().max(400),learned:z.string().max(800),manageable:z.string().max(800),next:z.string().max(800)}),safetyRead:z.boolean()});
const KEY = 'back-to-pe-class-progress-v1';
export function readProgress():Progress {
 try { const raw=localStorage.getItem(KEY); if(!raw)return structuredClone(EMPTY_PROGRESS); const parsed=progressSchema.safeParse(JSON.parse(raw)); return parsed.success?parsed.data:structuredClone(EMPTY_PROGRESS); } catch { return structuredClone(EMPTY_PROGRESS); }
}
export function saveProgress(progress:Progress):boolean { try { localStorage.setItem(KEY,JSON.stringify(progress)); return true; } catch { return false; } }
export function downloadBackup(progress:Progress) { const url=URL.createObjectURL(new Blob([JSON.stringify(progress,null,2)],{type:'application/json'})); const link=document.createElement('a');link.href=url;link.download='back-to-pe-class-personal-progress.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000); }
