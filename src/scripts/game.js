import { Container, Text, autoDetectRenderer } from "pixi.js";
import { Platform } from "./GameObjects/platform.js"
import { Duck } from "./GameObjects/duck.js"
import { handleKeyDown, handleKeyUp } from "./Functions/userinput.js"

export default class Game {
  constructor(element) {
    this._element = element;
    this.stage = new Container();
    this.renderer = autoDetectRenderer(window.innerWidth, window.innerHeight, { transparent: true }, false);
    this._element.appendChild(this.renderer.view);
    this._lastFrameTime = 0;
    this.initPlayer();
    this.bindInput();
    requestAnimationFrame(this.update.bind(this));
    this.initObstacles();
  }
  initPlayer() {
    this._player = new Duck(this, 0, this.renderer.height - 30);
  }
  initObstacles() {
    const plat1 = new Platform(this, this.renderer.width * 0.3, this.renderer.height * 0.8);
    const plat2 = new Platform(this, this.renderer.width * 0.6, this.renderer.height * 0.6);
  }
  update(currentTime) {
    const msSinceLastFrame = currentTime - this._lastFrameTime;
    this._player._update(msSinceLastFrame, currentTime);
    // this.updatable.forEach((bullet) => {
    //   bullet._update(msSinceLastFrame, currentTime);
    // });
   
    this._lastFrameTime = currentTime;
    this.renderer.render(this.stage);
    requestAnimationFrame(this.update.bind(this));
  }
  bindInput() {
    this._element.addEventListener('keydown', (e) => { handleKeyDown(e, this._player) });
    this._element.addEventListener('keyup', (e) => { handleKeyUp(e, this._player) });
  }
}