import scene from "../Scene";
import { physicsWorld } from "./InitPhysics";
import rigidBodies from "./RigidBodies.js";

function createRigidBody(threeObject, physicsShape, mass, pos, quat) {
    // .copy(): Copy the given object into this object.
    threeObject.position.copy(pos);
    // .quaternion: Object's local rotation as a Quaternion.
    threeObject.quaternion.copy(quat);

    const transform = new Ammo.btTransform();
    transform.setIdentity();
    transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
    transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));
    const motionState = new Ammo.btDefaultMotionState(transform);

    const localInertia = new Ammo.btVector3(0, 0, 0);
    physicsShape.calculateLocalInertia(mass, localInertia);

    const rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, physicsShape, localInertia);
    const body = new Ammo.btRigidBody(rbInfo);

    threeObject.userData.physicsBody = body;

    scene.add(threeObject);

    if (mass > 0) {
        rigidBodies.push(threeObject);
        body.setActivationState(4);
    }

    body.setActivationState(4);
    physicsWorld.addRigidBody(body);
}

export default createRigidBody;