//DEFINING VARIABLES
let x;
let y;
const G_WIDTH= 300;
const G_HEIGHT= 300;

//ADDING ALL QUERY SELECTORS
const contain =document.querySelector('.container');
const buttons =document.querySelector('.buttons');
const tam = document.querySelector('.tam');
const res = document.querySelector('.reset');
//DEFINING THE CONTAINER AREA WITH DOM
contain.style.width= `${G_WIDTH}px`;
contain.style.height= `${G_WIDTH}px`;


tam.addEventListener ('click', function() {
    x = y = Number(prompt('Enter the grid size, it cannot be larger than 100'));
    console.log (typeof(x));
    console.log (x);

   switch(true){
    case (isNaN(x)):
        alert('Please enter a correct value');
        break;
    case (x > 100):
        alert('The value entered is too large, press the Resize button and enter a number between 1 and 100');
        break;
    case (x < 101):
        console.log (x);
        console.log (y);
        addGrid(x,y);
        break;
  
   }

});

res.addEventListener ('click', () => {
    contain.innerHTML= '';
});

function addGrid(){
    for (let i = 0; i < x; i++){
        for (let j = 0; j < y; j++){
            const cell =  document.createElement('div');
            cell.classList.add('cell');
            /*cell.style.border =  "1px solid black";*/
            cell.style.width= `${(G_WIDTH/x)}px`;
            cell.style.height= `${(G_HEIGHT/y)}px`;
            console.log (cell.style.height);
            /*cell.textContent=`${i+1}`;*/
            contain.appendChild(cell);
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "#DC143C";
            });
            cell.addEventListener('mouseout', () => {
                cell.style.backgroundColor = " ";
            });
        }
    }
    
}


