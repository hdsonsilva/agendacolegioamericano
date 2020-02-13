function view_home(retornos){
    //Alterando título do app
    $('#tituloApp').html("Agenda Escolar");
    $('#idNome').html(localStorage.getItem("login_nome"));

    var i ;
    var conteudo_lista = '';
     
    var retorno = retornos['murais'];
    var i ;
    var conteudo_lista = '';
 if(retornos['murais']){     
    //Preenchendo a lista com cards
    for(i  in retorno){

        conteudo_lista += "<ons-card "+(retorno[i]['url_destino'] ? "class='clicavelhome' valor='"+(retorno[i]['url_destino'])+"'" :"")+"><font class='font_tam1'>"+(retorno[i]['data_inicio'])+" - "+(retorno[i]['assunto'])+"</font>";
        conteudo_lista += "<br><br>";
        conteudo_lista += "<font class='font_text'>"+(retorno[i]['arquivo'] ? "<img width='100%' src='"+(retorno[i]['arquivo'])+"'><br>" : "")+(retorno[i]['mensagem'])+"</font>";
        conteudo_lista += "</ons-card>";
    }

    $('#homePageItens').html(conteudo_lista);


    $('.clicavelhome').click(function(){
        
        abrirURL($(this).attr('valor'), 1);
    });
}
else{
    conteudo_lista += "<ons-card><font class='font_tam1'>Nenhuma informação encontrada</font></ons-card>";
    $('#homePageItens').html($('#homePageItens').html()+conteudo_lista);
}

}
