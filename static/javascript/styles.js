// Script de estilização do Like, por Samuel
let like = document.querySelectorAll(".like")

like.forEach(function(button){
    button.addEventListener("click", () =>{
        if(button.style.backgroundImage == `url("../icons/focusLikeIcon.png")`){
            button.style.backgroundImage = `url("../icons/likeIcon.png")`
        }else{
            button.style.backgroundImage = `url("../icons/focusLikeIcon.png")`
        }
    })
})
