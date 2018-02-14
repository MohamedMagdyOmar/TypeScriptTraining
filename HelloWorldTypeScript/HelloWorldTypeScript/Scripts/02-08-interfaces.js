var interface;
(function (interface) {
    var p = {
        name: 'Mohamed',
        age: 20,
        kids: 20,
        calcPets: function () { return this.kids * 2; },
        makeYonger: function (years) { this.age -= years; },
        greeter: function (msg) { return msg + ' ,' + this.name; }
    };
    var pets = p.calcPets();
    console.log('pets = ' + pets);
    p.makeYonger(10);
    var newAge = p.age;
    console.log('new age = ' + newAge);
    var msg = p.greeter('Good day');
    console.log(msg);
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            if (rating === void 0) { rating = 5; }
            return ratings.push(rating);
        };
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
})(interface || (interface = {}));
//# sourceMappingURL=02-08-interfaces.js.map