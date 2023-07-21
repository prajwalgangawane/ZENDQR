sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History) {
        "use strict";

        return Controller.extend("zend.controller.Detail", {
            onInit: function () {

            },
            // NavtoDetail: function(){
            //     this.getOwnerComponent().getRouter().navTo("desc")
            // },
            NavtoDesc : function(){
                this.getOwnerComponent().getRouter().navTo("desc")
            },
            onPrint: function(oEvent) {
                window.print()
                // var oView = this.getView()
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
            }
        });
    });
