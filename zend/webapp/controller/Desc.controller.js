sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zend.controller.Desc", {
            onInit: function () {

            },
        
            onSelect: function(oEvent) {
                console.log(oEvent)
                var selectItem = oEvent.getParameter('selectedIndex');
                if(selectItem===1){
                // var createRadio = this.getView().byId('delLabel').setVisible(true)
                // var createRadioInput = this.getView().byId('delInput').setVisible(true)
                var createRadioInput = this.getView().byId('toLabel').setVisible(true)
                var createRadioInput = this.getView().byId('toInput').setVisible(true)
                var createRadioInput = this.getView().byId('transporter').setVisible(true)
                var createRadioInput = this.getView().byId('transporterInput').setVisible(true)
                var createRadioInput = this.getView().byId('vehicleReg').setVisible(true)
                var createRadioInput = this.getView().byId('vehicleRegInput').setVisible(true)
                }else{
                    // var createRadio = this.getView().byId('delLabel').setVisible(false)
                    // var createRadioInput = this.getView().byId('delInput').setVisible(false)
                    var createRadioInput = this.getView().byId('toLabel').setVisible(false)
                    var createRadioInput = this.getView().byId('toInput').setVisible(false)
                    var createRadioInput = this.getView().byId('transporter').setVisible(false)
                    var createRadioInput = this.getView().byId('transporterInput').setVisible(false)
                    var createRadioInput = this.getView().byId('vehicleReg').setVisible(false)
                    var createRadioInput = this.getView().byId('vehicleRegInput').setVisible(false)
                }
            }
        });
    });
