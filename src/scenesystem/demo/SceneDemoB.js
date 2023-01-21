import MasterScene from "../MasterScene"
import sceneList from "./SceneList";

class SceneDemoB extends MasterScene {
    open() {
        console.log(`the scene ${this.instanceName} is opening`);
        setTimeout(() => {
            this.sceneHandler.goTo(sceneList.sceneDemoA);
        }, 5000);
    }

    close() {
        console.log(`the scene ${this.instanceName} is closing`);
    }
}

const sceneDemoB = new SceneDemoB();

export default sceneDemoB;