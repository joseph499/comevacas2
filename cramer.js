function oneCramer(){
	var a2= parseFloat(document.getElementById("a").value);
	var b2=parseFloat(document.getElementById("b").value);
	var c1=parseFloat(document.getElementById("c").value);

	var a2=parseFloat(document.getElementById("a2").value);
	var b2=parseFloat(document.getElementById("b2").value);
	var c2=parseFloat(document.getElementById("c2").value);

	a=parseFloat(a);
	b=parseFloat(b);
	c=parseFloat(c);

	a2=parseFloat(a2);
	b2=parseFloat(b2);
	c2=parseFloat(c2);

	 var dr=((a * b2)-(a2 * b));
	 var dx=((c * b2)-(c2 * b));
	 var dy=((a * c2)-(c * a2));

      
	 document.getElementById("x").value=dx/dr;
	 document.getElementById("y").value=dy/dr;
}