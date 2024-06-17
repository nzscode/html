(function (window) {
    //Setup namespace for utility
    var ajaxutils = {};

    //Returns an HTTP request object
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else {
            globalThis.alert("Ajax is not supported");
            return null;
        }
    }

    //Makes and Ajax GET request to 'requestUrl'
    ajaxutils.sendGetRequest = function (
        requestUrl,
        responseHandler,
        isJsonResponse
    ) {
        var request = getRequestObject();
        request.onreadystatechange = function () {
            handleResponse(request, responseHandler, isJsonResponse);
            request.open("GET", requestUrl, true);
            request.send(null); //for POST only
        };
        function handleResponse(request, responseHandler, isJsonResponse) {
            if (request.readyState == 4 && request.status == 200) {
                // Default to isJsonResponse == true
                if (isJsonResponse == undefined) {
                    isJsonResponse = true;
                }
                if (isJsonResponse) {
                    responseHandler(JSON.parse(request.responseText));
                } else {
                    responseHandler(request.reponseText);
                }
            }
        }

        //Expose utility to the global object
        globalThis.$ajaxUtils = ajaxUtils;
    };
})(window);
