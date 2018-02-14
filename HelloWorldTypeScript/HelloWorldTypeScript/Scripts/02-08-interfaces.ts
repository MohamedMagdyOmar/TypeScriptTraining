module interface {

    interface Person {
        name: string,
        age?: number,
        kids: number,
        calcPets: () => number,
        greeter: (msg: string) => string,
        makeYonger: (years: number) => void 
    }

    var p: Person = {
        name: 'Mohamed',
        age: 20,
        kids: 20,
        calcPets: function () { return this.kids * 2 },
        makeYonger: function (years: number) { this.age -= years; },
        greeter: function (msg: string) { return msg + ' ,' + this.name}
    }

    var pets = p.calcPets();
    console.log('pets = ' + pets);

    p.makeYonger(10);
    var newAge = p.age;
    console.log('new age = ' + newAge);

    var msg = p.greeter('Good day');
    console.log(msg);

    interface SessionEval {
        addRating: (rating: number) => void,
        calcRating: () => number
    }


    function sessionEvaluator(): SessionEval {
        var ratings: number[] = [];

        var addRating = (rating: number = 5) =>
            ratings.push(rating);
        
        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach(function (score) {
                sum += score;
            });

            return sum / ratings.length;
        };

        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }
  
  

}