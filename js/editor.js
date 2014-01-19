function initEditor(){
    window.editor=ace.edit("editor");
    editor.setTheme("twilight");
    editor.getSession().setMode("ace/mode/javascript");
    editor.commands.addCommand({
        name: 'run',
        bindKey: {win: 'Ctrl-R',  mac: 'Command-R'},
        exec: function(editor) {
            run(editor.getValue());
        },
        readOnly: true // false if this command should not apply in readOnly mode
    });
    editor.setHighlightActiveLine(true);
    window.term.echo("editor loaded");
}
function setTheme(theme){
    editor.setTheme("ace/theme/"+theme);
}
function unHilitLine(){
    window.editor.setHighlightActiveLine(false);
}
function hilitLine(){
    window.editor.setHighlightActiveLine(true);
}