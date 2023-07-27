sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent",
        "sap/ui/core/routing/History"
    ],
    function (Controller, UIComponent, History) {
        "use strict";

        return Controller.extend("zend.controller.BaseController", {
            onInit() {
            },
            getRouter() {
                return UIComponent.getRouterFor(this);
            },
            navTo(...params) {
                return this.getRouter().navTo(...params)
            },
            onNavBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("master", {}, true);
                }
            },
            onPrint: function () {
                // window.print()
                var printpage = document.implementation.createHTMLDocument('Master page')
                printpage.head.innerHTML = document.head.innerHTML
                printpage.body.innerHTML = document.getElementById('__panel0-content').outerHTML
                var wind = window.open('', 'printwindow')
                wind.document.write(printpage.head.outerHTML + printpage.body.outerHTML)
                setTimeout(() => wind.print(), 1000)
            },

            NavtoDetail: function () {
                // this.getOwnerComponent().getRouter().navTo("desc")
                this.navTo('detail')
            },
            NavtoDesc: function () {
                // this.getOwnerComponent().getRouter().navTo("desc")
                this.navTo('desc')
            },
        });
    }
);
