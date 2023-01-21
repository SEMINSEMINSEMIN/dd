class Mouse {
    constructor(){
        this.canvas = null;
        this.click = this._click.bind(this);
        this.toggle = this._toggle.bind(this);
        this.move = this._move.bind(this);
        this.delta = {x: 0, y: 0};
        this.acumulated = {x: 0, y: 0};
    }

    setCanvas(canvas) {
        // 마우스 좌표를 얻기 위해 캔버스 사용
        this.canvas = canvas;
    }

    start(){
        if (!this.canvas) alert("No canvas selected");
        // Pointer Lock API: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
        /* It gives you access to raw mouse movement, locks the target of mouse events to a single element, 
        eliminates limits on how far mouse movement can go in a single direction, and removes the cursor from view.
        Pointer lock lets you access mouse events even when the cursor goes past the boundary of the browser or screen. 
        For example, your users can continue to rotate or manipulate a 3D model by moving the mouse without end. 
        Without Pointer lock, the rotation or manipulation stops the moment the pointer reaches the edge of the browser or screen. 
        */
        // Element.requestPointerLock(): lets you asynchronously ask for the pointer to be locked on the given element.
        // To track the success or failure of the request, it is necessary to listen for the pointerlockchange and pointerlockerror events at the Document level.
        this.canvas.requestPointerLock = this.canvas.requestPointerLock || this.canvas.mozRequestPointerLock;
        this.canvas.addEventListener("click", this.click);

        // https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerlockchange_event
        // fired when the pointer is locked/unlocked
        document.addEventListener("pointerlockchange", this.toggle);
        document.addEventListener("mozpointerlockchange", this.toggle);
    }

    stop(){
        if (this.canvas) this.canvas.removeEventListener("click", this.click);

        // https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerlockchange_event
        // fired when the pointer is locked/unlocked
        document.removeEventListener("pointerlockchange", this.toggle);
        document.removeEventListener("mozpointerlockchange", this.toggle);
    }

    _click() {
        this.canvas.requestPointerLock();
    }

    _toggle() {
        if (document.pointerLockElement === this.canvas || document.mozPointerLockElement === this.canvas) {
            document.addEventListener("mousemove", this.move);
        } else {
            document.removeEventListener("mousemove", this.move);
        }
    }

    _move(e) {
        this.delta.x = e.movementX;
        this.delta.y = e.movementY;
        this.acumulated.x += e.movementX;
        this.acumulated.y += e.movementY;
        console.log(this.delta);
        console.log(this.acumulated);
    }
}

const mouse = new Mouse();

export default mouse;