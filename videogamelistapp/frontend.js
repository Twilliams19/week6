console.log("These are my games on my wishlist")
window.onload=function(){

    var xbox = document.querySelector("#xbox");
    var sub = document.querySelector("#sub");
    var go = document.querySelector("#con");
    // var button = document.querySelector("sub");

    sub.addEventListener("click", function(ga){

        var con = xbox.value;
        go.innerHTML = con;
        console.log(con);
        xbox.value="";
    });
}