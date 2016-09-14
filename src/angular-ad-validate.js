(function($) {
	'use strict';
	$.validationEngineLanguage.allRules['ad-required']={
		"func": function(field){
			return (field.val() === "object:5") ? false : true;
		},
		"alertText": "* 此处不可空白"
	};
})(jQuery);
