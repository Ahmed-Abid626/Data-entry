 document.getElementById("submit").addEventListener("click",addData)
function addData(event) {
    event.preventDefault();
    var inputs = ['nameInput', 'ageInput', 'instInput'];
    var newRow = document.getElementById('dataTable').insertRow(-1);
    inputs.forEach(input => newRow.insertCell().innerHTML = document.getElementById(input).value);
    
}   
