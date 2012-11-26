(function() {

    var rand = Math.random;
    Math.random = function() {
        if (arguments.length === 0) {
            return rand();
        } else if (arguments.length === 1) {
            return rand() * arguments[0];
        } else {
            return rand() * (arguments[1] - arguments[0]) + arguments[0];
        }
    };

})();
