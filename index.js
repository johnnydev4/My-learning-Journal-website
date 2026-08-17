import blogs from "./data.js"
import { renderGrid } from "./shared.js";


// redirect when nav btns clicked
document.getElementById("hero-redirect").addEventListener("click", function(e){
    window.location.href = "hero.html";
});


// add 3 more blogs to dom
document.getElementById("view-btn").addEventListener("click", function(e){
    document.querySelector(".view-more").remove()
    renderGrid(blogs.slice(0, 9))
})

renderGrid(blogs.slice(0, 6))


export {renderGrid}

