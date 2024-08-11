import { Post } from "./post";
import "./style.css";

const form = document.getElementById("form");
const input = document.querySelector("#myInput");

window.addEventListener('load', Post.renderList)
form.addEventListener("submit", submitForHandler);


function submitForHandler(event) {
  event.preventDefault();
    const task = {
      text: input.value.trim(),
      date: new Date().toJSON(),
    };
 
    Post.create(task).then(() => {
      input.value = "";
      input.className = "";
    });

}







