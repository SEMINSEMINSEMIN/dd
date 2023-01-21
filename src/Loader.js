import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

// const model = new Promise((res, rej) => {
//     const loader = new FBXLoader();
//     loader.load("./src/model/Eve By J.Gonzales.fbx", function (object) {
//         object.traverse(function (child) {
//             if (child.isMesh) {
//                 child.castShadow = true;
//                 child.receiveShadow = true;
//             }
//         });

//         res(object);
//     });
// });

// const animation = new Promise((res, rej) => {
//     const loader = new FBXLoader();
//     loader.load("./src/model/animations/idle.fbx", function (object) {
//         res(object);
//     });
// });

// /*
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values.
// It rejects when any of the input's promises rejects, with this first rejection reason.
// */
// const combo = Promise.all([model, animation]);

// export default combo;

class Loader {
    constructor(modelFileUrl, urlAnimationList, scale) {
        this.loader = new FBXLoader();
        this.animationPromises = [];
        let animations = []; // animation collection

        const modelPromise = new Promise((res, rej) => {
            this.loader.load(modelFileUrl, 
                function (object) {
                    object.scale.set(scale, scale, scale);
                    object.traverse(function (child) {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });
                    object.castShadow = true;
                    object.receiveShadow = true;
                    res(object);
                })
        });

        urlAnimationList.forEach((element, index) => {
            this.animationPromises[index] = new Promise((res, rej) => {
                this.loader.load(element, 
                    function(object){
                        object.scale.set(scale, scale, scale);
                        animations[index * 1] = object.animations[0];
                        res(index);
                    });
            });
        });

        const jonerPromise = Promise.all(this.animationPromises);

        this.model = new Promise((res, rej) => {
            Promise.all([modelPromise, jonerPromise]).then(data => {
                const object = data[0];
                if (animations.length > 0) {
                    object.animations = animations;
                }
                res(object);
            });
        });
    }

    getModel() {
        return this.model;
    }
}

export default Loader;