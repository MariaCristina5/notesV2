const noteInput = document.querySelector(".note"); //
const noteContainerEl = document.querySelector(".note-container"); //
const closeBtn = document.querySelector(".close-btn"); //
const controlerEl = document.querySelector(".main-controler");
const notes = JSON.parse(localStorage.getItem("notes")); //
const moreBtn = document.getElementById(".dropdown-content");
const deleteBtn = document.getElementById("deleteNote");
const noteTitle = document.querySelector(".note-title"); //
const form = document.getElementById("form"); //
const noteBody = document.querySelector(".note-body"); //
// const noteBodyContainer = document.querySelector(".note-box-container");

// show/hide note controler container
controlerEl.addEventListener("click", () => {
  console.log("am apasat");
});

noteInput.addEventListener("click", () => {
  hideFunction();
  showFunction();
});

closeBtn.addEventListener("click", () => {
  hideFunction();
  showFunction();

  if (noteBody.value != "" || noteTitle.value != "") {
    addNewNote();
  }
  noteBody.value = "";
  noteTitle.value = "";
});

function hideFunction() {
  let x = document.querySelector(".note");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showFunction() {
  let y = document.querySelector(".note-container");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
// credinta la romani dan puric

//function for note container
function addNewNote() {
  controlerEl.innerHTML = "";
  const note = document.createElement("div");
  note.classList.add("note-box-container");

  note.innerHTML = `
    <div class="note-box-header">
        <button class="btns pin-btn-small"><i class="fa-solid fa-thumbtack"></i></button>
        <button type="button" class="btns btn-small" id="note-close-btn">
                    <i class="fas fa-times"></i></button>
        <div class="span">
            <span class="span-title">${document
              .querySelector(".note-title")
              .value.slice(0, 10)}</span><br>
            <span>${document
              .querySelector(".note-body")
              .value.slice(0, 15)}</span>
        </div>
    </div>
    <div class="more-tools-small">
        <button class="btns btn-small" title="Remind me"><i class="fa-solid fa-bell"></i></button>
        <button class="btns btn-small" title="Collaborator"><i
                class="fa-solid fa-user-plus"></i></button>
        <button class="btns btn-small" title="Background options"><i
                class="fa-solid fa-palette"></i></button>
        <button class="btns btn-small" title="Add image"><i class="fa-regular fa-image"></i></button>
        <button class="btns btn-small" title="Archive"><i class="fa-solid fa-box-archive"></i></button>
        <div class="dropdown">
        <button class="btns btn-small" title="More" id="moreBtn"><i class="fa-solid fa-angles-down"></i></button>
        </div>
        <div id = "myDropdown" class="dropdown-content">
                    <a href="#" id="deleteNote">Delete note</a>
                </div>
    </div>



        `;
  const noteCloseBtn = note.querySelector("#note-close-btn");

  // controlerEl.appendChild(note);
  document.querySelector("body").appendChild(note);

  // de editat notita
  // note.addEventListener("click", () => {
  //   showFunction();
  //   hideFunction();
  // note.remove()
  // });

  //close the note container
  noteCloseBtn.addEventListener("click", () => {
    note.remove();
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = noteTitle.value;
  let body = noteBody.value;

  console.log(localStorage.setItem(title, body));
});
