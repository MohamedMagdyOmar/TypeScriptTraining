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
    console.log(rectangle.first_function());
})(object_module || (object_module = {}));
//# sourceMappingURL=objects.js.map