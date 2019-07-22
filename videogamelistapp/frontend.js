console.log("These are my games on my wishlist")
window.onload=function(){

    var xbox = document.querySelector("#xbox");
    var sub = document.querySelector("#sub");

    // var button = document.querySelector("sub");

    sub.addEventListener("click", function(ga){

        var con = xbox.value;
        console.log(con);
        xbox.value="";
    });
}