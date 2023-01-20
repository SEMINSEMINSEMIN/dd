/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AxesHelper.js":
/*!***************************!*\
  !*** ./src/AxesHelper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// https://velog.io/@wosk0106/threejs-note-%EA%B0%9C%EB%B0%9C%EC%9D%84-%ED%8E%B8%EB%A6%AC%ED%95%98%EA%B2%8C-%ED%95%B4%EC%A3%BC%EB%8A%94-%EB%8F%84%EA%B5%AC%EB%93%A4Utility\n\n\nconst axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(3);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axesHelper);\n\n//# sourceURL=webpack://webpack-tutorial/./src/AxesHelper.js?");

/***/ }),

/***/ "./src/Box.js":
/*!********************!*\
  !*** ./src/Box.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry( 1, 1, 1 ); // width, height, depth\n\n// Material / MeshBasicMaterial\n// A material for drawing geometries in a simple shaded way. This material is not affected by lights.\n// const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); \n\n// Material / MeshPhongMaterial\n// A material for \"shiny\" surfaces with specular highlights.\n// Performance > MeshStandardMaterial, MeshPhysicalMateral\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial( {color: 0x00ff00} ); \n\nconst box = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (box);\n\n//# sourceURL=webpack://webpack-tutorial/./src/Box.js?");

/***/ }),

/***/ "./src/Camera.js":
/*!***********************!*\
  !*** ./src/Camera.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n// Object3D -> Camera -> PerspectiveCamera\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );\n// 1. fov: filed of view that indicate how big is the angle of the camera.\n// 2. aspect: the proportion that have the height in relation to the width\n// 3, 4: how close and how far are the edges of the camera. the camera cannot see anything that is farther than 1000 meters or closer than 10 centimeters.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (camera);\n\n//# sourceURL=webpack://webpack-tutorial/./src/Camera.js?");

/***/ }),

/***/ "./src/EventBus.js":
/*!*************************!*\
  !*** ./src/EventBus.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass EventBus {\n    constructor() {\n        this.event = {};\n    }\n\n    subscribe(eventName, callback) {\n        if (!this.event[eventName]) {\n            this.event[eventName] = [];\n        }\n        this.event[eventName].push(callback);\n    }\n\n    unSubscribe(eventName, callback) {\n        if (!this.event[eventName]) return;\n        this.event[eventName] = this.event[eventName].filter(cb => cb != callback);\n    }\n\n    dispatch(eventName, payload) {\n        if (!this.event[eventName]) return;\n        this.event[eventName].forEach(cb => cb(payload));\n    }\n}\n\nconst eventBus = new EventBus();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventBus);\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/EventBus.js?");

/***/ }),

/***/ "./src/GridHelper.js":
/*!***************************!*\
  !*** ./src/GridHelper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// https://velog.io/@wosk0106/threejs-note-%EA%B0%9C%EB%B0%9C%EC%9D%84-%ED%8E%B8%EB%A6%AC%ED%95%98%EA%B2%8C-%ED%95%B4%EC%A3%BC%EB%8A%94-%EB%8F%84%EA%B5%AC%EB%93%A4Utility\n\n\nconst gridHelper = new three__WEBPACK_IMPORTED_MODULE_0__.GridHelper(5);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gridHelper);\n\n//# sourceURL=webpack://webpack-tutorial/./src/GridHelper.js?");

/***/ }),

/***/ "./src/KeyListener.js":
/*!****************************!*\
  !*** ./src/KeyListener.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass KeyListener {\n    constructor(caster){\n        this.keys = {};\n        this.caster = caster || console.log\n    }\n\n    setCaster(caster) {\n        this.caster = caster;\n    }\n\n    isPressed(keyCode) {\n        return this.keys[e.keyCode] ? this.keys[e.keyCode] : false;\n    }\n\n    down(e) {\n        if (this.keys[e.keyCode]) return;\n        this.keys[e.keyCode] = true;\n        this.caster([e.keyCode, true, this.keys]);\n    }\n\n    up(e) {\n        this.keys[e.keyCode] = false;\n        this.caster([e.keyCode, false, this.keys]);\n    }\n    \n    start(){\n        window.addEventListener(\"keydown\", this.down.bind(this));\n        window.addEventListener(\"keyup\", this.up.bind(this));\n    }\n\n    stop(){\n        window.removeEventListener(\"keydown\", this.down.bind(this));\n        window.removeEventListener(\"keyup\", this.up.bind(this));\n    }\n}\n\nconst keyListener = new KeyListener();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyListener);\n\n//# sourceURL=webpack://webpack-tutorial/./src/KeyListener.js?");

/***/ }),

/***/ "./src/Light.js":
/*!**********************!*\
  !*** ./src/Light.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n// Object3D/Light/AmbientLight\n// This light globally illuminates all objects in the scene equally.\n// every direction\nconst light = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight( 0x404040 ); // soft white light\n\n// Object3D/Light/DirectionalLight\n/*\nA light that gets emitted in a specific direction. \nThis light will behave as though it is infinitely far away and the rays produced from it are all parallel. \nThe common use case for this is to simulate daylight; the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel.\n*/\nconst directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight( 0xffffff, 0.8 );\nlight.add(directionalLight);\n// Object3D/Light/DirectionalLight/Properties/.position: Vector3\n// This is set equal to Object3D.DefaultUp (0, 1, 0), so that the light shines from the top down.\nlight.position.set(1, 2, 3);\n// directionalLight.position.set(1, 2, 3);\n\n// Object3D/Light/DirectionalLight/Properties/.target: Vector3\n// The DirectionalLight points from its position to target.position. The default position of the target is (0, 0, 0).\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (light);\n\n//# sourceURL=webpack://webpack-tutorial/./src/Light.js?");

/***/ }),

/***/ "./src/Loader.js":
/*!***********************!*\
  !*** ./src/Loader.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three_examples_jsm_loaders_FBXLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/loaders/FBXLoader */ \"./node_modules/three/examples/jsm/loaders/FBXLoader.js\");\n\n\nconst model = new Promise((res, rej) => {\n    const loader = new three_examples_jsm_loaders_FBXLoader__WEBPACK_IMPORTED_MODULE_0__.FBXLoader();\n    loader.load(\"./src/model/Pumpkinhulk L Shaw.fbx\", function (object) {\n        object.traverse(function (child) {\n            if (child.isMesh) {\n                child.castShadow = true;\n                child.receiveShadow = true;\n            }\n        });\n\n        res(object);\n    });\n});\n\nconst animation = new Promise((res, rej) => {\n    const loader = new three_examples_jsm_loaders_FBXLoader__WEBPACK_IMPORTED_MODULE_0__.FBXLoader();\n    loader.load(\"./src/model/animations/Silly Dancing.fbx\", function (object) {\n        res(object);\n    });\n});\n\n/*\nThe Promise.all() static method takes an iterable of promises as input and returns a single Promise. \nThis returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. \nIt rejects when any of the input's promises rejects, with this first rejection reason.\n*/\nconst combo = Promise.all([model, animation]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combo);\n\n//# sourceURL=webpack://webpack-tutorial/./src/Loader.js?");

/***/ }),

/***/ "./src/Machine.js":
/*!************************!*\
  !*** ./src/Machine.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Machine {\n    constructor(){\n        this.flag = false;\n        this.callbacks = [];\n    }\n\n    addCallback(callback){\n        this.callbacks.push(callback);\n    }\n\n    removeCallback(callback){\n        this.callbacks = this.callbacks.filter(cb => cb != callback);\n    }\n\n    run(){\n        if (!this.flag) return;\n        this.callbacks.forEach(cb => cb());\n        /* window.requestAnimationFrame()\n        - tells the browser that you wish to perform an animation and requests that browser calls a specified function to update an animation before the next repaint.\n        - takes a callback as an argument to be invoked before the repaint\n        - your callback routine must itself call requestAnimationFrame() again if you want to animate another frame at the next repaint.\n        - requestAnimationFrame() is 1 shot\n        - requestAnimationFrame() calls are paused in most browsers when running in background tabs or hidden iframes in order to improve performance and battery life.\n        */\n        requestAnimationFrame(this.run.bind(this));\n    }\n\n    start(){\n        if (this.flag) return;\n        this.flag =true;\n        this.run()\n    }\n\n    stop(){\n        this.flag = false;\n    }\n}\n\nconst machine = new Machine();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (machine);\n\n//# sourceURL=webpack://webpack-tutorial/./src/Machine.js?");

/***/ }),

/***/ "./src/Renderer.js":
/*!*************************!*\
  !*** ./src/Renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n// const renderer = new THREE.WebGL1Renderer();\n\n// What is Anti-Aliasing?\n/*\nAnti-aliasing is a technique that smooths out the edges seen in images while playing games on a PC. \nIt makes them appear less blurred and blends colors to make visuals look natural.\n*/\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGL1Renderer({ antialias: true });\n\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/Renderer.js?");

/***/ }),

/***/ "./src/Resize.js":
/*!***********************!*\
  !*** ./src/Resize.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera */ \"./src/Camera.js\");\n// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind\n// bind() 메소드가 호출되면 새로운 함수를 생성한다.\n// func.bind(thisArg[, arg1[, arg2[, ...]]])\n// thisArg: 바인딩 함수가 대상 함수의 this에 전달하는 값\n\n\n\n// https://github.com/SEMINSEMINSEMIN/TIL/blob/main/JavaScript/this.md\n// 함수를 생성자 함수로서 호출시 this는 생성자 함수가 생성하는 인스턴스\n\nclass Resize {\n    constructor(){\n        this.renderer = null;\n    }\n\n    start(renderer){\n        this.renderer = renderer;\n        window.addEventListener(\"resize\", this.resize.bind(this));\n    }\n\n    stop(){\n        window.removeEventListener(\"resize\", this.resize.bind(this));\n    }\n\n    resize(){\n        // Object3D/Camera/Perspective Camera/Properties/.aspect: Float\n        // Camera frustum aspect ratio\n        _Camera__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aspect = window.innerWidth / window.innerHeight;\n\n        // Object3D/Camera/Perspective Camera/Methods/.updateProjectionMatrix(): undefined\n        // Updates the camera projection matirx. Must be called after any change of parameters.\n        _Camera__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateProjectionMatrix();\n        \n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n    }\n}\n\nconst resize = new Resize();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resize);\n\n//# sourceURL=webpack://webpack-tutorial/./src/Resize.js?");

/***/ }),

/***/ "./src/Scene.js":
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// Object3D -> Scene\n// Scenes allow you to set up what and where is to be rendered by three.js.\n// This is where you place objects, lights and cameras.\n\n\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scene);\n\n//# sourceURL=webpack://webpack-tutorial/./src/Scene.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./src/Box.js\");\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera */ \"./src/Camera.js\");\n/* harmony import */ var _Light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Light */ \"./src/Light.js\");\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scene */ \"./src/Scene.js\");\n/* harmony import */ var _AxesHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxesHelper */ \"./src/AxesHelper.js\");\n/* harmony import */ var _GridHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GridHelper */ \"./src/GridHelper.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Renderer */ \"./src/Renderer.js\");\n/* harmony import */ var _Resize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Resize */ \"./src/Resize.js\");\n/* harmony import */ var _Machine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Machine */ \"./src/Machine.js\");\n/* harmony import */ var _KeyListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KeyListener */ \"./src/KeyListener.js\");\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EventBus */ \"./src/EventBus.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loader */ \"./src/Loader.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Object3D / Methods / .add (object: Object3D, ...) : this\n/* \nAdds object as child of this object. An arbitrary(임의의) number of objects may be added. \nAny current parent on an object passed in here will be removed, since an object can have at most one parent.\n*/\n_Scene__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(_AxesHelper__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n_Scene__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(_GridHelper__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n_Scene__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n_Scene__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(_Light__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n_Scene__WEBPACK_IMPORTED_MODULE_3__[\"default\"].background = new three__WEBPACK_IMPORTED_MODULE_12__.Color(\"rgb(255, 255, 255)\")\n\n// Object3D / Properties / .position : Vector3\n// A Vector3 representing the object's 'local' position.\n// Vector3 / Properties / .z : Float\n// camera.position.z = 5;\n// Vector3 / Methods / .set(x : Float, y: Float, z: Float) : this\n_Camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"].position.set(1, 2, 5);\n\n// Object3D / Methods / .lookAt(vector: Vector3) : undefined\n// Object3D / Methods / .lookAt(x : Float, y: Float, z: Float) : undefined\n// Rotates the object to face a point in world space\n_Camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lookAt(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"].position);\n_Resize__WEBPACK_IMPORTED_MODULE_7__[\"default\"].start(_Renderer__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\n// Clock: Object for keeping track of time. \nconst clock = new three__WEBPACK_IMPORTED_MODULE_12__.Clock();\nlet mixer;\n\n_Machine__WEBPACK_IMPORTED_MODULE_8__[\"default\"].addCallback(() => {\n    /*\n    Get the seconds passed since the time .oldTime was set and sets .oldTime to the current time.\n    If .autoStart is true and the clock is not running, also starts the clock.\n    */\n    const delta = clock.getDelta();\n    // Advances the global mixer time and updates the animation\n    if (mixer) mixer.update(delta);\n\n    _Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rotation.y += 0.01;\n    _Renderer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].render(_Scene__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _Camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\n_Machine__WEBPACK_IMPORTED_MODULE_8__[\"default\"].start();\n\n_KeyListener__WEBPACK_IMPORTED_MODULE_9__[\"default\"].start();\n\n_Loader__WEBPACK_IMPORTED_MODULE_11__[\"default\"].then(object => {\n    _Scene__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(object[0]);\n    let s = 0.015;\n    object[0].scale.set(s, s, s);\n\n    // AnimationMixer\n    /*\n    player for animations on a particular object in the scene.\n    when multiple objects in the scene are animated independently,\n    one AnimationMixer may be used for each object.\n    */\n    mixer = new three__WEBPACK_IMPORTED_MODULE_12__.AnimationMixer(object[0]);\n    console.log(object[0].animations);\n    console.log(object[1].animations);\n    object[0].animations = object[1].animations;\n    console.log(object[0].animations);\n\n    // AnimationMixer/Methods/.clipAction(clip: AnimationClip, optionalRoot: Object3D) : AnimationAction\n    // returns an AnimationAction for the passed clip, optionally using a root object different from the mixer's default root.\n    // what is AnimationAction? \n    //// AnimationActions schedule the performance of the animations which are stored in AnimationClips\n    // first parameter: either an AnimationClip(reusuable set of keyframe tracks which represent an animation) object or the name of an AnimationClip\n    const action = mixer.clipAction(object[0].animations[0]);\n    action.play();\n})\n\n// const caster = (arr) => {\n//     eventBus.dispatch(\"keyListener\", arr);\n// };\n\n// keyListener.setCaster(caster);\n\n// eventBus.subscribe(\"keyListener\", (arr) => {\n//     if (arr[1]) {\n//         console.log(`pressing the key with keyCode = ${arr[0]}`);\n//     } else {\n//         console.log(`releasing the key with keyCode = ${arr[0]}`);\n//     }\n// });\n\n//# sourceURL=webpack://webpack-tutorial/./src/index.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/seminkang/Documents/ThreeJS/webpack-tutorial/node_modules/three/build/three.module.js'\");\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/three/build/three.module.js?");

/***/ }),

/***/ "./node_modules/three/examples/jsm/loaders/FBXLoader.js":
/*!**************************************************************!*\
  !*** ./node_modules/three/examples/jsm/loaders/FBXLoader.js ***!
  \**************************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/seminkang/Documents/ThreeJS/webpack-tutorial/node_modules/three/examples/jsm/loaders/FBXLoader.js'\");\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/three/examples/jsm/loaders/FBXLoader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;