function view_boletos(retorno){
    var i ;
    var conteudo_lista = '';

    //Alterando título do app
    $('#tituloApp').html("Financeiro");

    //Preenchendo a lista com cards
    for(i  in retorno){
  
        conteudo_lista += "<ons-card><font class='font_tam1'>Parcela "+(retorno[i]['Parcela'])+".::. Vencimento "+(retorno[i]['Vencimento'])+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Emissao:" + retorno[i]['Emissao']+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Valor:" + retorno[i]['Valor Emitido']+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Pagamento:" + (retorno[i]['Pagamento'] == null ? "" : retorno[i]['Pagamento'])+"</font>";
        conteudo_lista += "<div class='right align_direita'><ons-button><ons-icon icon='fa-barcode'></ons-icon></ons-button> <ons-button ><ons-icon icon='fa-print'></ons-icon></ons-button></div>";
        conteudo_lista += "</ons-card>";
    }

    $('#pageFinanceiroList').html(conteudo_lista);
}
