var require = {
    "baseUrl":  ".",
    "paths":  {
        "es5-shim":  "Scripts/es5-shim",
        "jasmine":  "Scripts/jasmine",
        "jasmine-html":  "Scripts/jasmine-html",
        "rx":  "Scripts/rx",
        "rx.binding":  "Scripts/rx.binding",
        "rx.coincidence":  "Scripts/rx.coincidence",
        "rx.experimental":  "Scripts/rx.experimental",
        "rx.joinpatterns":  "Scripts/rx.joinpatterns",
        "rx.time":  "Scripts/rx.time",
        "scalejs":  "Scripts/scalejs-0.2.6.1",
        "scalejs.reactive":  "Scripts/scalejs.reactive-2.0.20921"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.reactive",
            "scalejs.reactive"
        ]
    },
    "shim":  {
        "jasmine":  {
            "exports":  "jasmine"
        },
        "jasmine-html":  {
            "deps":  [
                "jasmine"
            ]
        }
    }
};
