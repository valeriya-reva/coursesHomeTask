// - Create object tank(fuel, ammo, position-x,y, moveright()each move on one point lost 1 item of fuel, moveleft, movetop, move bottom )
// - Battle field - height, width(in cells), Array of tanks, Array Obstacles(x,y) 
// - Create on html batelfield view with takks on it

var cellSize = 50;

var Battlefield = function(thisHeight, widthWidth, tankArr, obstaclesArr, thisId) {
    this.height = thisHeight;
    this.width = widthWidth;
    this.battlefieldId = thisId;
    this.arrObst =  obstaclesArr;

    this.create();
    this.tankCreate(tankArr);
    this.obstaclesCreate(obstaclesArr);
}

Battlefield.prototype = {
    create: function(){
        var field = document.createElement('div');
        field.setAttribute("id", this.battlefieldId);
        document.getElementById('main').appendChild(field);
    
        field.style.width = this.width * cellSize + 'px';
        field.style.height = this.height * cellSize + 'px';
    },

    tankCreate: function(tankArray){
        tankArray.forEach(element => {
            var field = document.createElement('div');
            field.setAttribute("id", element.tankId);
            field.setAttribute("class", 'tank');
            document.getElementById(this.battlefieldId).appendChild(field);
            
            field.style.top = element.positionY * cellSize - cellSize + 'px';
            field.style.left = element.positionX * cellSize - cellSize + 'px';

        });
    },

    obstaclesCreate: function(obstaclesArray){
        obstaclesArray.forEach(element => {
            var field = document.createElement('div');
            field.setAttribute("id", element.obstId);
            field.setAttribute("class", 'obstacles');
            document.getElementById(this.battlefieldId).appendChild(field);;
            
            field.style.top = element.positionY * cellSize - cellSize + 'px';
            field.style.left = element.positionX * cellSize - cellSize + 'px';
        });
    }
}

var Tank = function (thisFuel, thisAmmo, thisPosX, thisPosY, thisId) {
    this.fuel = thisFuel;
    this.ammo = thisAmmo;
    this.positionX = thisPosX;
    this.positionY = thisPosY;
    this.tankId = thisId;
}

Tank.prototype = {
    moveright: function(thisBattlefield) {
        var element = document.getElementById(this.tankId);
        var self = this;
        
        function test(el) {
            return el.positionY !== self.positionY + 1 && el.positionX !== self.positionX + 2;
        }
        console.log(thisBattlefield.arrObst.every(test));
        if (this.fuel > 0 && thisBattlefield.width * cellSize - element.clientHeight > this.positionX  * cellSize && !thisBattlefield.arrObst.every(test)) {
            this.fuel -= 1;
            this.positionX += 1;
            element.style.left = this.positionX * cellSize + 'px';
            element.style.transform = 'rotate(90deg)';
            console.log(self.positionY + 1, self.positionX + 2);
        }
    },

    moveleft: function(thisBattlefield) {
        var element = document.getElementById(this.tankId);

        if (this.fuel > 0 && 0 < this.positionX  * cellSize) {
            this.fuel -= 1;
            this.positionX -= 1;
            element.style.left = this.positionX * cellSize + 'px';
            element.style.transform =' rotate(-90deg)';
        }
    },

    movetop: function(thisBattlefield) {
        var element = document.getElementById(this.tankId);

        if (this.fuel > 0 && 0 < this.positionY) {
            this.fuel -= 1;
            this.positionY -= 1;
            element.style.top = this.positionY * cellSize + 'px';
            element.style.transform =' rotate(0deg)';
        }
    },

    movebottom: function(thisBattlefield) {
        var element = document.getElementById(this.tankId);

        if (this.fuel > 0 && thisBattlefield.height * cellSize - element.clientHeight > this.positionY  * cellSize) {
            this.fuel -= 1;
            this.positionY += 1;
            element.style.top = this.positionY * cellSize + 'px';
            element.style.transform =' rotate(180deg)';
        }
    }
}

var Obstacles = function (thisPosX, thisPosY, thisId) {
    this.positionX = thisPosX;
    this.positionY = thisPosY;
    this.obstId = thisId;
}


document.addEventListener("DOMContentLoaded", function(event) {    
    var tank = new Tank (100, 10, 3, 7, 'tank1');

    var obst1 = new Obstacles (4, 8, 'obst1');
    var obst2 = new Obstacles (5, 8, 'obst2');
    var obst3 = new Obstacles (7, 3, 'obst3');
    var obst4 = new Obstacles (1, 1, 'obst4');
    var obst5 = new Obstacles (8, 8, 'obst5');
    var obst6 = new Obstacles (2, 5, 'obst6');

    // , obst2, obst3, obst4, obst5, obst6

    var myBattlefield = new Battlefield (12, 12, [tank], [obst1, obst2, obst3, obst4, obst5, obst6], 'myBattlefield');

    document.addEventListener('keydown', function(event) {
        switch (event.keyCode) {
          case 37:
            tank.moveleft(myBattlefield);
            break;
          case 38:
            tank.movetop(myBattlefield);
            break;
          case 39:
            tank.moveright(myBattlefield);
            break;
          case 40:
            tank.movebottom(myBattlefield);
            break;
        }
      });
});
