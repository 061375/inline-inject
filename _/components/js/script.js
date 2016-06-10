
// create button here

// loop items
// non-jquery version
    var items = startElem.getElementsByTagName("*");
    for (var i = items.length; i--;) {
    }
// jquery version
    var b = document.createElement('button');
    $(b).attr('id','createEmailBuilderButtonxyzpdq');
    $(b).css('z-index','9999');
    $(b).html('Create Inline');
    $('body *').each( function(){
        $(this).css(css($(this)));    
    });
    
    $('textarea').val($('body').html());
// create textarea

// append data to textarea

function css(a) {
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (a.is(rules[r].selectorText)) {
                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
            }
        }
    }
    return o;
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