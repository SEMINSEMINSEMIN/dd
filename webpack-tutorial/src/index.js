import * as THREE from "three";
import box from "./Box";
import camera from "./Camera";
import light from "./Light";
import scene from "./Scene";
import axesHelper from "./AxesHelper";
import gridHelper from "./GridHelper";
import renderer from "./Renderer";
import resize from "./Resize";
import machine from "./Machine";
import keyListener from "./KeyListener";
import eventBus from "./EventBus";
import model from "./Loader";

// Object3D / Methods / .add (object: Object3D, ...) : this
/* 
Adds object as child of this object. An arbitrary(임의의) number of objects may be added. 
Any current parent on an object passed in here will be removed, since an object can have at most one parent.
*/
scene.add(axesHelper);
scene.add(gridHelper);
scene.add(box);
scene.add(light);
scene.background = new THREE.Color("rgb(255, 255, 255)")

// Object3D / Properties / .position : Vector3
// A Vector3 representing the object's 'local' position.
// Vector3 / Properties / .z : Float
// camera.position.z = 5;
// Vector3 / Methods / .set(x : Float, y: Float, z: Float) : this
camera.position.set(1, 2, 5);

// Object3D / Methods / .lookAt(vector: Vector3) : undefined
// Object3D / Methods / .lookAt(x : Float, y: Float, z: Float) : undefined
// Rotates the object to face a point in world space
camera.lookAt(box.position);
resize.start(renderer);

// Clock: Object for keeping track of time. 
const clock = new THREE.Clock();
let mixer;

machine.addCallback(() => {
    /*
    Get the seconds passed since the time .oldTime was set and sets .oldTime to the current time.
    If .autoStart is true and the clock is not running, also starts the clock.
    */
    const delta = clock.getDelta();
    // Advances the global mixer time and updates the animation
    if (mixer) mixer.update(delta);

    box.rotation.y += 0.01;
    renderer.render(scene, camera);
});

machine.start();

keyListener.start();

model.then(object => {
    scene.add(object[0]);
    let s = 0.015;
    object[0].scale.set(s, s, s);

    // AnimationMixer
    /*
    player for animations on a particular object in the scene.
    when multiple objects in the scene are animated independently,
    one AnimationMixer may be used for each object.
    */
    mixer = new THREE.AnimationMixer(object[0]);
    console.log(object[0].animations);
    console.log(object[1].animations);
    object[0].animations = object[1].animations;
    console.log(object[0].animations);

    // AnimationMixer/Methods/.clipAction(clip: AnimationClip, optionalRoot: Object3D) : AnimationAction
    // returns an AnimationAction for the passed clip, optionally using a root object different from the mixer's default root.
    // what is AnimationAction? 
    //// AnimationActions schedule the performance of the animations which are stored in AnimationClips
    // first parameter: either an AnimationClip(reusuable set of keyframe tracks which represent an animation) object or the name of an AnimationClip
    const action = mixer.clipAction(object[0].animations[0]);
    action.play();
})

// const caster = (arr) => {
//     eventBus.dispatch("keyListener", arr);
// };

// keyListener.setCaster(caster);

// eventBus.subscribe("keyListener", (arr) => {
//     if (arr[1]) {
//         console.log(`pressing the key with keyCode = ${arr[0]}`);
//     } else {
//         console.log(`releasing the key with keyCode = ${arr[0]}`);
//     }
// });