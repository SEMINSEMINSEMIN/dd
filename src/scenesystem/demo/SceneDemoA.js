import * as THREE from "three";
import axesHelper from "../../AxesHelper";
import gridHelper from "../../GridHelper";
import box from "../../Box";
import camera from "../../Camera";
import light from "../../Light";
import machine from "../../Machine";
import renderer from "../../Renderer";
import resize from "../../Resize";
import scene from "../../Scene";
import MasterScene from "../MasterScene";
import sceneList from "./SceneList";
import initPhysics from "../../physics/InitPhysics";
import addGround from "../../physics/Ground";
import updatePhysics from "../../physics/UpdatePhysics";
import addPhysicBox from "../../physics/PhysicBox";
import keyListener from "../../KeyListener";
import rigidBodies from "../../physics/RigidBodies";

class SceneDemoA extends MasterScene {
    open() {
        // console.log(`the scene ${this.instanceName} is opening`);
        // setTimeout(() => {
        //     this.sceneHandler.goTo(sceneList.sceneDemoB);
        // }, 5000);
        scene.add(axesHelper);
        scene.add(gridHelper);
        scene.add(light);
        scene.background = new THREE.Color("rgb(255, 255, 255)");
        // 이 박스는 물리세계랑 연결되어 있지 않음
        scene.add(box);
        box.position.y = 0.5;
        camera.position.set(1, 2, -3);
        resize.start(renderer);
        initPhysics();
        addGround();
        addPhysicBox();
        const clock = new THREE.Clock();
        keyListener.start();
        machine.addCallback(() => {
            const deltaTime = clock.getDelta();
            updatePhysics(deltaTime);
            let speed = 2;
            let x, y, z;
            x = y = z = 0;
            if (keyListener.isPressed(87)) z = speed;
            if (keyListener.isPressed(83)) z = -speed;
            if (keyListener.isPressed(65)) x = speed;
            if (keyListener.isPressed(68)) x = -speed;
            if (x != 0 || z != 0) {
                let body = rigidBodies[0].userData.physicsBody;
                // body.applyImpulse(new Ammo.btVector3(x, y, z));
                // body.applyCentralImpulse(new Ammo.btVector3(x, y, z));
                body.setLinearVelocity(new Ammo.btVector3(x, y, z));
                // body.setAngularVelocity(new Ammo.btVector3(x, y, z));
            }
            camera.lookAt(rigidBodies[0].position);
            renderer.render(scene, camera);
        });
        machine.start();
    }

    close() {
        console.log(`the scene ${this.instanceName} is closing`);
    }
}

const sceneDemoA = new SceneDemoA();

export default sceneDemoA;
