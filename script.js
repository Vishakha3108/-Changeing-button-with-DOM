 var isstatus = document.querySelector("h5");

 var btn = document.querySelector("#add");
//  var removeFriend = document.querySelector("#remove")
var check = 0;

btn.addEventListener("click", function() {
    if(check == 0){

    
    isstatus.innerHTML = "Friends"
    isstatus.style.color = "green"
    btn.innerHTML = "Remove friend"
    check = 1
    }else {
        isstatus.innerHTML = "Stranger"
        isstatus.style.color = "red"
        btn.innerHTML = "Add friend"

        check = 0
    }
})

// removeFriend.addEventListener("click", function() {
//     isstatus.innerHTML = "Stranger"
//     isstatus.style.color = "red"
// })