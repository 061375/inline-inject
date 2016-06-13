
window.onload = function(){
    // loop items
        var b = document.getElementsByTagName("body")[0].getElementsByTagName("*");
        console.log(b);
        for (var i = b.length; i--;) {
            console.log(b[i]);
            b[i].setAttribute("style",css(b[i]));
        }
    // create button here
        var b = document.createElement('button');
        b.id = 'createEmailBuilderButtonxyzpdq';
        b.style.zIndex = '9999';
        b.innerHTML = 'Create Inline';
        b.addEventListener("click", displayDate);
    
    // create textarea
    
}
// append data to textarea
function css(a) {
    var re = '';
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if(typeof rules[r].selectorText !== 'undefined') {
                /*
                var o = css2json(rules[r].style);
                for(var i in o) {
                    re += i+":"+o[i];   
                }*/
                console.log(rules[r].selectorText);
            }
            //if (a.is(rules[r].selectorText)) {
               // o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
            //}
        }
    }
    return re;
}
function css2json(css) {
    var s = {};
    if (!css) return s;
    if (css instanceof CSSStyleDeclaration) {
        for (var i in css) {
            if ((css[i]).toLowerCase) {
                s[(css[i]).toLowerCase()] = (css[css[i]]);
            }
        }
    } else if (typeof css == "string") {
        css = css.split("; ");
        for (var i in css) {
            var l = css[i].split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        }
    }
    return s;
}