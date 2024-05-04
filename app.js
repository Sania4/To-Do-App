let todo = [];
let req = prompt("Please enter your request");

while (true) {
    if (req == "quit"){
        console.log("Quitting app");
        break;
    }

    if (req == "list") {
        console.log("_____________");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("_____________")
    }
    else if (req == "add") {
        let task = prompt("Enter your tasks to Add");
        todo.push(task);
        console.log("task added");
    }
    
    else if (req == "delete") {
        let idx = prompt("enter the task index");
        todo.splice(idx, 1);
        console.log("Task deleted")
    }

    else{
        console.log("WRONG Request")
    }
    req = prompt("enter your request")

}