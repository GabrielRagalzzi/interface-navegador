var page_fav = document.querySelector("#favoritos");
var page_download = document.querySelector("#downloads");
var page_user = document.querySelector("#user");
var page_config = document.querySelector("#config");

var fav = document.querySelector(".page_fav");
var down = document.querySelector(".page_down");
var user = document.querySelector(".page_user");
var config = document.querySelector(".page_config");

page_fav.addEventListener("click", function() {

    if(fav.style.display == "flex"){
        fav.style.display = "none";
    }
    else{
        fav.style.display = "flex";
    }
});

page_download.addEventListener("click", function() {

    if(down.style.display == "flex"){
        down.style.display = "none";
    }
    else{
        down.style.display = "flex";
    }
});

page_user.addEventListener("click", function(){

    if(user.style.display == "flex"){
        user.style.display = "none";
    }
    else{
        user.style.display = "flex";
    }
});

page_config.addEventListener("click", function(){

    if(config.style.display == "flex"){
        config.style.display = "none";
    }
    else{
        config.style.display = "flex";
    }
});

function theme(color){
    var body = document.querySelector("body");

    body.className = color;
}