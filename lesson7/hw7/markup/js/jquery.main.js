// - Create object tank(fuel, ammo, position-x,y, moveright()each move on one point lost 1 item of fuel, moveleft, movetop, move bottom )
// - Battle field - height, width(in cells), Array of tanks, Array Obstacles(x,y) 
// - Create on html batelfield view with takks on it

var cellSize = 50;


var Tank = function (thisFuel, thisAmmo, thisPosX, thisPosY, thisId) {
    this.fuel = thisFuel;
    this.ammo = thisAmmo;
    this.positionX = thisPosX;
    this.positionY = thisPosY;
    this.thisId = thisId;
    this.moveright = function() {
        this.fuel -= 1;
        this.positionX += 1;
    }
    this.moveleft = function() {
        this.fuel -= 1;
        this.positionX -= 1;
    }
    this.movetop = function() {
        this.fuel -= 1;
        this.positionY += 1;
    }
    this.movebottom = function() {
        this.fuel -= 1;
        this.positionY -= 1;
    }
}

var Obstacles = function (thisPosX, thisPosY, thisId) {
    this.positionX = thisPosX;
    this.positionY = thisPosY;
    this.thisId = thisId;
}

var Battlefield = function(thisHeight, widthWidth, tankArr, obstaclesArr, thisId) {
    this.height = thisHeight;
    this.width = widthWidth;
    var battlefieldId = thisId;

    (function (elementId, element) {
        var field = document.createElement('div');
        field.setAttribute("id", elementId);
        var container = document.getElementById('main');
        container.appendChild(field);

        field.style.width = element.width * cellSize + 'px';
        field.style.height = element.height * cellSize + 'px';
    }(thisId, this));

    (function (obstaclesArray) {
        obstaclesArray.forEach(element => {
            var field = document.createElement('div');
            field.setAttribute("id", element.thisId);
            field.setAttribute("class", 'obstacles');
            var container = document.getElementById(battlefieldId);
            container.appendChild(field);

            field.style.top = element.positionY * cellSize + 'px';
            field.style.left = element.positionX * cellSize + 'px';
        });
    }(obstaclesArr));

    (function (tankArray) {
        tankArray.forEach(element => {
            var field = document.createElement('div');
            field.setAttribute("id", element.thisId);
            field.setAttribute("class", 'tank');
            var container = document.getElementById(battlefieldId);
            container.appendChild(field);

            field.style.top = element.positionY * cellSize + 'px';
            field.style.left = element.positionX * cellSize + 'px';
        });
    }(tankArr));
}

document.addEventListener("DOMContentLoaded", function(event) {    
	var tank1 = new Tank (100, 10, 1, 7, 'tank1');
    var tank2 = new Tank (100, 10, 9, 3, 'tank2');
    var tank3 = new Tank (100, 10, 4, 6, 'tank3');

    var obst1 = new Obstacles (4, 8, 'obst1');
    var obst2 = new Obstacles (2, 5, 'obst2');
    var obst3 = new Obstacles (5, 3, 'obst3');
    var obst4 = new Obstacles (1, 1, 'obst1');


    var myBattlefield = new Battlefield (12, 12, [tank1, tank2, tank3], [obst1, obst2, obst3, obst4], 'myBattlefield');

    console.log(myBattlefield, obst1);
});