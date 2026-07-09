function addStudent() {

    let name = document.getElementById("studentName").value;

    if(name !== "") {

        let li = document.createElement("li");
        li.innerText = name;

        document.getElementById("studentList").appendChild(li);

        document.getElementById("studentName").value = "";

li.innerHTML =
name + ' <button onclick="this.parentElement.remove()">Delete</button>';
    }
}
