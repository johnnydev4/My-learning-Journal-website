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

export {renderGrid}