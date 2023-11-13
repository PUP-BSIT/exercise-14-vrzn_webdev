const usernameInput = document.querySelector("#username");
const commentInput = document.querySelector("#input_comment");
const commentButton = document.querySelector(".comment-btn");
const commentSection = document.querySelector(".comment-card");

usernameInput.addEventListener("input", toggleButtonState);
commentInput.addEventListener("input", toggleButtonState);

function toggleButtonState() {
  const isInputValid = usernameInput.value.trim() && commentInput.value.trim();
  commentButton.classList.toggle("active", isInputValid);
  commentButton.disabled = !isInputValid;
}

commentButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const commentText = commentInput.value.trim();

  if (!(username && commentText)) return;

  const newComment = document.createElement("div");
  newComment.classList.add("comment-info");
  newComment.innerHTML = `
    <p class="name">${username}</p>
    <p class="comment">${commentText}</p>
  `;

  commentSection.insertBefore(newComment, commentSection.lastElementChild);

  usernameInput.value = "";
  commentInput.value = "";
  toggleButtonState();
});
