function view_boletos(retornos){
    var i ;
    var conteudo_lista = '';
    var retorno = retornos['boletos'];
    //Alterando título do app
    
    $('#tituloApp').html("Financeiro");
if(retornos['boletos'].length > 0 ){
    retorno.reverse();
    //Preenchendo a lista com cards
    for(i  in retorno){
  
        conteudo_lista += "<ons-card><font class='font_tam1'>Parcela "+(retorno[i]['parcela'])+".::. Vencimento "+(retorno[i]['vencimento'])+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Emissao:" + retorno[i]['emissao']+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Valor:" + retorno[i]['valor_emitido']+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Pagamento:" + (retorno[i]['pagamento'] == null ? "" : retorno[i]['pagamento'])+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Valor Pago:" + (retorno[i]['pagamento'] == null ? "" : retorno[i]['valor_pago'])+"</font>";
        conteudo_lista += "<div class='right align_direita'><ons-button class='minhalinhadigitavel' valor='"+(retorno[i]['linha_digitavel'])+"' idpopover='"+(retorno[i]['codigo'])+"' ><ons-icon icon='fa-barcode'></ons-icon></ons-button> <ons-button class='meuboleto' valor='"+(server1+localStorage.getItem('unidade'))+"/"+(retorno[i]['url_impressao'])+"'><ons-icon icon='fa-print'></ons-icon></ons-button></div>";
        conteudo_lista += "</ons-card>";
    }
    //Exibindo os boletos
    $('#pageFinanceiroList').html($('#pageFinanceiroList').html()+conteudo_lista);
    //Adicionando o click para exibir os boletos
    $('.meuboleto').click(function(){
        abrirURL($(this).attr('valor'),1);
    });
    //Exibindo a linha digitavel daquele boleto
    $('.minhalinhadigitavel').click(function(){
        
        $('#conteudodialog').html($(this).attr('valor'));
        $('#my-dialog').show(500);

    });
}
else{
    conteudo_lista += "<ons-card><font class='font_tam1'>Nenhuma informação encontrada</font></ons-card>";
    $('#pageFinanceiroList').html($('#pageFinanceiroList').html()+conteudo_lista);
}

}
