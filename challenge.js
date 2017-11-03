// Comments

const commentForm = document.getElementById("comment-form");
commentForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let text = commentForm.querySelector("input").value;
  let comments = document.querySelector(".comments");
  let newComment = document.createElement("p");
  newComment.innerText = text;
  let commentField = newComment.innerText;
  comments.appendChild(newComment);
});

// TIMER

let countBox = document.getElementById("counter");
let addTime = document.getElementById("+");
let minusTime = document.getElementById("-");
let gene = document.getElementById("<3");
let numHash = {};

addTime.addEventListener("click", function() {
  let count = parseInt(countBox.innerText);
  count = count + 1;
  countBox.innerText = count;
});

minusTime.addEventListener("click", function() {
  let count = parseInt(countBox.innerText);
  count = count - 1;
  countBox.innerText = count;
});

gene.addEventListener("click", function() {
  let count = parseInt(countBox.innerText);
  let likes = document.querySelector(".likes");
  let newLike = document.createElement("li");
  newLike.setAttribute("id", `data-num ${count}`);
  let likeField = newLike.innerText;

  if (numHash[count] > 0) {
    numHash[count] += 1;
    oldLike = document.getElementById(`data-num ${count}`);
    oldLike.innerText = `${count} has been liked ${numHash[count]} times.`;
  } else {
    numHash[count] = 1;
    likes.appendChild(newLike);
    newLike.innerText = `${count} has been liked 1 time.`;
  }
});
