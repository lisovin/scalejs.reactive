/*global require*/
/// <reference path="Scripts/require.js"/>
/// <reference path="Scripts/jasmine.js"/>
require({
    "paths":  {
        "rx":  "Scripts/rx",
        "rx.binding":  "Scripts/rx.binding",
        "rx.time":  "Scripts/rx.time",
        "scalejs":  "Scripts/scalejs-0.1.12",
        "scalejs.reactive":  "../scalejs.reactive/build/scalejs.reactive-0.1.1"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.reactive"
        ]
    }
}, ['tests/all.tests']);
