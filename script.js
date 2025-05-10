// Initial task list
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];
// Allow user to add up to 3 tasks
let tasksToAdd = 3;

for (let i = 0; i < tasksToAdd; i++) {
  const title = prompt(`Enter title for task ${i + 1}:`);
  const description = prompt(`Enter description for task ${i + 1}:`);

  let status = prompt("Enter status (todo, doing, done):").toLowerCase();

  // Validate status input (once, no infinite loop)
  if (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status entered. Defaulting to 'todo'.");
    status = "todo";
  }

  const lastId = initialTasks[initialTasks.length - 1].id;
  const newTask = {
    id: lastId + 1,
    title,
    description,
    status,
  };

  initialTasks.push(newTask);
}
// Filter completed tasks
const completedTasks = initialTasks.filter((task) => task.status === "done");

// Log full arrays to console to show length and prototype
console.log("All tasks:");
console.log(initialTasks); // Shows length and [[Prototype]]

console.log("Completed tasks:");
console.log(completedTasks); // Shows length and [[Prototype]]
