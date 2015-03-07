var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by akshar patel on 05/03/15.
 */
/// <reference path="../bower_components/phaser/typescript/phaser.d.ts"/>
/// <reference path="GameState.ts"/>
var ToddlerGame;
(function (ToddlerGame) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 640, 360, Phaser.AUTO, '');
            this.state.add('GameState', ToddlerGame.GameState);
            this.state.start('GameState');
        }
        return Game;
    })(Phaser.Game);
    ToddlerGame.Game = Game;
})(ToddlerGame || (ToddlerGame = {}));
window.onload = function () {
    new ToddlerGame.Game();
};
//# sourceMappingURL=main.js.map