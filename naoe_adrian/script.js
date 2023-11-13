function setupCommentSection() {
  let commentText = document.querySelector("#comment_text");
  let authorInput = document.querySelector("#author");
  let submitButton = document.querySelector("#submit_comment");
  let newComments = document.querySelector("#new_comments");

  commentText.addEventListener("input", () => {
    submitButton.disabled =
      commentText.value.trim() === "" || authorInput.value.trim() === "";
  });

  authorInput.addEventListener("input", () => {
    submitButton.disabled =
      commentText.value.trim() === "" || authorInput.value.trim() === "";
  });

  submitButton.addEventListener("click", () => {
    let author = authorInput.value;
    let comment = commentText.value;
    if (author && comment) {
      let newComment = document.createElement("div");
      newComment.innerHTML = `
        <p>
          <strong>${author}</strong> - ${new Date().toLocaleDateString()}
        </p>
        <p>
          <em>${comment}</em>
        </p>
      `;

      newComments.appendChild(newComment);

      commentText.value = "";
      authorInput.value = "";
      submitButton.disabled = true;
    }
  });
}

setupCommentSection();
