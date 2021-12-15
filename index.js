const area = document.getElementById('area');
let move = 0;
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
const winner = {
    X: "крестики",
    0: "нолики",
}

const content = document.getElementById('content');
const btnClose = document.getElementById('btn-close');
const boxes = [...document.getElementsByClassName('box')];
const cell = document.getElementsByClassName('box');

area.addEventListener('click', e => {
    if(e.target.className='box') {
        move % 2 === 0 ? e.target.innerHTML = "X" : e.target.innerHTML = "0";
        move++;
        check();
        }
    })

const check=()=>{

const arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];    
    for(i=0; i<arr.length; i++){
        if(
            cell[arr[i][0]].innerHTML==cell[arr[i][1]].innerHTML&&
            cell[arr[i][1]].innerHTML==cell[arr[i][2]].innerHTML&&
            cell[arr[i][0]].innerHTML!==""&&
            cell[arr[i][1]].innerHTML!==""&&
            cell[arr[i][2]].innerHTML!==""
            ) {
                const result=winner[cell[arr[i][0]].innerHTML];
                prepareResult(result);
                } 
                else if(boxes.forEach(cell => cell.innerHTML !== ""));
                {
                    preResult(); 
                    }
                    }
                }
            
        

        const prepareResult=(winner)=>{
            content.innerHTML=`Победили ${winner}!`;
            content.style.display="block";
        }

        const preResult = () => {
            
            content.innerHTML = `Ничья!`;
            content.style.display="block";
        }

        

function clearBoard() {
    gameActive = true;
    gameState = ["", "", "", "", "", "", "", "", ""];
    content.innerHTML = "";
    boxes.forEach(cell => cell.innerHTML = "");
}

btnClose.addEventListener('click', clearBoard);