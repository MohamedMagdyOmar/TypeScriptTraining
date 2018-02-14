var object_module;
(function (object_module) {
    var first_object;
    first_object = { x: 10, y: 10 };
    var sec_object = { x: 20, y: 20 };
    var rectangle = {
        x: 30,
        y: 30,
        first_function: function () {
            return this.x * this.y;
        }
    };
    var squareIt1 = function (x) {
        return x * x;
    };
    var squareIt2 = function (rect) {
        if (rect.w === undefined) {
            return rect.l * rect.l;
        }
        return rect.l * rect.w;
    };
    var sq1 = rectangle.first_function();
    var sq2 = squareIt2({ l: 10 });
    var sq3 = squareIt2({ l: 10, w: 20 });
    console.log("rect area: " + rectangle.first_function());
    console.log("squareIt1: " + squareIt1(15));
    console.log("squareIt2: " + sq2);
    console.log("squareIt2: " + sq3);
})(object_module || (object_module = {}));
//# sourceMappingURL=02-06-objects.js.map