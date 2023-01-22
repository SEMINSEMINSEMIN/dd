// https://medium.com/@bluemagnificent/intro-to-javascript-3d-physics-using-ammo-js-and-three-js-dd48df81f591
// https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf
// https://github.com/kripken/ammo.js/issues/377

import gravityConstant from "./Gravity.js";
let physicsWorld;
let transformAux1;

function initPhysics() {
    // Physics configuration

    // 전체 충돌 감지에 사용되는 알고리즘 미세 조정
    let collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();
    
    // 충돌 디스패처를 사용하여 시스템의 나머지 부분에서 충돌이 처리되지 않도록 중첩되는 광대역 프록시를 필터링하는 콜백을 등록할 수 있습니다.
    let dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);

    /*
    사용할 브로드 위상 알고리즘입니다. broadphase 알고리즘은 일반적으로 세계의 객체 경계 상자를 사용하여 충돌하는 쌍의 보수적인 대략적인 목록을 신속하게 계산합니다. 
    목록에는 충돌하는 모든 개체 쌍이 포함되지만 경계 상자가 교차하지만 여전히 충돌할 만큼 가깝지 않은 개체 쌍도 포함될 수 있습니다. 
    */
    let broadphase = new Ammo.btDbvtBroadphase();

    /*
    중력, 게임 로직이 제공하는 힘, 충돌 및 힌지 제약 조건을 고려하여 개체가 적절하게 상호 작용하도록 하는 원인입니다.
    */
    let solver = new Ammo.btSequentialImpulseConstraintSolver();
    let softBodySolver = new Ammo.btDefaultSoftBodySolver();

    // this is the world
    // This is the dynamic world, our physics world. It does come in other variants like Ammo.btSoftRigidDynamicsWorld for soft body simulation.
    physicsWorld = new Ammo.btSoftRigidDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration, softBodySolver);
    physicsWorld.setGravity(new Ammo.btVector3(0, gravityConstant, 0));
    physicsWorld.getWorldInfo().set_m_gravity(new Ammo.btVector3(0, gravityConstant, 0));

    transformAux1 = new Ammo.btTransform();
}

export default initPhysics;

export { physicsWorld, transformAux1 };