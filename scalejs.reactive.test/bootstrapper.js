/*global require*/
/// <reference path="Scripts/require.js"/>
/// <reference path="Scripts/jasmine.js"/>
require({
    "paths":  {
        "jQuery":  "Scripts/jquery-1.9.0",
        "json2":  "Scripts/json2",
        "rx":  "Scripts/rx",
        "rx.binding":  "Scripts/rx.binding",
        "rx.time":  "Scripts/rx.time",
        "scalejs":  "Scripts/scalejs-0.1.13",
        "scalejs.ajax-jquery":  "Scripts/scalejs.ajax-jquery-0.1.8",
        "scalejs.reactive":  "../scalejs.reactive/build/scalejs.reactive-0.1.1"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.ajax-jquery",
            "scalejs.reactive"
        ]
    },
    "shim":  {
        "jQuery":  {
            "exports":  "jQuery"
        },
        "json2":  {
            "exports":  "JSON"
        }
    }
}, ['tests/all.tests']);
