document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage when the page loads
    loadTasks();

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const deadline = deadlineInput.value.trim(); // Get the deadline value
        if (taskText !== "") {
            addTask(taskText, deadline);
            saveTasks();
            taskInput.value = "";
            deadlineInput.value = ""; // Clear the deadline input after adding task
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteBtn")) {
            event.target.parentElement.remove();
            saveTasks();
        }
    });

    function addTask(text, deadline) {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <span>${text}</span>
            <span class="deadline">Deadline: ${deadline}</span>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(taskItem);
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll(".task").forEach(taskItem => {
            const taskText = taskItem.querySelector("span").textContent;
            const deadline = taskItem.querySelector(".deadline").textContent.split(":")[1].trim();
            tasks.push({ text: taskText, deadline: deadline });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => {
            addTask(task.text, task.deadline);
        });
    }
});

// Configure live-server to listen on all network interfaces
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hostname === '127.0.0.1') {
        const script = document.createElement('script');
        script.innerHTML = `
            liveServer = new LiveServer(
                location.hostname,
                parseInt(location.port) || 80,
                location.pathname
            );
            liveServer.init();
        `;
        document.body.appendChild(script);
    }
});