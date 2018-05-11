// в стрелочной функции только стрелочные функции и нет var

var a = {
    __name: 'Z',
    p: 'zorro',
    sayNameStranger: function () {
        (function (self) {
            console.log(self.p);
        })(this);
    }
};
a.age = 12;
a.sayNameStranger();

a.newName = function() {
    console.log("$(this.age) $(this.p)");
};

a.newName();
