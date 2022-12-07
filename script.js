
let title = document.getElementById("title")
let description = document.getElementById("description")
let form = document.querySelector("form")
let maindiv = document.querySelector(".maincontainer")
let task = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : []
console.log(task)

function displaytask()
{
    task.forEach((value,index)=>
    {
        console.log(value)
        console.log(index)
        const taskdiv =document.createElement("div")
        taskdiv.setAttribute('class','display-task')

        const innerdiv = document.createElement("div")
        taskdiv.append(innerdiv)

        const heading=document.createElement("p")
        heading.innerText=value.title
        innerdiv.append(heading)

        const des = document.createElement("span")
        des.innerText=value.description
        innerdiv.append(des)
        
        const delbtn = document.createElement("button")
        delbtn.setAttribute('class','delete-btn')
        delbtn.innerText="-"
        taskdiv.append(delbtn)

         maindiv.append(taskdiv)
        
         delbtn.addEventListener('click',()=>{
            hidetask()
            task.splice(index,1)
            localStorage.setItem('task',JSON.stringify(task))
            displaytask()
            
         })

    })
}
displaytask()
function hidetask()
{
    task.forEach(()=>
    {
        let div=document.querySelector(".display-task")
        div.remove()
    })
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    hidetask()
    task.push({title:title.value,description:description.value})
    localStorage.setItem('task',JSON.stringify(task))
    console.log(task)
    displaytask()
})
