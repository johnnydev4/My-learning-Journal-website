import blogs from "./data.js"

// add 3 more blogs to dom
document.getElementById("view-btn").addEventListener("click", function(e){
    document.querySelector(".view-more").remove()
    renderGrid(blogs.slice(0, 9))
})






// show 6 blogs on dom
function renderGrid(data){
const html = data.map(function(card){
    return `
    <div class="card">
                <img src="${card.image}" width="374px" height="232px">
                <p class="date">${card.date}</p>
                <h2>${card.title}</h2>
                <p class="subtext">${card.paragraph}</p>
            </div>
    `
}).join("")

document.getElementById("blog-grid").innerHTML = html 
}

renderGrid(blogs.slice(0,6))

