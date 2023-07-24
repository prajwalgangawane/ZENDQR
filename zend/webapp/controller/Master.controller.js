sap.ui.define([
    "zend/controller/BaseController",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zend.controller.Master", {
            onInit: function () {

            },
            onSelect: function (oEvent) {
                console.log(oEvent)
                const fields = ['lableNum', 'lableNumInput']
                var selectItem = oEvent.getParameter('selectedIndex');
                if (selectItem === 1) {
                    fields.forEach(eid => this.getView().byId(eid).setVisible(true))
                } else {
                    fields.forEach(eid => this.getView().byId(eid).setVisible(false))
                }
            },
        });
    });
