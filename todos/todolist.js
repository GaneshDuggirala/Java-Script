let todoList=[]
// todoDisplay();


function addtodo(){
    let inputElement=document.querySelector('#search');
    let todoInput=inputElement.value;
    // console.log(todoinput);
    todoList.push(todoInput);
    todoDisplay();
}

function todoDisplay(){
    let displayItems=document.querySelector('#todo-items');
    displayItems.innerText='';
    let newHtml='';
    for(i=0;i<todoList.length;i++){
            newHtml+=`
            <div>
                <span>${todoList[i]}</span>
                <button onclick="todoList.splice(${i},1);
                todoDisplay();">Delete</button>
            </div>
        `;
        displayItems.innerHTML=newHtml;
    }   
} 