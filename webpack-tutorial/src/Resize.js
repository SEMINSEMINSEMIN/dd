// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// bind() 메소드가 호출되면 새로운 함수를 생성한다.
// func.bind(thisArg[, arg1[, arg2[, ...]]])
// thisArg: 바인딩 함수가 대상 함수의 this에 전달하는 값

import camera from "./Camera";

// https://github.com/SEMINSEMINSEMIN/TIL/blob/main/JavaScript/this.md
// 함수를 생성자 함수로서 호출시 this는 생성자 함수가 생성하는 인스턴스

class Resize {
    constructor(){
        this.renderer = null;
    }

    start(renderer){
        this.renderer = renderer;
        window.addEventListener("resize", this.resize.bind(this));
    }

    stop(){
        window.removeEventListener("resize", this.resize.bind(this));
    }

    resize(){
        // Object3D/Camera/Perspective Camera/Properties/.aspect: Float
        // Camera frustum aspect ratio
        camera.aspect = window.innerWidth / window.innerHeight;

        // Object3D/Camera/Perspective Camera/Methods/.updateProjectionMatrix(): undefined
        // Updates the camera projection matirx. Must be called after any change of parameters.
        camera.updateProjectionMatrix();
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

const resize = new Resize();

export default resize;