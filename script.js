const add_button = document.getElementById("add-task-btn");
const task_list = document.getElementById("task-list");
const input = document.getElementById("task-input");

add_button.addEventListener("click", () => {
    const task = input.value.trim();

    if (task !== "") {
        const li = document.createElement("li");
        li.className = "task-row";
        li.innerHTML = `<span class="task-item">${task}</span> <button class="delete-btn">x</button>`;
        task_list.appendChild(li);
        input.value = "";
    }
});

task_list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
    return;
  }
  if (event.target.classList.contains("task-item")) {
    event.target.parentElement.classList.toggle("completed");
  }
});