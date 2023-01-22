import * as THREE from "three";

const geometry = new THREE.BoxGeometry( .1, .1, .1 ); // width, height, depth

// Material / MeshBasicMaterial
// A material for drawing geometries in a simple shaded way. This material is not affected by lights.
// const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 

// Material / MeshPhongMaterial
// A material for "shiny" surfaces with specular highlights.
// Performance > MeshStandardMaterial, MeshPhysicalMateral
const material = new THREE.MeshPhongMaterial( {color: 0x00ff00} ); 

const box = new THREE.Mesh( geometry, material );

export default box;