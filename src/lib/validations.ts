import { z } from 'zod';
export const reportSchema=z.object({name:z.string().max(80,'Please use 80 characters or fewer.'),favorite:z.string().max(400,'Please use 400 characters or fewer.'),learned:z.string().max(800,'Please use 800 characters or fewer.'),manageable:z.string().max(800,'Please use 800 characters or fewer.'),next:z.string().max(800,'Please use 800 characters or fewer.')});
