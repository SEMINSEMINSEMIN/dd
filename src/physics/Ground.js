import * as THREE from "three";
import createParalellepiped from "./CreateParalellepiped";

let addGround = () => {
    const pos = new THREE.Vector3();
    const quat = new THREE.Quaternion();

    pos.set(0, -.5, 0);
    quat.set(0, 0, 0, 1);
    const ground = createParalellepiped(100, 1, 100, 0, pos, quat, new THREE.MeshPhongMaterial( {color: 0XFF0000} ));
    ground.castShadow = true;
    ground.receiveShadow = true;
}

export default addGround;