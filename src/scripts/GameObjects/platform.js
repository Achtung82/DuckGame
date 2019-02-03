import {Container, Rectangle} from "pixi.js";
import GameObject from "./gameobject.js"


export class Platform extends GameObject {
  constructor(game, x, y) {
    super();
    this._game = game;
    this._container = new Container();
    this._container.position.x = x;
    this._container.position.y = y;
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0x13f403,1);
    graphics.drawRect(0,0,200,30);
    this._container.addChild(graphics);
    this._game.stage.addChild(this._container);
  }
  destroy() {
    this._container.destroy();
  }
}