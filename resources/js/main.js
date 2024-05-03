let submit = document.getElementById("submit");
let clear = document.getElementById("reset");

// Create a new list item when clicking on the "Submit" button
const newElement = (event) => {
event.preventDefault(); //Keeps the new list item created from disapearing 
// Get the value of the new todo input and trim any leading/trailing whitespace
    let input = document.getElementById("todo").value.trim();
        ul = document.getElementById('list');
        newLi = document.createElement("li");
        newLi.innerHTML = input;
    // create the done button set the ID and Text append button to 'li'
    let doneBtn = document.createElement("button");
        doneBtn.setAttribute("id", "done");
        doneBtn.innerText = "Done";
 
        newLi.appendChild(doneBtn);

    // create the delete button set the id and text append button to 'li'
    let delBtn = document.createElement("button");
        delBtn.setAttribute("id", "delete");
        delBtn.innerText = "Delete";

        newLi.appendChild(delBtn);
 
        ul.appendChild(newLi);
    // Clear input field after adding todo
        document.getElementById('todoForm').reset();
    
    // Event listener for the "Done" button to toogle completion
        doneBtn.addEventListener('click', function () {
            todoComplete(newLi);
        });

    // Event listener for the "Delete" button to remove the todo
        delBtn.addEventListener('click', function() {
            deleteTodo(newLi);
        });
}

submit.addEventListener('click', newElement);


// Function to toggle the completion status of a todo item
function todoComplete(newLi) {
    newLi.classList.toggle('completed');
}

function deleteTodo(newLi) {
    ul.removeChild(newLi);
}


// document.addEventListener('DOMContentLoaded', removeItem);