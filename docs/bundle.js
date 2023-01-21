/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scenesystem_demo_SceneList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenesystem/demo/SceneList */ \"./src/scenesystem/demo/SceneList.js\");\n/* harmony import */ var _scenesystem_SceneHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenesystem/SceneHandler */ \"./src/scenesystem/SceneHandler.js\");\n\n\n\nconst sceneHandler = new _scenesystem_SceneHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_scenesystem_demo_SceneList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nsceneHandler.goTo(_scenesystem_demo_SceneList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sceneDemoA);\n// import * as THREE from \"three\";\n// import box from \"./Box\";\n// import camera from \"./Camera\";\n// import light from \"./Light\";\n// import scene from \"./Scene\";\n// import axesHelper from \"./AxesHelper\";\n// import gridHelper from \"./GridHelper\";\n// import renderer from \"./Renderer\";\n// import resize from \"./Resize\";\n// import machine from \"./Machine\";\n// import keyListener from \"./KeyListener\";\n// import eventBus from \"./EventBus\";\n// import model from \"./Loader\";\n// import Animator from \"./Animator\";\n// import Eve, { modes } from \"./model/Eve\";\n// import CharacterController from \"./CharacterController\";\n// import mouse from \"./Mouse\";\n\n// // Object3D / Methods / .add (object: Object3D, ...) : this\n// /* \n// Adds object as child of this object. An arbitrary(임의의) number of objects may be added. \n// Any current parent on an object passed in here will be removed, since an object can have at most one parent.\n// */\n// scene.add(axesHelper);\n// scene.add(gridHelper);\n// scene.add(box);\n// scene.add(light);\n// scene.background = new THREE.Color(\"rgb(255, 255, 255)\")\n\n// // Object3D / Properties / .position : Vector3\n// // A Vector3 representing the object's 'local' position.\n// // Vector3 / Properties / .z : Float\n// // camera.position.z = 5;\n// // Vector3 / Methods / .set(x : Float, y: Float, z: Float) : this\n// camera.position.set(1, 2, 5);\n\n// // Object3D / Methods / .lookAt(vector: Vector3) : undefined\n// // Object3D / Methods / .lookAt(x : Float, y: Float, z: Float) : undefined\n// // Rotates the object to face a point in world space\n// camera.lookAt(box.position);\n// resize.start(renderer);\n\n// machine.addCallback(() => {\n//     box.rotation.y += 0.01;\n//     renderer.render(scene, camera);\n// });\n\n// machine.start();\n\n// // Eve.then(object => {\n// //     scene.add(object);\n// //     let cc = new CharacterController(object, modes);\n// //     cc.start();\n// //     cc.run(\"left\");\n// //     setTimeout(() => {\n// //         cc.setMode(\"run\");\n// //         cc.run(\"left\");\n// //     }, 3000)\n// //     // let animator = new Animator(object);\n// //     // animator.action(0, 1, false);\n// //     // let id = 0;\n// //     // setInterval(() => {\n// //     //     animator.action(id, 1, false);\n// //     //     id++\n// //     //     if (id === 10) id = 0;\n// //     // }, 1000);\n// //     // animator.start();\n// // });\n\n// mouse.setCanvas(document.querySelector(\"canvas\"));\n// mouse.start();\n\n// // keyListener.start();\n\n// // model.then(object => {\n// //     scene.add(object[0]);\n// //     let s = 0.015;\n// //     object[0].scale.set(s, s, s);\n// //     object[0].animations = object[1].animations;\n// //     let animator = new Animator(object[0]);\n// //     animator.action(0);\n// //     animator.start();\n// // })\n\n// // const caster = (arr) => {\n// //     eventBus.dispatch(\"keyListener\", arr);\n// // };\n\n// // keyListener.setCaster(caster);\n\n// // eventBus.subscribe(\"keyListener\", (arr) => {\n// //     if (arr[1]) {\n// //         console.log(`pressing the key with keyCode = ${arr[0]}`);\n// //     } else {\n// //         console.log(`releasing the key with keyCode = ${arr[0]}`);\n// //     }\n// // });\n\n//# sourceURL=webpack://webpack-tutorial/./src/index.js?");

/***/ }),

/***/ "./src/scenesystem/MasterScene.js":
/*!****************************************!*\
  !*** ./src/scenesystem/MasterScene.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MasterScene {\n    constructor() {\n        this.instanceName = null;\n        this.sceneHandler = null;\n    }\n\n    toString() {\n        return this.instanceName;\n    }\n\n    setInstanceName(instanceName) {\n        this.instanceName = instanceName\n    }\n\n    setSceneHandler(sceneHandler) {\n        this.sceneHandler = sceneHandler;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MasterScene);\n\n//# sourceURL=webpack://webpack-tutorial/./src/scenesystem/MasterScene.js?");

/***/ }),

/***/ "./src/scenesystem/SceneHandler.js":
/*!*****************************************!*\
  !*** ./src/scenesystem/SceneHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SceneHandler {\n    constructor(sceneList) {\n        this.prev = null;\n        this.sceneList = sceneList;\n        Object.keys(this.sceneList).forEach(key => {\n            this.sceneList[key].setInstanceName(key);\n        });\n    }\n\n    goTo(sceneName) {\n        if (this.prev != null) {\n            this.prev.close();            \n        }\n\n        this.sceneList[sceneName].open();\n        this.sceneList[sceneName].setSceneHandler(this);\n        this.prev = this.sceneList[sceneName];\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneHandler);\n\n//# sourceURL=webpack://webpack-tutorial/./src/scenesystem/SceneHandler.js?");

/***/ }),

/***/ "./src/scenesystem/demo/SceneDemoA.js":
/*!********************************************!*\
  !*** ./src/scenesystem/demo/SceneDemoA.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MasterScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MasterScene */ \"./src/scenesystem/MasterScene.js\");\n/* harmony import */ var _SceneList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SceneList */ \"./src/scenesystem/demo/SceneList.js\");\n\n\n\nclass SceneDemoA extends _MasterScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    open() {\n        console.log(`the scene ${this.instanceName} is opening`);\n        setTimeout(() => {\n            this.sceneHandler.goTo(_SceneList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SceneDemoB);\n        }, 5000);\n    }\n\n    close() {\n        console.log(`the scene ${this.instanceName} is closing`);\n    }\n}\n\nconst sceneDemoA = new SceneDemoA();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sceneDemoA);\n\n//# sourceURL=webpack://webpack-tutorial/./src/scenesystem/demo/SceneDemoA.js?");

/***/ }),

/***/ "./src/scenesystem/demo/SceneDemoB.js":
/*!********************************************!*\
  !*** ./src/scenesystem/demo/SceneDemoB.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MasterScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MasterScene */ \"./src/scenesystem/MasterScene.js\");\n/* harmony import */ var _SceneList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SceneList */ \"./src/scenesystem/demo/SceneList.js\");\n\n\n\nclass SceneDemoB extends _MasterScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    open() {\n        console.log(`the scene ${this.instanceName} is opening`);\n        setTimeout(() => {\n            this.sceneHandler.goTo(_SceneList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SceneDemoA);\n        }, 5000);\n    }\n\n    close() {\n        console.log(`the scene ${this.instanceName} is closing`);\n    }\n}\n\nconst sceneDemoB = new SceneDemoB();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sceneDemoB);\n\n//# sourceURL=webpack://webpack-tutorial/./src/scenesystem/demo/SceneDemoB.js?");

/***/ }),

/***/ "./src/scenesystem/demo/SceneList.js":
/*!*******************************************!*\
  !*** ./src/scenesystem/demo/SceneList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SceneDemoA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SceneDemoA */ \"./src/scenesystem/demo/SceneDemoA.js\");\n/* harmony import */ var _SceneDemoB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SceneDemoB */ \"./src/scenesystem/demo/SceneDemoB.js\");\n\n  \n\nconst sceneList = {\n    sceneDemoA: _SceneDemoA__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    sceneDemoB: _SceneDemoB__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sceneList);\n\n//# sourceURL=webpack://webpack-tutorial/./src/scenesystem/demo/SceneList.js?");

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