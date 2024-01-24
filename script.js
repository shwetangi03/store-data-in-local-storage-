
function handleFormSubmit(event) {
    event.preventDefault();

    // collect user details 
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value

    // store in local storage 
    let obj = {
        username,
        email,
        phone
    }

    localStorage.setItem(obj.email, JSON.stringify(obj))
    showUserOneScreen(obj)

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

}
function showUserOneScreen(obj) {
    let parentEle = document.getElementById('userList')

    const childEle = document.createElement("li")
    childEle.textContent = obj.username + "-" + obj.email + "-" + obj.phone

    const deleteButton = document.createElement("input")
    deleteButton.type = "button"
    deleteButton.value = "Delete"
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email)
        parentEle.removeChild(childEle)
    }

    const editButton = document.createElement("input")
    editButton.type = "button"
    editButton.value = "Edit"
    editButton.onclick= () => {
        localStorage.removeItem(obj.email)
        parentEle.removeChild(childEle)

        document.getElementById("username").value = obj.username;
        document.getElementById("email").value = obj.email;
        document.getElementById("phone").value = obj.phone;
    }

    childEle.appendChild(deleteButton)
    childEle.appendChild(editButton)
    parentEle.appendChild(childEle)
}
