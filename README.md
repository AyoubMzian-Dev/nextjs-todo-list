# 📝 ToDo List App

A full-stack ToDo application built with **Next.js** and **MongoDB**, allowing users to create, update, delete, and track tasks with optional subtasks, priorities, tags, and deadlines.

---

## 🚀 Features

- ✅ Add, edit, delete tasks
- 🕒 Set due dates and priorities
- 🗂️ Organize with tags and subtasks
- 📦 Full MongoDB integration
- 🌙 Responsive UI (optional dark mode)

---

## 🧑‍💻 Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB (Mongoose ODM)
- **Language:** TypeScript or JavaScript

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/todo-nextjs-app.git
cd todo-nextjs-app

# Install dependencies
npm install

# Create .env.local file with your MongoDB URI
touch .env.local
```
---

## 📚 API Endpoints
### ➕ Create a Task
```json
Method: POST

Endpoint: /api/tasks

Body:
{
    "title": "Finish math homework",
    "description": "Complete exercises 1 to 10 from chapter 4.",
    "dueDate": "2025-05-08T18:00:00.000Z",
    "status": "pending",
    "priority": "high",
}
```

### 📖 Get All Tasks

    Method: GET

    Endpoint: /api/tasks

### ✏️ Update a Task

    Method: PUT

    Endpoint: /api/tasks/:id

    Body: (partial or full fields as above)

### ❌ Delete a Task

    Method: DELETE

    Endpoint: /api/tasks/:id
---

## 🗃️ Folder Structure
```bash

/app
  /api
    tasks.js       # API routes (CRUD logic)
  index.js         # Main UI
  /models
    Task.js          # Mongoose schema
  /utils
    db.js            # MongoDB connection

```
---

## 🔮 Future Improvements

    🔐 Authentication (e.g., NextAuth)

    📱 Mobile-first UI

    🔔 Reminders & Notifications

    📈 Analytics dashboard

📄 License

MIT License. Feel free to use and modify.





