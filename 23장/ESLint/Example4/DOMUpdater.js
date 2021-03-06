var ReliableJavaScript = ReliableJavaScript || {};

ReliableJavaScript.DOMUpdater = (function DOMUpdater(){
  "use strict";

  return {

    appendToElement: function appendToElement(appendToID, elementString){
      if(appendToID === null || appendToID === undefined){
        appendToID = "";
      }

      if(elementString === null || elementString === undefined){
        elementString = "";
      }

      var inputsValid = (elementString !== "" && appendToID !== "");

      if(inputsValid) {
        $("#" + appendToID).append(elementString);
      }
    }

  };
})();
