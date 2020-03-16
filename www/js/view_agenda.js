function view_agenda(retornos){

    var retorno = retornos['murais'];
    var i ;
    var conteudo_lista = '';
    var conteudobotao = '';
     //Alterando título do appc
     console.log(retornos);
    $('#tituloApp').html("Agenda");
    //Preenchendo a lista com cards

    if(retornos['murais']){ 
        for(i  in retorno){

            conteudo_lista += "<ons-card "+(retorno[i]['url_destino'] ? "class='clicavelagenda' valor='"+(retorno[i]['url_destino'])+"'" :"")+"><font class='font_tam1'>"+(retorno[i]['data_referente'])+" - "+(retorno[i]['assunto'])+"</font>";
            conteudo_lista += "<br><br>";
            conteudo_lista += "<font class='font_text'>"+(retorno[i]['arquivo'] ? "<img width='100%' src='"+(retorno[i]['arquivo']).replace("http://", "https://")+"'><br>" : "")+quebraLinha(retorno[i]['mensagem'])+"</font>";
            conteudo_lista += "</ons-card>";
        }

        $('#pageAgendaList').html($('#pageAgendaList').html()+conteudo_lista);

        $('#pageAgendaListButton').html("<div class='align_center'><ons-button name='buscar' class='buscamais'  id='pageAgenda' >Buscar Mais</ons-button></div><br>");


        $('.clicavelagenda').click(function(){
            
            abrirURL($(this).attr('valor'), 1);
        });

        //Evento click no botao Ver Mais
        $('.buscamais').unbind('click');
        $('.buscamais').click(function(e){
            agendacontrole = agendacontrole+5 ;
            complemento = agendacontrole+'/';
            controle(e);
        });
    }
    else{
        conteudobotao += "<ons-card><font class='font_tam1'>Nenhum registro encontrado</font></ons-card>";
        $('#pageAgendaListErro').html(conteudobotao);
    }



}


