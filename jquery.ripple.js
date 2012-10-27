/*****************************************************************
 *
 * jQuery Ripplei
 * 波紋のようなエフェクトを発生させるjQueryプラグイン
 * 
 * Required: jQuery(http://jquery.com/)
 * License: MIT
 * Update: 2012/10/20
 * Version: 1.0.0
 * Author: yuu.creatorish
 * URL: http://creatorish.com
 * PluginURL: http://creatorish.com/lab/
 *
 *
 ******************************************************************/

var Ripple = function(options) {
	var setting = {
		target: document.body,
		x: 0,
		y: 0,
		size: 120,
		count: 1,
		zIndex: 9999,
		delay: 200,
		delayIncrease: 0,
		border: "solid",
		radius: "auto",
		width: 3,
		color: "#ccc",
		duration: 800,
		easing: "swing",
		background: "transparent",
		shadow: 0
	};
	
	jQuery.extend(setting,options);
	
	if (setting.radius === "auto") {
		setting.radius = setting.size / 2;
	}
	
	for (var i = 0; i < setting.count; i++) {
		var circ = jQuery("<div></div>");
		jQuery(setting.target).append(circ);
		var delay = i * (setting.delay + setting.delayIncrease * i);
		circ.css({
			position: "absolute",
			width: 1,
			height: 1,
			top: setting.y-setting.width,
			left: setting.x-setting.width,
			border: setting.width+"px " + setting.border + " " + setting.color,
			borderRadius: setting.radius,
			background: setting.background,
			boxShadow: setting.shadow,
			zIndex: setting.zIndex
		}).delay(delay).animate({
			width: setting.size,
			height: setting.size,
			top: setting.y - setting.size/2-setting.width,
			left: setting.x - setting.size/2-setting.width,
			opacity: 0
		},{
			duration: setting.duration,
			easing: setting.easing,
			complete: function() {
				jQuery(this).remove();
			}
		});
	}
};