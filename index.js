function addTask() {
  const input = document.getElementById("taskInput")
  const task = input.value

  if (!task) {
    alert("Please enter a task")
    return;
  }

  const ul = document.getElementById("taskList")
  const li = document.createElement("li")

  li.textContent = task
  ul.appendChild(li)

  input.value = ""

}

function toggleTask(event) {
  console.log(event)
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed")
  } 
} 