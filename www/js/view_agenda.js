function view_agenda(retornos){

    var retorno = retornos['murais'];
    var i ;
    var conteudo_lista = '';
     //Alterando título do app
    $('#tituloApp').html("Agenda");
    //Preenchendo a lista com cards
if(retornos['murais']){ 
    for(i  in retorno){

        conteudo_lista += "<ons-card "+(retorno[i]['url_destino'] ? "class='clicavelagenda' valor='"+(retorno[i]['url_destino'])+"'" :"")+"><font class='font_tam1'>"+(retorno[i]['data_referente'])+" - "+(retorno[i]['assunto'])+"</font>";
        conteudo_lista += "<br><br>";
        conteudo_lista += "<font class='font_text'>"+(retorno[i]['arquivo'] ? "<img width='100%' src='"+(retorno[i]['arquivo']).replace("http://", "https://")+"'><br>" : "")+(retorno[i]['mensagem'])+"</font>";
        conteudo_lista += "</ons-card>";
    }

    $('#pageAgendaList').html(conteudo_lista);


    $('.clicavelagenda').click(function(){
        
        abrirURL($(this).attr('valor'));
    });
}
else{
    conteudo_lista += "<ons-card><font class='font_tam1'>Nenhuma informação encontrada</font></ons-card>";
    $('#pageAgendaList').html($('#pageAgendaList').html()+conteudo_lista);
}
}
