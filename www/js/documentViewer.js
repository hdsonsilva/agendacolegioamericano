



function abrirPDF(url){

	document.addEventListener('deviceready',carregaDocumentViewer(url), false);
		
}

function carregaDocumentViewer(url){
	var options = {
	    title: "Documento",
	    documentView : {
	        closeLabel : 'Fechar'
	    },
	    navigationView : {
	        closeLabel : 'Fechar'
	    },
	    email : {
	        enabled : true
	    },
	    print : {
	        enabled : true
	    },
	    openWith : {
	        enabled : true
	    },
	    bookmarks : {
	        enabled : true
	    },
	    search : {
	        enabled : true
	    },
	    autoClose: {
	        onPause : false
	    }
	}

	console.log(url);
	PDFViewer.openPDF(url);
	//cordova.plugins.SitewaertsDocumentViewer.viewDocument(url, 'application/pdf', options, onPossible, onMissingApp, onImpossible, onError);
}

function onPossible(){
  window.console.log('document can be shown');
  //e.g. track document usage
}

function onClose(){
  window.console.log('document closed');
  //e.g. remove temp files
}

function onShow(){
  window.console.log('document shown');
  //e.g. track document usage
}


function onMissingApp(appId, installer)
{
    if(confirm("Quer instalar o app "
            + appId + " ?"))
    {
        installer();
    }
} 

function onError(error){
  window.console.log(error);
  alert
  ("Desculpe! Não consigo abrir o documento.");
}

function onImpossible(){
  window.console.log('document cannot be shown');
  //e.g. track document usage
}