let usernameInput = document.querySelector("#username");
let commentInput = document.querySelector("#input_comment");
let commentButton = document.querySelector(".comment-btn");
let commentSection = document.querySelector(".comment-card");

usernameInput.addEventListener("input", toggleButtonState);
commentInput.addEventListener("input", toggleButtonState);

function toggleButtonState() {
  let isInputValid =
    usernameInput.value.trim() !== "" && commentInput.value.trim() !== "";
  commentButton.classList.toggle("active", isInputValid);
  commentButton.disabled = !isInputValid;
}

commentButton.addEventListener("click", () => {
  let username = usernameInput.value.trim();
  let commentText = commentInput.value.trim();

  if (username && commentText) {
    let newComment = document.createElement("div");
    newComment.classList.add("comment-info");
    newComment.innerHTML = `
      <p class="name">${username}</p>
      <p class="comment">${commentText}</p>
    `;

    commentSection.insertBefore(newComment, commentSection.lastElementChild);

    usernameInput.value = "";
    commentInput.value = "";
    toggleButtonState();
  }
});
