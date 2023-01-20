import * as THREE from "three";

// Object3D -> Camera -> PerspectiveCamera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// 1. fov: filed of view that indicate how big is the angle of the camera.
// 2. aspect: the proportion that have the height in relation to the width
// 3, 4: how close and how far are the edges of the camera. the camera cannot see anything that is farther than 1000 meters or closer than 10 centimeters.
export default camera;