var construct = (cmd)=>{
	cmd=cmd.split(';').filter((el)=>{return el!=""&&el!="↵";});
	for (i=0;i<cmd.length;i++) {
		cmd[i]=cmd[i].replace('↵','').replace('\n','').trim();
		cmd[i]=cmd[i]
		.replace('Btn()', 'document.createElement("button")')
		.replace('$(','document.querySelector(')
		.replace('Div()', 'document.createElement("div")')
		.replace('.show()','.style.display="block"')
		.replace('.hide()','.style.display="none"')
		.replace('.dspl','.style.display')
		.replace('.bg','.style.backgroundColor')
		.replace('.text','.innerText')
		.replace('~(','function(')
		.replace('.ael(','.addEventListener(');
		window.eval(cmd[i])
	}
};
var q=(cmd)=>{return construct(cmd)};

window.onload=()=>{
q(document.querySelector('script[type="text/quackscript"]').innerText)
}
