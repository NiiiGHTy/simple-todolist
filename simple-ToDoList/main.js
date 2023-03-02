let $ = document

let inputElm = $.querySelector('.text')
let myForm = $.querySelector('form')
let MyList = $.querySelector('ul')

myForm.addEventListener('submit' , function(event){

    event.preventDefault()
})

function addNewTodo(myNewTask){

    let newLi = $.createElement('li')

    newLi.className = 'li-item'

    let newSpan = $.createElement('span')

    newSpan.innerHTML = myNewTask

    let newDelete = $.createElement('i')

    newDelete.className = 'uil uil-trash'

    newLi.append(newSpan , newDelete)

    MyList.append(newLi)


    newDelete.addEventListener('click' , function(event){

        event.target.parentElement.remove()
    })

}

inputElm.addEventListener('keydown' , function(event){

    let myNewTask = event.target.value

    if(event.keyCode===13){

        if(myNewTask){

            addNewTodo(myNewTask)
        }
    }
})