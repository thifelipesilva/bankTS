System.register(["./controllers/NegociacaoControllers"], function (exports_1, context_1) {
    "use strict";
    var NegociacaoControllers_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegociacaoControllers_1_1) {
                NegociacaoControllers_1 = NegociacaoControllers_1_1;
            }
        ],
        execute: function () {
            controller = new NegociacaoControllers_1.NegociacaoControllers();
            $('.form').submit(controller.adiciona.bind(controller));
        }
    };
});
