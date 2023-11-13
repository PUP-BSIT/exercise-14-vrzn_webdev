function validate() {
    let name = document.querySelector("#input_name").value.trim();
    let comment = document.querySelector("#input_comment").value.trim();
    let commentButton = document.querySelector("#btn");
    commentButton.disabled = !(name.length && comment.length);
}

function addComment() {
    let name = document.querySelector("#input_name").value;
    let comment = document.querySelector("#input_comment").value;

    if (!name || !comment) return;  
    const commentSection = document.querySelector(".guide-comment");
    commentSection.appendChild(Object.assign(document.createElement("div"), {
      className: "comment-style",
      innerHTML: `
        <p class="comment-name">${name}</p>
        <p class="comments">${comment}</p>`
    }));
    
    document.querySelector("#input_name").value = "";
    document.querySelector("#input_comment").value = "";
    document.querySelector("#btn").disabled = true;
}