import MasterScene from "../MasterScene"
import sceneList from "./SceneList";

class SceneDemoA extends MasterScene {
    open() {
        console.log(`the scene ${this.instanceName} is opening`);
        setTimeout(() => {
            this.sceneHandler.goTo(sceneList.sceneDemoB);
        }, 5000);
    }

    close() {
        console.log(`the scene ${this.instanceName} is closing`);
    }
}

const sceneDemoA = new SceneDemoA();

export default sceneDemoA;