/**
 * Created by aksharpatel on 05/03/15.
 */
/// <reference path="../bower_components/phaser/typescript/phaser.d.ts"/>

module ToddlerGame{
    export class GameState extends Phaser.State{
        background: Phaser.Sprite;
        chicken: Phaser.Sprite;
        leftArrow;
        rightArrow;
        init(){
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }


        preload(){
            this.load.image('background', './assets/images/background.png');
            this.load.image('chicken', './assets/images/chicken.png');
            this.load.image('arrow', './assets/images/arrow.png');
        }

        create(){
            this.background = this.game.add.sprite(0,0,'background');
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
            }
        }

        update(){

        }
    }
}