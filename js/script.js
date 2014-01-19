var vm=require("vm");
//create a virtual machine
//fn initScript: todo==>init a context to use
function toHTMLStr(a,o){
    o=o?o:"";
    var s="<span class=\""+o+"\">";
    var end="</span>";
    var middle="";
    var p=1,pointer=0;
    while(pointer<a.length){
        var b=String(a[pointer]);
        middle+=b;
        pointer++;
    }
    return s+middle+end;
}
var context={
    "console":{
        "log":function(){
            var str=toHTMLStr(Array.prototype.slice.call(arguments));
            window.term.echo(str,{"raw":true});
        },
        "error":function(){
            var str=toHTMLStr(Array.prototype.slice.call(arguments),"error");
            window.term.echo(str,{"raw":true});
        },
        "warn":function(){
            var str=toHTMLStr(Array.prototype.slice.call(arguments),"warn");
            window.term.echo(str,{"raw":true});
        },
        "assert":function(a){
            window.term.echo(a?"true":"dawn");
        }
    },
    "require":function(module){
        return require(module);
    }
}
function initScript(){
    context=vm.createContext(context);
    window.term.echo("[[gb;#5af;#000;]Script Context] initialized.")
    window.term.resume();
}
var scr={};
(function(exp){
    scr.eval=function(c,term){
        term.echo(eval(c),{raw:true});
    }
    window.run=function(code){
        var script;
        try{
            script=new vm.Script(code,{filename:"temp.js",displayErrors:true});
        }catch(e){
            context.console.error("Compling error ",e.message);
            return false;
        }
        try{
            script.runInContext(context);
        }catch(e){
            context.console.error("Running error ",e.message);
            return false;
        }
    }
})(scr);