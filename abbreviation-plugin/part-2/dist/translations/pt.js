(function(d){	const l = d['pt'] = d['pt'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"",Aquamarine:"",Black:"",Blue:"",Bold:"Negrito","Bulleted List":"Lista não ordenada","Choose heading":"","Dim grey":"","Dropdown toolbar":"","Edit block":"","Editor toolbar":"",Green:"",Grey:"",Heading:"Cabeçalho","Heading 1":"Cabeçalho 1","Heading 2":"Cabeçalho 2","Heading 3":"Cabeçalho 3","Heading 4":"","Heading 5":"","Heading 6":"",Italic:"Itálico","Light blue":"","Light green":"","Light grey":"",Next:"Seguinte","Numbered List":"Lista ordenada",Orange:"",Paragraph:"Parágrafo",Previous:"Anterior",Purple:"",Red:"",Redo:"Refazer","Rich Text Editor":"Editor de texto avançado","Rich Text Editor, %0":"Editor de texto avançado, %0","Show more items":"",Turquoise:"",Undo:"Desfazer",White:"",Yellow:""}	);l.getPluralForm=function(n){return (n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));