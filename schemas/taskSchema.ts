import { z } from "zod";

export const taskSchema = z.object({
    title: z.string(),
    discreption: z.string().optional(),
    dateCreated: z.string().or(z.date()),
    steps: z
        .array(
            z.object({
                title: z.string(),
                statue: z.boolean()
            })
        )
        .optional()
});

export const taskArraySchema = z.array(taskSchema); // ✅ for lists of tasks
