/// <reference path="typings/knockout-2.2.d.ts" />
var ambientDeclaration;
(function (ambientDeclaration) {
    var name = ko.observable("mohamed magdy");
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    var value = guy.fullName();
    console.log(value);
})(ambientDeclaration || (ambientDeclaration = {}));
//# sourceMappingURL=07-02-ambientDeclaration.js.map