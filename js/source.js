function tester() {
	var doc = new jsPDF();
	var movieSelection = window.localStorage.getItem('list-movies');
	var testen = JSON.parse(movieSelection);
	//alert (testen[0].title);
	doc.setFontSize(24);
	doc.setTextColor(255,0,0);
	doc.text(70, 20, 'Catalog Movie');
	doc.setFontSize(18);
	doc.setTextColor(0,0,0);
	doc.text(20, 40, 'Title');//col, linha
	doc.text(60, 40, 'Genre');
	doc.text(100, 40, 'Language');
	doc.text(140, 40, 'Year');
	
	for(i = 0, j = 50; i <=testen.length; i++,j = j+ 10){
		doc.text(50, j, testen[0].title);
	}
	

	doc.output('datauri');
	//doc.save('Test.pdf');
}