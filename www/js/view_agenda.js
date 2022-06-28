function view_agenda(retornos){

    var retorno = retornos['murais'];
    var i ;
    var conteudo_lista = '';
    var conteudobotao = '';
    var imagem_view = '';
     //Alterando título do appc
     console.log(retornos);
    $('#tituloApp').html("Agenda");
    //Preenchendo a lista com cards

    if(retornos['murais']){ 
        for(i  in retorno){

            conteudo_lista += "<ons-card "+(retorno[i]['url_destino'] ? "class='clicavelagenda' valor='"+(retorno[i]['url_destino'])+"'" : (retorno[i]['arquivo'] ? "class='imagemview' imagem='"+(retorno[i]['arquivo'])+"'" : " "))+"><font class='font_tam1'><span class='notification notification--material baloes_blue'>&nbsp;&nbsp;"+(retorno[i]['data_referente'])+"&nbsp;&nbsp;</span>&nbsp;&nbsp;"+(retorno[i]['assunto'])+"</font>";
            conteudo_lista += "<br><br>";
            conteudo_lista += "<font class='font_text'>"+(retorno[i]['arquivo'] ? "<img width='100%' src='"+(retorno[i]['arquivo']).replace("http://", "https://")+"'><br>" : "")+quebraLinha(retorno[i]['mensagem'])+"</font>";
            if(retorno[i]['extras']){
                for(ii in retorno[i]['extras']){
                    conteudo_lista += "<br><br><font class='font_pergunta'>"+(retorno[i]['extras'][ii]['pergunta'])+"</font>";
                    conteudo_lista += "<br><font class='font_resposta'>"+(retorno[i]['extras'][ii]['resposta'])+"</font>";
                }
            }

            conteudo_lista += "</ons-card>";
        }

        $('#pageAgendaList').html($('#pageAgendaList').html()+conteudo_lista);

        $('#pageAgendaListButton').html("<div class='align_center'><ons-button name='buscar' class='buscamais'  id='pageAgenda' >Buscar Mais</ons-button></div><br>");


        $('.clicavelagenda').click(function(){
            abrirURL($(this).attr('valor'), 1);
            
        });

        $('.imagemview').click(function(){
             
             imagem_view = $(this).attr('imagem');
            document.addEventListener('deviceready', function () {
                //PhotoViewer.show($(this).attr('url'));
               
                PhotoViewer.show(imagem_view,'',{share:true,closeButton: true,copyToReference: true, headers: '',piccasoOptions: { }});
            });
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

    


