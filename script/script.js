const btnCreate = $('.bt1');
const btnReplace = $('.bt2');
const textNode = $('.column-2');
const varNode1 = $('.vr1');
const varNode2 = $('.vr2');
const varNode3 = $('.vr3');
const varNode4 = $('.vr4');
const varNode5 = $('.vr5');
const varNode6 = $('.vr6');
const speachNode = $('.sp');
const startObj = {
	"text":[
		"Жили-были {var1} да {var2}",
		"Была у них {var3}",
		"Снесла {var3} {var4}, не простое - золотое",
		"- {var1} бил, бил - не разбил",
		"- {var2} била, била - не разбила",
		"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
		"{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
	]
};

btnCreate.click(function() {
	textNode.html(startObj.text);
});

btnReplace.click(function() {

	const var1 = varNode1.val();
	const var2 = varNode2.val();
	const var3 = varNode3.val();
	const var4 = varNode4.val();
	const var5 = varNode5.val();
	const var6 = varNode6.val();
	const speach = speachNode.val();

	const newObj = {
	"text":[
		`Жили-были ${var1} да ${var2}`,
		`Была у них ${var3}`,
		`Снесла ${var3} ${var4}, не простое - золотое`,
		`- ${var1} бил, бил - не разбил`,
		`- ${var2} била, била - не разбила`,
		`${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
		`${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
		`${speach}`
		]
	};
	textNode.html(newObj.text);
});

