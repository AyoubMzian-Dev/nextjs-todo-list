
import { connectDB } from "@/lib/conectDB";
import { Task } from '@/modles/task'
import { NextResponse } from "next/server";


export async function GET() {
    await connectDB()
    const tasks = await Task.find()
    return NextResponse.json(tasks, {status: 201 })
}


export async function POST(req: Request){
    await connectDB()
    console.log("this is the req: ", req)
    try {
        const body= await req.json()

        const createdTask = await Task.create(body)

        console.log("the created task: ", createdTask)
        return NextResponse.json({body: "✅task created"}, {status: 201})
    }catch (error){
        console.error("❌ Error creating task:", error);
        return NextResponse.json( {err: error}, {status: 400})
    }
}
