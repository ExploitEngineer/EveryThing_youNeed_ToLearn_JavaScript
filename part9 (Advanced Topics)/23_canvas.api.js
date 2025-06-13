/*
INFO: Canvas API (2D)
Provides a pixel-based 2D drawing API via <canvas>, great for animations, charts, games, and image manipulation
*/

// Common Methods
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
