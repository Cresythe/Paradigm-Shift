// parameters for view
const viewHeight = 800; 
const viewLength = 600; 

// variables
let bg; 
let character; 
let up; 
let down; 
let left;
let right; 
let gameLoopFn; 

// Aliases
const { Application } = PIXI; 
const loader = PIXI.Loader.Shared; 
const { resources} = PIXI.Loader.Shared; 
const { Sprite } = PIXI
const { Text } = PIXI 

//start of PIXI application
const app = new PIXI.Application({
        width: 800, 
        height: 800,
        antialias: true, 
        transparent: false, 
        resoultion: 1, 
    }
);

//Viewport for game
document.body.appendChild(app.view); 