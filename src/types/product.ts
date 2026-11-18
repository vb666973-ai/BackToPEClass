export interface Exercise { id:string; name:string; category:'Everyday cardio'|'Gentle strength'|'Mobility & balance'; purpose:string; setup:string; steps:string[]; cue:string; easier:string; stop:string; }
export interface Day { number:number; title:string; theme:string; description:string; exercises:string[]; warmup:string[]; cooldown:string[]; reflection:string; tip:string; light?:boolean; }
export interface Report { name:string; favorite:string; learned:string; manageable:string; next:string; }
export interface Progress { completed:Record<string,string>; report:Report; safetyRead:boolean; }
export interface VideoSlot { id:string; exerciseId:string; title:string; subtitle:string; }
export interface VideoAsset { url:string; captions:string; transcript:string; rights:'Original'|'Licensed'; }
export interface GuideSection { title:string; body:string[]; }
