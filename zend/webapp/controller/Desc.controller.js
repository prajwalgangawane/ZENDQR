sap.ui.define([
    "zend/controller/BaseController",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zend.controller.Desc", {
            onInit: function () {

            },

            onSelect: function (oEvent) {
                console.log(oEvent)
                var selectItem = oEvent.getParameter('selectedIndex');
                const fields = ['toLabel',
                    'toInput',
                    'transporter',
                    'transporterInput',
                    'vehicleReg',
                    'vehicleRegInput',
                    'vehicleTypeInput',
                    'loadTypeInput',
                    'modeTrptInput',
                    'vehicleType',
                    'loadType',
                    'modeTrpt',
                ]
                if (selectItem === 1) {
                    fields.forEach(eid => this.getView().byId(eid).setVisible(true))
                } else {
                    fields.forEach(eid => this.getView().byId(eid).setVisible(false))
                }
            },
        });
    });
