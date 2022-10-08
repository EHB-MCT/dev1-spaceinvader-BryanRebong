"use strict";

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

drawRect();

function drawRect() {

// Background black rectangle:
    context.lineWidth = 1;
    context.fillStyle = 'black';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.stroke();
    context.fill();

//Top middle rectangle:
    context.lineWidth = 1;
    context.fillStyle = '#66FF00';
    context.beginPath();
    context.rect(125, 75, 150, 50);
    context.fill();

//Top left rectangle:
    context.lineWidth = 1;
    context.fillStyle = '#66FF00';
    context.beginPath();
    context.rect(75, 125, 100, 50);
    context.fill();

//Top right rectangle:
context.lineWidth = 1;
context.fillStyle = '#66FF00';
context.beginPath();
context.rect(225, 125, 100, 50);
context.fill();  

//Bottom left square:
context.lineWidth = 1;
context.fillStyle = '#66FF00';
context.beginPath();
context.rect(75, 225, 50, 50);
context.fill();

//Bottom middle square:
context.lineWidth = 1;
context.fillStyle = '#66FF00';
context.beginPath();
context.rect(175, 225, 50, 50);
context.fill();

//Bottom right square:
context.lineWidth = 1;
context.fillStyle = '#66FF00';
context.beginPath();
context.rect(275, 225, 50, 50);
context.fill();

}