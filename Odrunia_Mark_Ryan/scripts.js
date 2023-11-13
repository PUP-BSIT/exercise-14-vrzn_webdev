function commentButton() {
  let name = document.querySelector("#full_name");
  let txtarea = document.querySelector("#story");
  let commentButton = document.querySelector("#comment_button");

  if (name.value.trim().length && txtarea.value.trim().length) {
    commentButton.disabled = false;
  } else {
    commentButton.disabled = true;
  }
}

function commentForm() {
  let author = document.querySelector("#full_name");
  let text = document.querySelector("#story");
  let submit = document.querySelector("#comment_button");
  let content = document.querySelector(".comments");

  let user = author.value;
  let newtext = text.value;

  if (user && newtext) {
    let newcontent = document.createElement("p");
    newcontent.innerHTML = `
        <b>${user}</b>
        <p><em>
        ${newtext}
        </em></p>`;

    content.appendChild(newcontent);

    author.value = "";
    text.value = "";
    submit.disabled = true;
  }
}

document
  .querySelector("#comment_button")
  .addEventListener("click", commentForm);
