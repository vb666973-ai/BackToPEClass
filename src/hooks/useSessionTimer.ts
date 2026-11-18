import { useState, useMemo, useEffect, useRef } from 'react';
import type { Day } from '@/types/product';
import { getExercise } from '@/constants/exercises';
interface Stage { title:string; detail:string; duration:number; kind:'Warm-up'|'Move'|'Rest'|'Cool-down'; }
export function useSessionTimer(day:Day){
 const stages=useMemo<Stage[]>(()=>[...day.warmup.map(detail=>({title:'Ease into your class',detail,duration:30,kind:'Warm-up' as const})),...Array.from({length:2},(_,round)=>day.exercises.flatMap(id=>{const ex=getExercise(id);return [{title:ex.name,detail:`Round ${round+1} of 2. ${ex.cue}`,duration:40,kind:'Move' as const},{title:'Take a comfortable rest',detail:'Settle into a stable position. Breathe normally. Pause the timer for more rest.',duration:20,kind:'Rest' as const}];})).flat(),...day.cooldown.map(detail=>({title:'Let things settle',detail,duration:30,kind:'Cool-down' as const}))],[day]);
 const total=stages.reduce((n,s)=>n+s.duration,0);const [elapsed,setElapsed]=useState(0);const [running,setRunning]=useState(false);const anchor=useRef({time:0,elapsed:0});
 useEffect(()=>{if(!running)return;anchor.current={time:Date.now(),elapsed};const timer=setInterval(()=>{const value=Math.min(total,anchor.current.elapsed+Math.floor((Date.now()-anchor.current.time)/1000));setElapsed(value);if(value===total)setRunning(false);},250);return()=>clearInterval(timer);},[running,total]);
 let start=0;let index=stages.length-1;for(let i=0;i<stages.length;i++){if(elapsed<start+stages[i].duration){index=i;break;}start+=stages[i].duration;}const finished=elapsed>=total;const current=stages[index];const stageStart=stages.slice(0,index).reduce((n,s)=>n+s.duration,0);
 return {current,remaining:finished?0:current.duration-(elapsed-stageStart),elapsed,total,index,finished,running,toggle:()=>{if(finished)return;setRunning(v=>!v);},next:()=>{setRunning(false);setElapsed(Math.min(total,stageStart+current.duration));},reset:()=>{setRunning(false);setElapsed(0);}};
}
