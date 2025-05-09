// models/Task.ts
import  { Document, model, models, Schema } from "mongoose";

// Step type
interface IStep {
    title: string;
    statue: boolean; // consider renaming to "status" if it's a typo
}

// Task document interface
export interface ITask extends Document {
    title: string;
    discreption?: string; // consider renaming to "description"
    dateCreated: Date;
    steps?: IStep[];
}

const taskSchema = new Schema<ITask>({
    title: { type: String, required: true },
    discreption: { type: String }, // typo? should probably be "description"
    dateCreated: { type: Date, default: Date.now },
    steps: [
        {
            title: String,
            statue: Boolean,
        },
    ],
});

// Export the model, avoiding overwrite issues in dev mode
export const Task = models.Task || model<ITask>("Task", taskSchema);
