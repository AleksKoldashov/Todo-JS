export class Post {
  static create(task) {
    const all = getQuestionsFromLocalStorage();
    all.push(task);
    localStorage.setItem("tasks", JSON.stringify(all));
    Post.renderList()
  }

  static renderList() {
    const tasks = getQuestionsFromLocalStorage();
    const html = tasks.length
      ? tasks.map(toCard).join("")
      : `<h2>Вы пока ничего нес просили</h2>`;

    const list = document.getElementById("list");

    list.innerHTML = html;
  }
}

function getQuestionsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function toCard(task) {
  return ` 
  <div>
  ${new Date(task.date).toLocaleDateString()}
  ${new Date(task.date).toLocaleTimeString()}
  </div>
  <div>${task.text}</div>
  <br />`;
}
