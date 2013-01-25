/*global define,describe,expect,it,runs,waitsFor,setTimeout*/
/*jslint sloppy: true*/
/// <reference path="../Scripts/jasmine.js"/>
define([
    'scalejs!core',
    'scalejs!application'
], function (core) {
    var messageBus = core.reactive.messageBus;

    describe('messageBus', function () {
        it('is defined', function () {
            expect(messageBus).toBeDefined();
        });

        it('notifies when subscribed before `notify`', function () {
            var received,
                isDone;

            runs(function () {
                messageBus.subscribe('subject', function (msg) {
                    received = msg;
                });

                messageBus.notify('subject', {
                    foo: 'bar'
                });

                setTimeout(function () {
                    isDone = true;
                }, 500);
            });

            waitsFor(function () {
                return received || isDone;
            }, 500);

            runs(function () {
                expect(received).toBeDefined();
                expect(received.foo).toBe('bar');
            });
        });

        it('doesn\'t notify when subscribed after `notify`', function () {
            var received,
                isDone;

            runs(function () {
                messageBus.notify('subject', {
                    foo: 'bar'
                });

                messageBus.subscribe('subject', function (msg) {
                    received = msg;
                });

                setTimeout(function () {
                    isDone = true;
                }, 500);
            });

            waitsFor(function () {
                return isDone;
            }, 500);

            runs(function () {
                expect(received).toBeUndefined();
            });
        });

        it('returns a message when `get` is called after `set`', function () {
            var received,
                isDone;

            runs(function () {
                messageBus.set('subject', {
                    foo: 'bar'
                });

                messageBus.get('subject', function (msg) {
                    received = msg;
                });

                setTimeout(function () {
                    isDone = true;
                }, 500);
            });

            waitsFor(function () {
                return isDone;
            }, 500);

            runs(function () {
                expect(received).toBeDefined();
                expect(received.foo).toBe('bar');
            });
        });
    });
});