/**
 * Created by aksharpatel on 05/03/15.
 */
/// <reference path="../bower_components/phaser/typescript/phaser.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ToddlerGame;
(function (ToddlerGame) {
    var GameState = (function (_super) {
        __extends(GameState, _super);
        function GameState() {
            _super.apply(this, arguments);
        }
        GameState.prototype.init = function () {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        };
        GameState.prototype.preload = function () {
            this.load.image('background', './assets/images/background.png');
            this.load.image('chicken', './assets/images/chicken.png');
            this.load.image('arrow', './assets/images/arrow.png');
        };
        GameState.prototype.create = function () {
            this.background = this.game.add.sprite(0, 0, 'background');
            this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken');
            this.chicken.anchor.setTo(0.5);
            this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
            this.leftArrow.anchor.setTo(0.5);
            this.leftArrow.scale.x = -1;
            this.leftArrow.customParams = {
                directions: -1
            };
            this.rightArrow = this.game.add.sprite(this.game.world.width - 60, this.game.world.centerY, 'arrow');
            this.rightArrow.anchor.setTo(0.5);
            this.rightArrow.customParams = {
                directions: 1
            };
        };
        GameState.prototype.update = function () {
        };
        return GameState;
    })(Phaser.State);
    ToddlerGame.GameState = GameState;
})(ToddlerGame || (ToddlerGame = {}));
//# sourceMappingURL=GameState.js.map