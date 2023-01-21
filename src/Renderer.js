import * as THREE from "three";

// const renderer = new THREE.WebGL1Renderer();

// What is Anti-Aliasing?
/*
Anti-aliasing is a technique that smooths out the edges seen in images while playing games on a PC. 
It makes them appear less blurred and blends colors to make visuals look natural.
*/
const renderer = new THREE.WebGL1Renderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

export default renderer;
