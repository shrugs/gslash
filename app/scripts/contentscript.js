'use strict';

$(document).on('keypress', function(e) {
    if (e.keycode === 191) {
        // is slash
        // first, find any search boxes type="search"
        var searchInputs = $('input[type="search"]').filter(function() {
            return $(this).width() > 0;
        });
        if (searchInputs.length) {
            searchInputs[0].focus();
        }
        // other good heuristics
        // .search, input[type="text"]
        // name=q, input[type="text"]
        // name=query, input[type="text"]
        // name=search, input[type="text"]
        // name=s, input[type="text"]

    }
});