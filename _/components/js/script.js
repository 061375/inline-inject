/**
 * Email CSS to Inline Conversion Tool
 * @description -
 *  When building an email newsletter its always a good idea to use inline styles verus a stylesheet
 *  as many email clients still don't use stylesheets correctly
 *
 *  This utility allows an HTML document in devleopment with a stylesheet to be converted to
 *  a fully inline document that should at least make development of an email faster.
 *
 *  The tool loops each node in the document and gets its calculated CSS then appends that as an in-line style
 *
 *  Then the resulting HTML is added to a textarea to be copied and pasted
 *  */
var newbody, body, l;
// uncomment the window.onload to test as a webpage
window.onload = function(){
    // get all body elements
    body = document.getElementsByTagName("body")[0].getElementsByTagName("*"); 
    
    // prepare the "Please Wait" message
    var f = document.createElement('div');
        f.style.backgroundColor= "rgba(0,0,0,0.6)";
        f.style.position = 'absolute';
        f.style.top = "0px";
        f.style.left = "0px";
        f.style.width = "100%";
        f.style.height = window.innerHeight+"px";
        f.style.zIndex = '9998';
        f.setAttribute("id","emailcssbookmarklet");
        var a = document.createElement("div");
            a.style.backgroundColor = "#ffffff";
            a.style.padding = "3px 5px";
            a.style.zIndex = '9998';
            a.style.position = 'absolute';
            a.style.top = "0px";
            a.style.left = ((window.innerWidth / 2) - 20) + "px";
            a.innerHTML = "Please Wait";
            f.appendChild(a);
        body[0].appendChild(f);
    /**
    * I want the user to know that the program is working...
    * And while it normally will take less than a second, sometimes it takes a bit longer
    * leaving the user wondering, "is it working" ???
    * so while this adds an extra second, its worth it
    */
    setTimeout(function(){
        // loop items
        l = body.length;
        for (var i=l; i--;) {
            css(body[i]);
        }
        
        // remove any style sheets or scripts as we won't be needing them
            document.getElementsByTagName("link").remove();
            document.getElementsByTagName("script").remove();
            document.getElementsByTagName("style").remove();
            document.getElementsByTagName("link").remove();
        // remove the loader
            document.getElementById("emailcssbookmarklet").remove();
        // get updated HTML
            newbody = document.getElementsByTagName("html")[0].innerHTML;
            newbody = newbody.replace(/\t/g,' ');
            newbody = newbody.replace(/\r/g,' ');
            newbody = newbody.replace(/\n/g,' ');
            newbody = newbody.replace(/\s+/g,' ');
            var b = document.createElement('textarea');
                b.setAttribute("onclick","this.focus();this.select()");
                b.setAttribute("readonly","readonly");
                b.style.zIndex = '9999';
                b.style.position = "absolute";
                b.style.top = "0px";
                b.style.left = "0px";
                b.style.width = "1000px";
                b.style.height = "1000px";
                b.innerHTML = '<html>'+newbody+'</html>';
            body[0].appendChild(b);
    },1000);
}
// append data to textarea
function css(a) {
    var re = '';
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if(typeof rules[r].selectorText !== 'undefined') {
                var n = document.querySelectorAll(rules[r].selectorText);
                l = n.length;
                if(l > 0) {
                    for(var x =0; x<l; x++) {
                        if(n[x].isSameNode(a)) {
                            var re = /{(.*)}/;
                            var m = rules[r].cssText.match(re);
                            if (m != null) {
                                var p = a.getAttribute("style");
                                if (null !== p) {
                                    p += m[0].replace(re, '$1').trim();
                                }else{
                                    p = m[0].replace(re, '$1').trim();
                                }
                                a.setAttribute("style",p);
                            }
                        }
                    }
                }
            }
        }
    }
    return re;
}
// prototype(s) to remove the wait message
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}