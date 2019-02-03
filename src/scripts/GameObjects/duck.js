import { Container, Graphics, Texture } from "pixi.js";
import { edgeCollision, unitCollision, circleCollision } from "../Functions/collision";
import GameObject from "./gameobject.js"
import { ifError } from "assert";

const MOVE_SPEED = 4;
const GRAVITY = 2.2;

export class Duck extends GameObject {
  constructor(game, x, y) {
    super();
    this._game = game;
    this._container = new Container();
    this._container.position.x = x;
    this._container.position.y = y;
    var graphics = new Graphics();
    graphics.beginFill(0xffeb3b, 1);
    graphics.drawRect(0, 0, 30, 30);
    graphics.position.x = (this._container.width / 2) - (graphics.width / 2);
    graphics.position.y = (this._container.height / 2) - (graphics.height / 2);
    this._container.addChild(graphics);
    this._game.stage.addChild(this._container);
    this._gameHeight = this._game.renderer.height;
    this._gameWidth = this._game.renderer.width;
    this._radius = this._container.width / 2;
    this._left = false;
    this._right = false;
    this.downSpeed = 0;
    this.doubleJumpSaved = 0;
    this.stand = false;
  }
  left(value) {
    this._left = value;
  }
  right(value) {
    this._right = value;
  }
  jump() {
    if (this.stand) {
      this.doubleJumpSaved = 1;
      this.downSpeed = -30;
    } else if (this.doubleJumpSaved > 0) {
      this.doubleJumpSaved--;
      this.downSpeed = -30;
    }
  }
  _update(msSinceLastFrame, currentTime) {

    let newXValue = this._container.position.x + (this._right ? MOVE_SPEED : 0) + (this._left ? -MOVE_SPEED : 0);
    let newYValue = this._container.position.y;

    this.downSpeed += GRAVITY;
    newYValue += this.downSpeed;

    if (newYValue >= this._gameHeight - this._radius) {
      this.downSpeed = 0;
      newYValue = this._gameHeight - this._radius;
      this.stand = true;
    } else {
      const platform = unitCollision(newXValue, newYValue, this._container, this._game._platforms);
      if (platform) {
        this.downSpeed = 0;
        newYValue = this._container.position.y + platform.dy;
        this.stand = true;
      } else {
        this.stand = false;
      }
    }

    this._container.position.x = newXValue;
    this._container.position.y = newYValue;
  }
}