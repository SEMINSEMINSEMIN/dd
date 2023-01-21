import * as THREE from "three";
import machine from "./Machine";

// Clock: Object for keeping track of time.

// AnimationMixer
/*
player for animations on a particular object in the scene.
when multiple objects in the scene are animated independently,
one AnimationMixer may be used for each object.
*/

// AnimationMixer/Methods/.clipAction(clip: AnimationClip, optionalRoot: Object3D) : AnimationAction
// returns an AnimationAction for the passed clip, optionally using a root object different from the mixer's default root.
// what is AnimationAction? 
//// AnimationActions schedule the performance of the animations which are stored in AnimationClips
// first parameter: either an AnimationClip(reusuable set of keyframe tracks which represent an animation) object or the name of an AnimationClip

class Animator {
    constructor(mesh) {
        this.mixer = new THREE.AnimationMixer(mesh);
        this.clock = new THREE.Clock();
        this.clips = mesh.animations.map((animation) => {
            return this.mixer.clipAction(animation);
        });
        this.lastClip = null;
        this.interpoltaionTime = 0.2;
        this.inProgress = false;
    }

    run() {
        /* getDelta()
        Get the seconds passed since the time .oldTime was set and sets .oldTime to the current time.
        If .autoStart is true and the clock is not running, also starts the clock.
        */

        // .update: Advances the global mixer time and updates the animation
        this.mixer.update(this.clock.getDelta());
    }

    start() {
        machine.addCallback(this.run.bind(this));
    }

    stop() {
        machine.removeCallback(this.run.bind(this));
    }

    onCycleFinished() {
        this.inProgress = false;
    }

    action(animationId, timeScale, cycleFlag) {
        if (this.inProgress) return;

        if (cycleFlag) {
            this.mixer.addEventListener("loop", this.onCycleFinished.bind(this));
            this.inProgress = true;
        }

        // AnimationMixer/Properties/.timeScale : Number
        // 배속
        // A scaling factor for the global mixer time.
        // Note: Setting the mixer's timeScale to 0 and later back to 1 is a possibility to pause/unpause all actions that are controlled by this mixer.
        this.mixer.timeScale = timeScale;

        if (this.lastClip === null) {
            this.clips[animationId].play();
            this.lastClip = animationId;
            return;
        }

        if (this.lastClip === animationId) {
            return; // 반복 피함
        }

        // AnimationAction
        // resets the action
        this.clips[animationId].reset();
        this.clips[animationId].play();
        // .crossFadeTo (fadeInAction: AnimationAction, durationInSeconds: Number, warpBoolean: Boolean)
        // Causes this action to fade out, fading in another action simultaneously, within the passed time interval.
        // if warpBoolean is true, additional warping(gradually changes of the time scales) will be applied.
        this.clips[this.lastClip].crossFadeTo(this.clips[animationId], this.interpoltaionTime, true);
        this.lastClip = animationId;
    }
}

export default Animator;
