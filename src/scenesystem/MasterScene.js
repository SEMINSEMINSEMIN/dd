class MasterScene {
    constructor() {
        this.instanceName = null;
        this.sceneHandler = null;
    }

    toString() {
        return this.instanceName;
    }

    setInstanceName(instanceName) {
        this.instanceName = instanceName
    }

    setSceneHandler(sceneHandler) {
        this.sceneHandler = sceneHandler;
    }
}

export default MasterScene;