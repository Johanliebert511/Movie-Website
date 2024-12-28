const arrows = document.querySelectorAll(".right-arrow");
const movieList = document.querySelectorAll(".movie-list");
arrows.forEach((arrows, index) => {
    const itemNumber = movieList[index].querySelectorAll("img").length;
    let counter = 0;
    arrows.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        counter++;
        if(itemNumber - (4 + counter) + (4 - ratio) >= 0){
            movieList[index].style.transform = `translateX(${movieList[index].computedStyleMap().get("transform")[0].x.value - 270
            }px)`;
            }
        else{
            movieList[index].style.transform = "translateX(0)";
            counter = 0;
            }
    });
    console.log(movieList[index].querySelectorAll("img").length);    
}); 
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".navbar-container, .container, .toggle, .sidebar, .sidebar-icons");
ball.addEventListener("click", () => {
    items.forEach(items =>{
        items.classList.toggle("active")
    })
    ball.classList.toggle("active")
})