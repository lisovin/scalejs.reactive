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
        if (!has(subjects, 'subject')) {
            subjects[subject] = new rx.Subject();
        }

        return subjects[subject];
    }

    function ensureBehaviorSubject(subject) {
        if (!has(behaviorSubjects, 'subject')) {
            behaviorSubjects[subject] = new rx.BehaviorSubject();
        }

        return behaviorSubjects[subject];
    }
/*
    function observe() {
        return subject.asObservable();
    } */

    function notify(subject, event) {
        var rxSubject = ensureSubject(subject);

        rxSubject.onNext(event);
    }

    function subscribe(subject, receiver) {
        var rxSubject = ensureSubject(subject);

        return rxSubject.subscribe(receiver);
    }

    function set(subject, message) {
        var behaviorSubject = ensureBehaviorSubject(subject);
        behaviorSubject.onNext(message);
    }

    function get(subject, receiver) {
        var behaviorSubject = ensureBehaviorSubject(subject);

        return behaviorSubject.subscribe(receiver);
    }

    return {
        notify: notify,
        subscribe: subscribe,
        set: set,
        get: get
    };

});
