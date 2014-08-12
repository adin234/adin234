var ajax = {
    request : function() {
        if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();  
        }
        var versions = [
            "MSXML2.XmlHttp.5.0",   
            "MSXML2.XmlHttp.4.0",  
            "MSXML2.XmlHttp.3.0",   
            "MSXML2.XmlHttp.2.0",  
            "Microsoft.XmlHttp"
        ];

        var xhr;
        for(var i = 0; i < versions.length; i++) {  
            try {  
                xhr = new ActiveXObject(versions[i]);  
                break;  
            } catch (e) {
            }  
        }
        return xhr;
    }, send : function(url, callback, method, data, sync, type) {
        var x = this.request();
        x.open(method, url, sync);
        x.onreadystatechange = function() {
            if (x.readyState == 4) {
                callback(type == 'json' ? JSON.parse(x.responseText) : x.responseText);
            }
        };
        if (method == 'POST') {
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        x.send(data);
    }, get : function(url, data, callback, sync, type) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        this.send(url + '?' + query.join('&'), callback, 'GET', null, sync, type)
    }, post : function(url, data, callback, sync, type) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        this.send(url, callback, 'POST', query.join('&'), sync, type)
    }
};

var getSearchParameters = function () {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
};

var transformToAssocArray = function ( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
};

var grep = function(items, callback) {
    var filtered = [],
        len = items.length,
        i = 0;
    for (i; i < len; i++) {
        var item = items[i];
        var cond = callback(item);
        if (cond) {
            filtered.push(item);
        }
    }

    return filtered;
};

var loadJs = function(data, callback) {
    var head = document.getElementsByTagName("head")[0];

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = data;
    head.appendChild(script);

    if(callback != undefined)
        callback();
};
