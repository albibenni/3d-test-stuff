console.log("hello 3d");
function init() {
    const canvas = document.createElement("canvas");


    const gl = canvas.getContext('webgl2');

    const message = gl ? "we got webgl2" : "we dont";

    console.log(message);
}

window.onload = init;
