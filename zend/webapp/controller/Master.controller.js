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
            // NavtoDesc : function(){
            //     this.getOwnerComponent().getRouter().navTo("desc")
            // },
            onSelect: function(oEvent) {
                console.log(oEvent)
                var selectItem = oEvent.getParameter('selectedIndex');
                if(selectItem===1){
                var createRadio = this.getView().byId('lableNum').setVisible(true)
                var createRadioInput = this.getView().byId('lableNumInput').setVisible(true)
                }else{
                    var createRadio = this.getView().byId('lableNum').setVisible(false)
                var createRadioInput = this.getView().byId('lableNumInput').setVisible(false)
                }
            },
            onPrint: function(oEvent) {
                window.print()
                // var oView = this.getView()
            },
        });
    });
