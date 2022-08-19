// Step 1 validate input field
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

// Step 2 add a new task to
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task" draggable="true">
            <button id="edit">
                <i class="fa-regular fa-pen-to-square" style="font-size: 1.5em;"></i>
            </button>
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
               
                <button class="delete">
                    <i class="far fa-trash-alt" style="font-size: 1.5em;"></i>
                </button>
            </div>
        `;

// Step 3 deleting a task
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

// Step 4 crossing out a completed task
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

// Step 5 clearing input field after each entry
        document.querySelector("#newtask input").value = "";
    }
}



// Step 6 trigger the enter button
var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    document.getElementById("push").click();
  }
});

// Step 7 make tasks draggable
const draggables = document.querySelectorAll('.task')
const containers = document.querySelector('#tasks')

draggables.forEach(task => {
    task.addEventListener('dragstart', () => {
        console.log('drag start')
    })
 

task.addEventListener('dragend', () => {
    task.classList.remove('dragging');
})

}) 

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault() // enable dropping 
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})


// Step 8 Determine task order in function of mouse position
function getDragAfterElement(container, y) {
   const draggableElements = [...container.querySelectorAll('.task:not(.dragging)')]

   return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    console.log(offset);
    if(offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
    } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
   
}

// Step 9 
// Button to edit the task
// Je clique sur le bouton edit
// Je transforme la task en input 
// Bouton annuler et enregistrer apparait
// J'enregistre la valeur de l'imput comme nouvelle task au même index

var newText = document.getElementById('edit').innerHTML;
var editNew = edit.onclick = function() {

}

// Button clear all tasks
    function deleteChild() {
        var e = document.getElementById('tasks');
        
        //e.firstElementChild can be used.
        var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    }
    var btn = document.querySelector('.deleteAll').onclick = function() {
        deleteChild();
    }


// Step 10 use Locacl.storage to save to do list in cache


// Step 11 si tache trop longue revenir à la ligne et mettre des marges 