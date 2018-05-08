// в стрелочной функции только стрелочные функции и нет var

var a = {
    __name: 'Z',
    sayNameStranger: function () {
        (function (self) {
            console.log(self.name);
        })(this);
    }
};
a.age = 12;
a.sayNameStranger();

a.newM = function() {
    console.log('$(this.age) $(this.__name)');
};

a.newM();