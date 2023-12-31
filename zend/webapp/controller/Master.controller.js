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
            onPrintPage: function(oEvent) {
                // window.print()
                // globalThis.print();
                // var oView = this.getView()
                var printPage = document.implementation.createHTMLDocument('masterPage');
                printPage.head.innerHTML = document.head.innerHTML;
                printPage.body.innerHTML = document.getElementById('container-zend---Master--page').outerHTML;
                this.debugBase(`data:text/html,${encodeURIComponent(printPage.head.outerHTML + printPage.body.outerHTML)}`)
                
            },
            debugBase: function(baseUrl){
                var win = window.open();
                win.document.write('<iframe src="' + baseUrl + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen />' );
                // setTimeout(()=>win.print(), 1000);
                win.print();
            }
        });
    });
