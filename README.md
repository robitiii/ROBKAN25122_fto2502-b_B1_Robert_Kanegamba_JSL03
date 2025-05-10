# 🗂️ JavaScript Task Manager

This is a simple JavaScript-based task manager that allows users to interactively add new tasks through browser prompts. It merges your input with a predefined list of tasks, then displays all tasks and filters out the completed ones in the browser console.

## 🚀 How It Works

When the program runs, it will prompt you to enter information for **three new tasks**. These tasks are added to a default list and processed based on their completion status.

---

## 📥 Instructions: How to Add Tasks

You'll go through **three input prompts per task**. Here's what each one does and how to respond:

### 1️⃣ Enter the Task Title

> **Prompt:** `Enter title for task X:`

- **What to type:** A brief name for the task.
- **Example:** `Build Portfolio Website`

---

### 2️⃣ Enter the Task Description

> **Prompt:** `Enter description for task X:`

- **What to type:** A short explanation of what the task involves.
- **Example:** `Design and deploy a personal website to showcase my projects.`

---

### 3️⃣ Enter the Task Status

> **Prompt:** `Enter status (todo, doing, done):`

- **What to type:** One of the following **exact words**:
  - `todo` – Not started
  - `doing` – In progress
  - `done` – Completed

❗ **If you enter an invalid status**, the script will **automatically default it to `todo`** and display a warning alert.

---

## 🧾 Output and Where to See It

Once all three tasks are added:

- The script combines them with the predefined list of tasks.
- It then filters out and logs all tasks marked as **"done"**.
- You can view both:
  - **All tasks**
  - **Completed tasks**

📍 **Open your browser's Developer Console** (`F12` or `Ctrl + Shift + I`) to see the output under the **Console** tab.

---

## ✅ Example Session

```plaintext
Enter title for task 1: Start Freelancing
Enter description for task 1: Create a profile on Upwork.
Enter status (todo, doing, done): doing
-----
```
