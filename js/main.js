require.config({
	"shim": {
		"mod4": {
			"deps":["jquery"],
			"exports": "module4"
		}
	}
});


require(['jquery','mod1','mod2','mod3','mod4'],function($,mod1,mod2,mod3,mod4){
	$('#mod1text').html(mod1.getText());
	mod2.setText();
	mod3.setCarousel();
	mod4.hey();
})();