import {Container, Sprite, Texture} from "pixi.js";
import { edgeCollision, unitCollision, circleCollision } from "../Functions/collision";
import GameObject from "./gameobject.js"

const MOVE_SPEED = 4;

export class Duck extends GameObject {
  constructor(game, x, y) {
    super();
    this._game = game;
    this._container = new Container();
    this._container.position.x = x;
    this._container.position.y = y;
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0xffeb3b,1);
    graphics.drawRect(0,0,30,30);
    this._container.addChild(graphics);
    this._game.stage.addChild(this._container);
    this._left = false;
    this._right = false;
  }
  left(value) {
    this._left = value;
  }
  right(value) {
    this._right = value;
  }
  jump() {
    console.log("hopp!");
  }
  _update(msSinceLastFrame, currentTime) {

    let newXValue = this._container.position.x + (this._right ? MOVE_SPEED : 0) + (this._left ? -MOVE_SPEED : 0);
    let newYValue = this._container.position.y;

    this._container.position.x = newXValue;
    // this._container.position.y = newYValue;
  }
}