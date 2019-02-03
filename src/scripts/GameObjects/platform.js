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
    // graphics.position.x = (this._container.width / 2) - (graphics.width / 2);
    // graphics.position.y = (this._container.height / 2) - (graphics.height / 2);
    this._container.addChild(graphics);
    this._game.stage.addChild(this._container);
  }
  destroy() {
    this._container.destroy();
  }
}