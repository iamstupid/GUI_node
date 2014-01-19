function initTerminal(callback) {
	jQuery(function($, undefined) {
		$('#terminal').terminal(function(command, term) {
			scr.eval(command,term);
		}, {
			greetings: 'Terminal initialized',
			name: 'Node',
			height: 200,
			prompt: 'Node>',
			onInit:function(term){
				window.term=term;
				term.pause();
				callback();
			}
		});
	});
}