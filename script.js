 const container = document.querySelector(".container")

 // we want to genertae 256 cell

for(let i = 0; i < 256; i++) {
     const cells = document.createElement("div")

          cells.classList.add("cell")

           container.append(cells)

     

};
