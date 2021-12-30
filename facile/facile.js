const newGameBtn = document.getElementById('newGameBtn')
const hintBtn = document.getElementById('hintBtn')

var cell0 = document.getElementById('cell 0')
var cell1 = document.getElementById('cell 1')
var cell2 = document.getElementById('cell 2')
var cell3 = document.getElementById('cell 3')

var cell4 = document.getElementById('cell 4')
var cell5 = document.getElementById('cell 5')
var cell6 = document.getElementById('cell 6')
var cell7 = document.getElementById('cell 7')

var cell8 = document.getElementById('cell 8')
var cell9 = document.getElementById('cell 9')
var cell10 = document.getElementById('cell 10')
var cell11 = document.getElementById('cell 11')

var cell12 = document.getElementById('cell 12')
var cell13 = document.getElementById('cell 13')
var cell14 = document.getElementById('cell 14')
var cell15 = document.getElementById('cell 15')

const cell = [
    [cell0, cell1, cell2, cell3], 
    [cell4, cell5, cell6, cell7],
    [cell8, cell9, cell10, cell11],
    [cell12, cell13, cell14, cell15]
]

const grid = [
    [
        [3, 2, 4, 1],
        [4, 1, 2, 3],
        [2, 3, 1, 4],
        [1, 4, 3, 2]       
    ],
    [
        [2, 3, 1, 4],
        [1, 4, 3, 2],
        [3, 2, 4, 1],
        [4, 1, 2, 3]       
    ],
    [
        [1, 4, 3, 2], 
        [2, 3, 1, 4],
        [4, 1, 2, 3], 
        [3, 2, 4, 1]
    ],
    [
        [4, 1, 2, 3], 
        [3, 2, 4, 1], 
        [1, 4, 3, 2], 
        [2, 3, 1, 4]
    ]
    
]

newGameBtn.addEventListener('click', startGame)


function startGame(){
    let newGrid = randomGrid(grid)
    for(let i = 0; i < 4 ; i++){
        for(let j = 0; j < 4; j++){
            cell[i][j].innerText = newGrid[i][j]
            cell[i][j].classList.add('show')
        }
    }
}

function randomGrid(grid){
    let newGrid = []
    let number = Math.round(Math.random() * 10) + 1
    if(number < 3){
        newGrid = grid[0]
    }else if(number < 5){
        newGrid = grid[1]
    }else if(number < 7){
        newGrid = grid[2]
    }else{
        newGrid = grid[3]
    }
    return newGrid
}

function randomRemoveGrids(){
    
}







