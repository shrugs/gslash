'use strict';

var selectors = [
    '.s',
    '.search',
    '[name*="search"]',
    '[name*="query"]',
    '[name^="q"]',
    '[name^="s"]'
];

var isVisible = function() {
    var t = $(this);
    return (t.is(':visible')) && (t.width() > 0) && (t.height() > 10);
};

$(document).on('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 191) {
        // first, find any search boxes type="search"
        var searchInputs = $('input[type="search"]').filter(isVisible);
        if (searchInputs.length) {
            searchInputs[0].focus();
        }

        var textInputs = $('input[type="text"]');
        textInputs = textInputs.add(textInputs.clone().filter(selectors.join(', '))).filter(isVisible);
        if (textInputs.length) {
            textInputs = textInputs.sort(function(a,b) {
                return $(a).offset().top > $(b).offset().top;
            });

            textInputs[0].focus();
        }
    }
});
