function view_agenda(retorno){
    var i ;
    var conteudo_lista = '';
     //Alterando título do app
    $('#tituloApp').html("Agenda");
    //Preenchendo a lista com cards
    for(i  in retorno){

        conteudo_lista += "<ons-card><font class='font_tam1'>"+(retorno[i]['Data'])+"</font>";
        conteudo_lista += "<br><br>";
        conteudo_lista += "<font class='font_text'>"+retorno[i]['Mensagem']+"</font>";
        conteudo_lista += "</ons-card>";
    }

    $('#pageAgendaList').html(conteudo_lista);
}
