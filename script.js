 const container = document.querySelector(".container");
 const button = document.querySelector("#NewBtn");
 const buttonTwo = document.querySelector("#RestBtn");

 // we want to genertae 256 cell

function createGrid(size) {
    container.replaceChildren()
    for(let i = 0; i < size * size; i++) {
     const cells = document.createElement("div")
     
          cells.classList.add("cell")

           container.append(cells)

           cells.addEventListener("mouseover", () => {
               cells.style.backgroundColor = "yellow"
    })
}
}
createGrid(16)
button.addEventListener("click", () => {
        
    let NewGrid = Number(prompt("Enter Grind"));
        NewGrid

    if(!NewGrid || NewGrid === 0) {
            return
    }
        createGrid(NewGrid)
})
buttonTwo.addEventListener("click", () => {
    const cells = container.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.style.backgroundColor = "#000";
        
    });
});
// you must correct some part 

