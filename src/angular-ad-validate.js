(function($) {
	'use strict';
	$.validationEngineLanguage.allRules['ad-required']={
		"func": function(field){
			return (field.find("option:selected").text() === "请选择") ? false : true;
		},
		"alertText": "* 此处必须选择"
	};
})(jQuery);
