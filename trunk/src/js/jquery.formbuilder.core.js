/*
 * Main component of JQuery Form Builder plugin, the Form Builder container itself 
 * consists of builder palette contains widgets supported by the form builder and 
 * builder panel where the constructed form display. 
 * 
 * Revision: @REVISION
 * Version: @VERSION
 * Copyright 2011 Lim Chee Kin (limcheekin@vobject.com)
 *
 * Licensed under Apache v2.0 http://www.apache.org/licenses/LICENSE-2.0.html
 *
 * Date: 
 */

(function($) {
	// plugin's private variables and functions
	var pluginName = 'formbuilder';
	// for logging to the firebug console, put in 1 line so it can easily remove
	// for production
	function log($message) { if (window.console && window.console.log) window.console.log($message); };

	$.fn.formbuilder = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(
					arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.' + pluginName);
		}
	};

	$.fn.formbuilder.name = pluginName;
	// Default options. Plugin user can override the default option externally
	// e.g. $.fn.formbuilder.options.firstOption = '1st option'
	$.fn.formbuilder.options = {
		widgets : {
			standard : ['Single Line Text', 'Number', 'Email Address', 'Web Address'],
			fancy : ['Phone Number', 'Plain Text']
		},
		name : 'widgetName',
		text : 'Widget Text'
	};

	var methods = {
		init : function(options) {
			// merge default options and passed in options (overwrite the
			// default)
			var options = $.extend(true, {}, $.fn.formbuilder.options, options);

			// REF: http://www.webresourcesdepot.com/smart-floating-banners/
			$(window).scroll(
			function() {
				if ($(window).scrollTop() > $(".floatingPanelIdentifier").position({scroll : false}).top) {
					$(".floatingPanel").css("position", "fixed");
					$(".floatingPanel").css("top", "0");
				}
				
				if ($(window).scrollTop() <= $(".floatingPanelIdentifier").position({scroll : false}).top) {
					$(".floatingPanel").css("position", "relative");
					$(".floatingPanel").css("top",
							$(".floatingPanelIdentifier").position);
				}
			});
			
			$('#paletteTabs').tabs();
			var length = options.widgets.standard.length;
		  for (var i = 0; i < length; i++) {
		    $('<a href = "#" class="fbWidget">' + options.widgets.standard[i] + '</a>').appendTo('#standardFields');
		    $('.fbWidget').button();
		    }				
			var length = options.widgets.fancy.length;
		  for (var i = 0; i < length; i++) {
		    $('<a href = "#" class="fbWidget">' + options.widgets.fancy[i] + '</a>').appendTo('#fancyFields');
		    $('.fbWidget').button();
		    }	
		  
			return this.each(function() {
				var $this = $(this);
				
				/*
				 * $(window).click('click.' + options.name, methods.click); var
				 * data = $this.data(pluginName);
				 *  // If the plugin hasn't been initialized yet if (!data) { //
				 * store the widget specific options $(this).data(pluginName, {
				 * target : $this, options : options });
				 *  }
				 */

			});
		},
		
		destroy : function() {

			return this.each(function() {

				var $this = $(this);
				/*
				 * var data = $this.data(pluginName);
				 *  // Namespacing FTW $(window).unbind('.' +
				 * data.options.name); $this.removeData(pluginName);
				 */
			})

		},
		click : function() {
			log('click run properly');
		},
		show : function() {
		},
		hide : function() {
		},
		update : function(content) {
		}
	};

})(jQuery);
