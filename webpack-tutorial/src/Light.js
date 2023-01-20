import * as THREE from "three";

// Object3D/Light/AmbientLight
// This light globally illuminates all objects in the scene equally.
// every direction
const light = new THREE.AmbientLight( 0x404040 ); // soft white light

// Object3D/Light/DirectionalLight
/*
A light that gets emitted in a specific direction. 
This light will behave as though it is infinitely far away and the rays produced from it are all parallel. 
The common use case for this is to simulate daylight; the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel.
*/
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
light.add(directionalLight);
// Object3D/Light/DirectionalLight/Properties/.position: Vector3
// This is set equal to Object3D.DefaultUp (0, 1, 0), so that the light shines from the top down.
light.position.set(1, 2, 3);
// directionalLight.position.set(1, 2, 3);

// Object3D/Light/DirectionalLight/Properties/.target: Vector3
// The DirectionalLight points from its position to target.position. The default position of the target is (0, 0, 0).

export default light;