
class infoTasks {
    
    constructor(){
    this.newLi = document.createElement("li")
    this.DeleteE = document.createElement("button")
    this.completeE = document.createElement("button")
    this.DeleteT = document.createTextNode("delete")
    this.completeT = document.createTextNode("complete")
    this.label = document.createElement("label")
    this.arr=[]
}
}
class funcTasks extends infoTasks {
    // Add Element
    addElement(i) {
        this.DeleteE.type = "button";
        this.completeE.type = "button";
        this.DeleteE.appendChild(this.DeleteT);
        this.completeE.appendChild(this.completeT);
        this.label.innerHTML = data.$input.value;
        this.arr.push(this.label.innerHTML)
        this.newLi.append(this.label, this.DeleteE, this.completeE);
        data.$results.appendChild(this.newLi);
        this.newLi.classList.add("liSty");
        this.DeleteE.classList.add("delClass");
        this.completeE.classList.add("comClass");
        this.DeleteE.innerHTML = "x";
        this.completeE.innerHTML = "Complete";
        this.DeleteE.style.cursor = "pointer";
        this.completeE.style.cursor = "pointer";
        this.completeTask(i)
        this.deleteTask()
     }
    //completed tasks
    completeTask(i) {
        let a = this.label
        let b = this.newLi
        let c = this.DeleteE
        let d = this.completeE
        let f = this.arr[i]
        this.completeE.addEventListener("click", function (e) {
            console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}, f: ${f}`)
            data.c = 1;
             a.innerHTML = f;
             b.append(a, c);
            console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}, f: ${f}`)
            data.$completed.appendChild(b);
            d.style.display = "none";
            b.style.backgroundColor="rgba(87, 87, 90, 0.4)"
            a.style.textDecorationLine = "line-through"
        })
    }
    //delete tasks
    deleteTask() {
        this.DeleteE.addEventListener("click", function (e) {
            let parentD = this.parentNode;
            parentD.remove();
        })
    }
}
let Var;
class InfoHtmlPage {
    constructor() {
        this.$input = document.querySelector("#new_item");
        this.$btn = document.querySelector("#add-btn");
        this.$results = document.querySelector(".results");
        this.$completed = document.querySelector(".completed");
        this.$msg = document.querySelector(".warn");
        this.$form = document.querySelector("#todo_form");
    }

    addTaskByBtn(n) {
        Var = new funcTasks();
        const v = this.$input.value;
        let w = () => this.warnMsg()
        this.$form.addEventListener("click", function (e) {
            e.preventDefault()
            if (n == 2) {
                if (v !== "") {
                   let i=0
                    console.log("yes")
                    Var.addElement(i)
                    i++
                   
                    n = 1; 
                }
                else w()
                Var.completeE.style.display = "block";
            }
        })
    }
    //warn massage
    warnMsg() {
        this.$msg.style.display = "block";
        this.$input.style.border = "1px solid red"
    }
}
//calling functions:
let data = new InfoHtmlPage()
let addTasks = (n) => data.addTaskByBtn(n)
let inf = new funcTasks()
let com = () => inf.completeTask()
console.log(com())