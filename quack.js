var QuackScript = (cmd)=>{
	if (cmd=='el') {
		return(a)=>{return document.createElement(a)}
	} if (cmd=="*") {
		return(d)=>{return document.querySelector(d)}
	} if (cmd=='rand') {
		return(a,b)=>{a=a||1;b=b||0;return(Math.random()*a+b)}
	} if (cmd=="qs") {
		return(d)=>{return QuackScript(d)}
	} if (cmd=='rnd') {
		return(n)=>{return Number(n.toFixed(15))}
	}
	
};
q=(d)=>{return QuackScript(d)}
