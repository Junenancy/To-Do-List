const toDoItems = document.querySelector(".to-do-items");
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event) {
    if(event.key === "Enter")
    addItem();
});

function addItem() {
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    let checkIcon = document.createElement("i");
    let trashIcon = document.createElement("i");

    divParent.className = "items";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className =" fa-solid fa-square-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function(event) {
        checkIcon.style.color = "limegreen";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "Darkgray";
    trashIcon.addEventListener("click", function() {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = "";
}


