/*
INFO: WebGL API
A 3D & 2D rendering API based on OpenGL ES, using <canvas> to access GPU acceleration
1. Works with WebGLRenderingContext for WebGL2
2. Uses GLSL shaders for visuals
3. Powerful, but steep learning curve
*/

const canvas = document.getElementById("c");
const gl = canvas.getContext("webgl");
