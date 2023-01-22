import sceneList from "./scenesystem/demo/SceneList";
import SceneHandler from "./scenesystem/SceneHandler";

Ammo().then(function (AmmoLib) {
    Ammo = AmmoLib;
    const sceneHandler = new SceneHandler(sceneList);
    sceneHandler.goTo(sceneList.sceneDemoA);
});

// import * as THREE from "three";
// import box from "./Box";
// import camera from "./Camera";
// import light from "./Light";
// import scene from "./Scene";
// import axesHelper from "./AxesHelper";
// import gridHelper from "./GridHelper";
// import renderer from "./Renderer";
// import resize from "./Resize";
// import machine from "./Machine";
// import keyListener from "./KeyListener";
// import eventBus from "./EventBus";
// import model from "./Loader";
// import Animator from "./Animator";
// import Eve, { modes } from "./model/Eve";
// import CharacterController from "./CharacterController";
// import mouse from "./Mouse";

// // Object3D / Methods / .add (object: Object3D, ...) : this
// /*
// Adds object as child of this object. An arbitrary(임의의) number of objects may be added.
// Any current parent on an object passed in here will be removed, since an object can have at most one parent.
// */
// scene.add(axesHelper);
// scene.add(gridHelper);
// scene.add(box);
// scene.add(light);
// scene.background = new THREE.Color("rgb(255, 255, 255)")

// // Object3D / Properties / .position : Vector3
// // A Vector3 representing the object's 'local' position.
// // Vector3 / Properties / .z : Float
// // camera.position.z = 5;
// // Vector3 / Methods / .set(x : Float, y: Float, z: Float) : this
// camera.position.set(1, 2, 5);

// // Object3D / Methods / .lookAt(vector: Vector3) : undefined
// // Object3D / Methods / .lookAt(x : Float, y: Float, z: Float) : undefined
// // Rotates the object to face a point in world space
// camera.lookAt(box.position);
// resize.start(renderer);

// machine.addCallback(() => {
//     box.rotation.y += 0.01;
//     renderer.render(scene, camera);
// });

// machine.start();

// // Eve.then(object => {
// //     scene.add(object);
// //     let cc = new CharacterController(object, modes);
// //     cc.start();
// //     cc.run("left");
// //     setTimeout(() => {
// //         cc.setMode("run");
// //         cc.run("left");
// //     }, 3000)
// //     // let animator = new Animator(object);
// //     // animator.action(0, 1, false);
// //     // let id = 0;
// //     // setInterval(() => {
// //     //     animator.action(id, 1, false);
// //     //     id++
// //     //     if (id === 10) id = 0;
// //     // }, 1000);
// //     // animator.start();
// // });

// mouse.setCanvas(document.querySelector("canvas"));
// mouse.start();

// // keyListener.start();

// // model.then(object => {
// //     scene.add(object[0]);
// //     let s = 0.015;
// //     object[0].scale.set(s, s, s);
// //     object[0].animations = object[1].animations;
// //     let animator = new Animator(object[0]);
// //     animator.action(0);
// //     animator.start();
// // })

// // const caster = (arr) => {
// //     eventBus.dispatch("keyListener", arr);
// // };

// // keyListener.setCaster(caster);

// // eventBus.subscribe("keyListener", (arr) => {
// //     if (arr[1]) {
// //         console.log(`pressing the key with keyCode = ${arr[0]}`);
// //     } else {
// //         console.log(`releasing the key with keyCode = ${arr[0]}`);
// //     }
// // });
