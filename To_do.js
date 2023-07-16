//varaibles

const addTask=document.getElementById('add-task-id');
const taskContainer=document.getElementById('task-container-id');
const inputTask=document.getElementById('input-task-id');

//addTask.addEventListener('click',add_task());
//for appending child we need a 'id'  not a "class";

function add_task(){
      let task=document.createElement('div');
      task.classList.add('task-class');

      let li=document.createElement('li');
      li.innerText=`${inputTask.value}`;
      task.appendChild(li);

      let checkButton=document.createElement('button');
      checkButton.innerHTML=`<i class="fa-solid fa-check"></i>`;
      checkButton.classList.add('checkTask-class');
      task.appendChild(checkButton);

      let deleteButton=document.createElement('button');
      deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>';
      deleteButton.classList.add('deleteTask-class');
      task.appendChild(deleteButton);

      if(inputTask.value === ""){
        alert('Please Enter a Task!');
      }else{
        taskContainer.appendChild(task);
      }

      inputTask.value="";


      checkButton.addEventListener('click',function(){
        
        checkButton.parentElement.style.textDecoration = "line-through";
        console.log(checkButton.parentElement);
      })
      deleteButton.addEventListener('click',function(e){
             let target=e.target;
             target.parentElement.parentElement.remove();
      })

}
