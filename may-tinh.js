function maytinh(value){
    let result = document.getElementById("value").value
    document.getElementById("value").value = result + value
}
function result() {
    let result = document.getElementById("value").value
    document.getElementById("value").value = eval(result)
}

function clearR() {
    document.getElementById("value").value = ""
}