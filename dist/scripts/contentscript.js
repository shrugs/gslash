"use strict";var selectors=[".s",".search",'[name*="search"]','[name*="query"]','[name^="q"]','[name^="s"]'],isVisible=function(){var a=$(this);return a.is(":visible")&&a.width()>0&&a.height()>10};$(document).on("keydown",function(a){if((a.ctrlKey||a.metaKey)&&191===a.keyCode){var b=$('input[type="search"]').filter(isVisible);b.length&&b[0].focus();var c=$('input[type="text"]');c=c.add(c.clone().filter(selectors.join(", "))).filter(isVisible),c.length&&(c=c.sort(function(a,b){return $(a).offset().top>$(b).offset().top}),c[0].focus())}}),console.log("LOADED");