// Script de estilização do Like, por Samuel
let like = document.querySelectorAll(".like")

like.forEach(function(button){
    button.addEventListener("click", () =>{
        if(button.style.backgroundImage == `url("./static/icons/focusLikeIcon.png")`){
            button.style.backgroundImage = `url("./static/icons/likeIcon.png")`
        }else{
            button.style.backgroundImage = `url("./static/icons/focusLikeIcon.png")`
        }
    })
})


document.addEventListener('DOMContentLoaded', function () {
    const moreOptionsButtons = document.querySelectorAll('.moreOptions-publication');
    let activeMoreOptionDiv = null;

    moreOptionsButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();

            const moreOptionDiv = this.nextElementSibling;

            if (activeMoreOptionDiv && activeMoreOptionDiv !== moreOptionDiv) {
                activeMoreOptionDiv.style.display = 'none';
            }
            moreOptionDiv.style.display = moreOptionDiv.style.display === 'block' ? 'none' : 'block';

            activeMoreOptionDiv = moreOptionDiv.style.display === 'block' ? moreOptionDiv : null;
        });
    });
    document.addEventListener('click', function () {
        if (activeMoreOptionDiv) {
            activeMoreOptionDiv.style.display = 'none';
            activeMoreOptionDiv = null;
        }
    });
});