/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2016, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
describe("basic mark with accuracy exactly and limiters", function () {
    var $ctx;
    beforeEach(function (done) {
        loadFixtures("basic/accuracy-exactly-limiters.html");

        $ctx = $(".basic-accuracy-exactly-limiters");
        new Mark($ctx[0]).mark("test", {
            "accuracy": {
                "value": "exactly",
                "limiters": [
                    ",", ".", "-", "!", "\"", "'", "(", ")", "%"
                ]
            },
            "separateWordSearch": false,
            "done": done
        });
    });

    it("should wrap matches without custom limiters", function () {
        expect($ctx.find("mark")).toHaveLength(6);
        $ctx.find("mark").each(function () {
            expect($(this).text()).toBe("test");
        });
    });
});
