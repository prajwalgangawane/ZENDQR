sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zend.controller.Master", {
            onInit: function () {

            },
            NavtoDetail: function(){
                this.getOwnerComponent().getRouter().navTo("detail")
            },
            NavtoDesc : function(){
                this.getOwnerComponent().getRouter().navTo("desc")
            },
        });
    });
