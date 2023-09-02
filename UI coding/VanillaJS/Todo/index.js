import './styles.css';

// Write your JavaScript here.
(()=>{
  
  const $inputElm = document.querySelector("input")
  const $btnElm = document.querySelector("#submit")
  const taskElem = document.querySelector("ul")


  const addTask = (label)=>{
    const $newTaskElement = document.createElement("li")

    const $span = document.createElement("span")

    $span.textContent = label

    $newTaskElement.appendChild($span)

    const $deleteBtn = document.createElement("button")
    $deleteBtn.textContent = "Delete"
    $newTaskElement.appendChild($deleteBtn)

    taskElem.append($newTaskElement)

  }

  const deleteTask = ($itemElement)=>{
    $itemElement.parentNode.removeChild($itemElement)

  }


  $btnElm.addEventListener("click",(event)=>{
    const inputElementVal = $inputElm.value
    console.log({inputElementVal})
    addTask(inputElementVal)
  })

  
  taskElem.addEventListener("click",(event)=>{
    console.log({event})

    if(event.target.tagName==="BUTTON"){
      deleteTask(event.target.parentNode)
    console.log("EVENT",event.target.parentNode)
    }
  })


})()