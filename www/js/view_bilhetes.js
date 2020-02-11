function view_bilhetes(retorno){
    var i ;
    var conteudo_lista = '';
     //Alterando título do app
    $('#tituloApp').html("Recados");
    //Preenchendo a lista com cards
    for(i  in retorno){

        conteudo_lista += "<ons-card><font class='font_tam1'>"+(retorno[i]['Titulo'])+".::. "+(retorno[i]['Data'])+"</font>";
        conteudo_lista += "<br><br>";
        conteudo_lista += "<font class='font_text'>"+retorno[i]['Mensagem']+"</font>";
        conteudo_lista += "<br>";
        conteudo_lista += "<div class='right'; style='text-align:right;'><ons-button class='botaocheck_bilhete' modifier='light'><ons-icon icon='"+(retorno[i]['Lido'] == 'Sim' ? "ion-checkmark-done-outline" : "fa-check")+"'></ons-icon></ons-button></div>";
        conteudo_lista += "</ons-card>";
    }

    $('#pageBilhetesList').html(conteudo_lista);
}
