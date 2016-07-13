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
var newbody, body;
// uncomment the window.onload to test as a webpage
//window.onload = function(){
    // loop items
        body = document.getElementsByTagName("body")[0].getElementsByTagName("*");
        for (var i = body.length; i--;) {
            css(body[i]);
        }
    // get updated HTML
        newbody = document.getElementsByTagName("body")[0].innerHTML;
        newbody = newbody.replace(/\t/g,' ');
        newbody = newbody.replace(/\r/g,' ');
        newbody = newbody.replace(/\n/g,' ');
        newbody = newbody.replace(/\s+/g,' ');
        var b = document.createElement('textarea');
        b.style.zIndex = '9999';
        b.style.position = 'absolute';
        b.style.top = "0px";
        b.style.left = "0px";
        b.style.width = "1000px";
        b.style.height = "1000px";
        b.innerHTML = newbody;
        body[0].appendChild(b);
// append data to textarea
function css(a) {
    var re = '';
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if(typeof rules[r].selectorText !== 'undefined') {
                var n = document.querySelectorAll(rules[r].selectorText);
                if(n.length > 0) {
                    for(var x =0; x<n.length; x++)
                    {
                        if(n[x].isSameNode(a)) {
                            var re = /{(.*)}/;
                            var m = rules[r].cssText.match(re);
                            if (m != null) {
                                a.setAttribute("style",m[0].replace(re, '$1').trim());
                            }
                        }
                    }
                }
            }
        }
    }
    return re;
}