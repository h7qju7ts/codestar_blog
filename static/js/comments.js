const editButtons = document.getElementsNyClassName("btn-edit");
const commentText = document.getElementById("id_body");
const commentForm = document.getElementById("commentForm");
const submitButton = document.getElementById("submitButton");


/** 
 * Initializes edit functionality for thr provided edit buttons 
 * For each button in the 'editButtons' collection:
 * -Retrives the associated coment's ID upon click.
 * -Fetches the content of the corresponding comment.
 * -Populates the 'commentText' input/textarea with the comment's content for editing.
 * -Updates the submit button's text to "Update".
 * -Sets the form's action attribute to the 'edit_comment/{commentID}' endpoint
 * */ 


for (let button of editButtons) {
    button.addEventListener("click", (e) => {
        let commentId = e.target.getAttribute("comment_id");
        let commentContent = document.getElementById(`comment${commentId}`).innerText;
        commentText.value = commentContent;
        submitButton.innerText = "Update";
        commentForm.setAttribute("action", `edit_comment/${commentId}`);
    })
}