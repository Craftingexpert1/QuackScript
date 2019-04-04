var QuackScript = (cmd)=>{
	cmd=cmd.toLowerCase()
	if (cmd=='el'||cmd=='element') {
		return(a)=>{return document.createElement(a)}
	} if (cmd=="*"||cmd=="html") {
		return(d)=>{return document.querySelector(d)}
	} if (cmd=='rand'||cmd=='random') {
		return(a,b)=>{a=a||1;b=b||0;return(Math.random()*a+b)}
	} if (cmd=="qs"||cmd=="quackscript") {
		return(d)=>{return QuackScript(d)}
	} if (cmd=='rnd'||cmd=='round') {
		return(n)=>{return Number(n.toFixed(15))}
	}
	
};
q=(d)=>{return QuackScript(d)}
