
import { taskArraySchema } from "@/schemas/taskSchema";

async function Page() {
    const res = await fetch("http://localhost:3000/api/tasks");

    const data = await res.json();

    const zbi = taskArraySchema.safeParse(data);


    if (!zbi.success) {
        console.error(" Invalid zbi response", zbi.error.format());
        return null;
    }

    const tasks = zbi.data || [];
    console.log(tasks, "wa zbi");

    return (
        <main className={"bg-gray-950 h-screen w-screen px-20 py-28"}>
            <div>
                {/* render tasks here */}
            </div>
        </main>
    );
}

export default Page;
