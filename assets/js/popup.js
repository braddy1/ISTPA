window.addEventListener("load", function(){
this.setTimeout(
    function open(event){
        document.querySelector(".popup ").style.
        display = "block";
    },
    2000
)   
});

document.querySelector("#close").addEventListener
("click", function(){
    document.querySelector(".popup").style.display =
    "none";
   
});