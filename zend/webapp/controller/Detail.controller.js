sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
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
            }
        });
    });
