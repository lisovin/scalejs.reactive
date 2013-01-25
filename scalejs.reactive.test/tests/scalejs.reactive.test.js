/*global define,describe,expect,it,runs,waitsFor*/
/*jslint sloppy: true*/
/// <reference path="../Scripts/jasmine.js"/>
define([
    'scalejs!core',
    'scalejs!application'
], function (core) {
    var reactive = core.reactive;

    describe('scalejs.reactive extension', function () {
        it('is defined', function () {
            expect(reactive).toBeDefined();
        });
    });
});