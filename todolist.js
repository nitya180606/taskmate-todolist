document.getElementById("newtask").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addtask();
    }
});
// function addtask() {
function addtask() {
      const taskinput = document.getElementById("newtask");
      const tasktext = taskinput.value.trim();
      const tasklist = document.getElementById("tasklist"); // ✅ important

      if (tasktext !== '') {
        const listitem = document.createElement("li");
        listitem.innerHTML = `
          <div class="task-content">
            <input type="checkbox">
            <span>${tasktext}</span>
          </div>
          <button class="delete-btn">×</button>
        `;

        const checkbox = listitem.querySelector('input[type="checkbox"]');
        const deleteBtn = listitem.querySelector('.delete-btn');

        // ✅ mark as completed
        checkbox.addEventListener('change', () => {
          listitem.classList.toggle('completed');
        });

        // ✅ delete task
        deleteBtn.addEventListener('click', () => {
          tasklist.removeChild(listitem);
        });

        tasklist.appendChild(listitem); // ✅ add to list
        taskinput.value = ''; // clear input
      }
    }
function logout() {
    window.location.href = "index.html";
}