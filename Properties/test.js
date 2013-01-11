/// <reference path="../Scripts/require.js"/>
/// <reference path="../Scripts/jasmine.js"/>

/*global requirejs*/
requirejs({
    paths: {
        'scalejs' : '../Scripts/scalejs-0.1.1',
		'rx' : '../Scripts/rx',
		'rx.binding' : '../Scripts/rx.binding',
		'rx.time' : '../Scripts/rx.time'
    }
}, ['../test/all.tests']);
