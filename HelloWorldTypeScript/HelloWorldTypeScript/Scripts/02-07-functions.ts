module function_module {

    var squareItSimple = function (h: number, w: number)
    {
        return h * w;
    }

    var squareItSimplest = (h: number, w: number) => h * w;

    var helloWorld : (name?: string) => void;

    helloWorld = (name?: string) =>
    {
        console.log('Hello' + (name || 'Unknow person'))
    }

    helloWorld("Mohamed");
    helloWorld();

    var rectA = { h: 7 };
    var rectB = { h:7, w: 8 };

    var squareIt: (rect: {h: number, w?: number }) => number

    squareIt = (rect: {h: number, w ?: number }) =>
    {
        if (rect.w === undefined)
        {
            return rect.h * rect.h
        }
        return rect.h * rect.w
    }

    var val2: number = squareIt(rectA);
    console.log('rectangle h and w of 7 = ' + val2);

    var val3: number = squareIt(rectB);
    console.log('rectangle h of 7 and width of 12 = ' + val3);


}