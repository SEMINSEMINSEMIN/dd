import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const model = new Promise((res, rej) => {
    const loader = new FBXLoader();
    loader.load("./src/model/Pumpkinhulk L Shaw.fbx", function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        res(object);
    });
});

const animation = new Promise((res, rej) => {
    const loader = new FBXLoader();
    loader.load("./src/model/animations/Silly Dancing.fbx", function (object) {
        res(object);
    });
});

/*
The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. 
It rejects when any of the input's promises rejects, with this first rejection reason.
*/
const combo = Promise.all([model, animation]);

export default combo;