let container = document.getElementById("sketch_pad")
let black_pen = document.getElementById("black_pen")
let color_pen = document.getElementById("colorful_pen")
let reset = document.getElementById("clear")
let grid_generator = document.getElementById("grid_generator")
let colorful_pen = false;
let cell_value = 16
let cell_size = Math.min(container.clientHeight,container.clientWidth)/cell_value



function create_grid(cell_value,cell_size){
    for (let i = 0; i < cell_value * cell_value; i++) {
        let div = document.createElement("div");
        div.style.width = `${cell_size}px`;
        div.style.height = `${cell_size}px`;
        div.className = "cell";
        container.appendChild(div);
    }
    sketch(document.querySelectorAll(".cell"))
}

function sketch(grid){
    grid.forEach((element)=>{
        element.addEventListener("mouseover", function(){
            if (colorful_pen) {
                element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            }else{
                element.style.backgroundColor = "black"
            }
        
        })
    })
}

color_pen.addEventListener("click", () => {
    colorful_pen = true
})

black_pen.addEventListener("click", () => {
    colorful_pen = false 
})

grid_generator.addEventListener("click", () =>{
    cell_value = parseInt(prompt("How many cells in rows and columns ?"))
    console.log(cell_value)
    cell_size = Math.min(container.clientHeight,container.clientWidth)/cell_value
    container.innerHTML = ""
    create_grid(cell_value,cell_size)

    
})



reset.addEventListener("click",()=>{
    document.querySelectorAll(".cell").forEach((element)=>{
        element.style.backgroundColor = "white"
    })
})


create_grid(cell_value,cell_size)

