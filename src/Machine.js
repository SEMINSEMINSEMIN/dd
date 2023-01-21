class Machine {
    constructor(){
        this.flag = false;
        this.callbacks = [];
    }

    addCallback(callback){
        this.callbacks.push(callback);
    }

    removeCallback(callback){
        this.callbacks = this.callbacks.filter(cb => cb != callback);
    }

    run(){
        if (!this.flag) return;
        this.callbacks.forEach(cb => cb());
        /* window.requestAnimationFrame()
        - tells the browser that you wish to perform an animation and requests that browser calls a specified function to update an animation before the next repaint.
        - takes a callback as an argument to be invoked before the repaint
        - your callback routine must itself call requestAnimationFrame() again if you want to animate another frame at the next repaint.
        - requestAnimationFrame() is 1 shot
        - requestAnimationFrame() calls are paused in most browsers when running in background tabs or hidden iframes in order to improve performance and battery life.
        */
        requestAnimationFrame(this.run.bind(this));
    }

    start(){
        if (this.flag) return;
        this.flag =true;
        this.run()
    }

    stop(){
        this.flag = false;
    }
}

const machine = new Machine();

export default machine;