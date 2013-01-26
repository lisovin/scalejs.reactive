/*global define,console,describe,expect,it,runs,waitsFor,setTimeout*/
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

        it('notifies when `receive` called before `notify`', function () {
            var received = [],
                isDone;

            runs(function () {
                messageBus.receive('receiveBeforeNotify', function (msg) {
                    received.push(msg);
                });

                messageBus.notify('receiveBeforeNotify', {
                    foo: 'bar'
                });

                setTimeout(function () {
                    isDone = true;
                }, 500);
            });

            waitsFor(function () {
                return isDone;
            }, 500);

            runs(function () {
                expect(received.length).toBeDefined(1);
                expect(received[0].foo).toBe('bar');
            });
        });

        it('doesn\'t notify when `receive` called after `notify`', function () {
            var received,
                isDone;

            runs(function () {
                messageBus.notify('receiveAfterNotify', {
                    foo: 'bar'
                });

                messageBus.receive('receiveAfterNotify', function (msg) {
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
            var received = [],
                isDone;

            runs(function () {
                messageBus.set('getAfterSet', {
                    foo: 'bar'
                });

                messageBus.get('getAfterSet', function (msg) {
                    received.push(msg);
                });

                setTimeout(function () {
                    isDone = true;
                }, 500);
            });

            waitsFor(function () {
                return isDone;
            }, 500);

            runs(function () {
                expect(received.length).toBe(1);
                expect(received[0]).toBeDefined();
                expect(received[0].foo).toBe('bar');
            });
        });

        it('returns undefined first and then a message when `get` is called before `set`', function () {
            var received = [],
                isDone;

            runs(function () {
                messageBus.get('nullThenMessage', function (msg) {
                    received.push(msg);
                });

                messageBus.set('nullThenMessage', {
                    foo: 'bar'
                });

                setTimeout(function () {
                    isDone = true;
                }, 500);
            });

            waitsFor(function () {
                return isDone;
            }, 500);

            runs(function () {
                expect(received.length).toBe(2);
                console.log('---->' + core.json.toJson(received));
                expect(received[0]).toBeUndefined();
                expect(received[1]).toBeDefined();
                expect(received[1].foo).toBe('bar');
            });
        });

    });
});