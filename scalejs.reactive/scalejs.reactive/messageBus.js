/*global define*/
define([
    'scalejs!core',
    'rx',
    'rx.binding'
], function (
    core,
    rx
) {
    'use strict';

    var has = core.object.has,
        subjects = {},
        behaviorSubjects = {};

    function ensureSubject(subject) {
        if (!has(subjects, subject)) {
            subjects[subject] = new rx.Subject();
        }

        return subjects[subject];
    }

    function ensureBehaviorSubject(subject) {
        if (!has(behaviorSubjects, subject)) {
            behaviorSubjects[subject] = new rx.BehaviorSubject();
        }

        return behaviorSubjects[subject];
    }
/*
    function observe() {
        return subject.asObservable();
    } */

    function notify(subject, message) {
        var rxSubject = ensureSubject(subject);

        rxSubject.onNext(message);
    }

    function receive(subject, filterOrReceiver, receiver) {
        var rxSubject = ensureSubject(subject);

        if (arguments.length === 1) {
            return rxSubject.asObservable();
        }

        if (arguments.length === 2) {
            return rxSubject.subscribe(filterOrReceiver);
        }

        if (arguments.length === 3) {
            return rxSubject
                .where(filterOrReceiver)
                .subscribe(receiver);
        }

        throw {
            name: 'Illegal Argument',
            message: arguments.length + ' arguments have been provided. ' +
                     'Valid arguments are subject (required), filter (optional), and receiver (optional).'
        };
    }

    function set(subject, message) {
        var behaviorSubject = ensureBehaviorSubject(subject);
        behaviorSubject.onNext(message);
    }

    function get(subject, filterOrReceiver, receiver) {
        var behaviorSubject = ensureBehaviorSubject(subject);

        if (arguments.length === 1) {
            return behaviorSubject.asObservable();
        }

        if (arguments.length === 2) {
            return behaviorSubject.subscribe(filterOrReceiver);
        }

        if (arguments.length === 3) {
            return behaviorSubject
                .where(filterOrReceiver)
                .subscribe(receiver);
        }

        throw {
            name: 'Illegal Argument',
            message: arguments.length + ' arguments have been provided. ' +
                     'Valid arguments are subject (required), filter (optional), and receiver (optional).'
        };
    }

    return {
        notify: notify,
        receive: receive,
        set: set,
        get: get
    };

});
