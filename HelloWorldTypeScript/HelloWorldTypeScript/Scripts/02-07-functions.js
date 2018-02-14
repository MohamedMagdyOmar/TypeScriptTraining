var function_module;
(function (function_module) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareItSimplest = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello' + (name || 'Unknow person'));
    };
    helloWorld("Mohamed");
    helloWorld();
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 8 };
    var squareIt;
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var val2 = squareIt(rectA);
    console.log('rectangle h and w of 7 = ' + val2);
    var val3 = squareIt(rectB);
    console.log('rectangle h of 7 and width of 12 = ' + val3);
})(function_module || (function_module = {}));
//# sourceMappingURL=02-07-functions.js.map