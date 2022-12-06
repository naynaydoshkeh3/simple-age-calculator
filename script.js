
function getAge() {
    var dob = document.getElementById("DOB");
    var value = dob.value;


    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return document.getElementById("age").innerHTML = age
    
    
}

