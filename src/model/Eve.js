import Loader from "../Loader";
import fileList from "./FileList";

const folder = "src/model/";

const list = [];

// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
Object.keys(fileList).forEach((element, index) => {
    list[index] = folder + "animations/" + fileList[index];
});

const Eve = new Loader(folder + "Eve.fbx", list, 0.01).getModel();

const modes = {
    "normal": {
        "idle": [0, 1, false],
        "jump": [1, 1, false],
        "left": [2, 1, false],
        "right": [5, 1, false],
        "ahead": [9, 1, false],
    },
    "run": {
        "left": [3, 1, false],
        "right": [6, 1, false],
        "ahead": [8, 1, false],
    },

};

export default Eve;
export { modes };
