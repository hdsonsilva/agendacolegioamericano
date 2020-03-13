function view_bilhetes(retornos){
    var retorno = retornos['murais'];
    var i ;
    var conteudo_lista = '';
    var conteudobotao = '';
     //Alterando título do app
    
    $('#tituloApp').html("Recados");
    $('#buttontop').html("<ons-icon icon='fa-edit'></ons-icon>");
    if(retornos['murais']){    
        //Preenchendo a lista com cards
        for(i  in retorno){

            conteudo_lista += "<ons-card ><font class='font_tam1'>"+(retorno[i]['data_referente'])+" - "+(retorno[i]['assunto'])+"</font>";
            conteudo_lista += "<br><br>";
            conteudo_lista += "<font class='font_text "+(retorno[i]['url_destino'] ? "clicavelbilhete' valor='"+(retorno[i]['url_destino'])+"'" :"'")+">"+(retorno[i]['arquivo'] ? "<img width='100%' src='"+(retorno[i]['arquivo']).replace("http://", "https://")+"'><br>" : "")+(retorno[i]['mensagem'])+"</font>";
            
            conteudo_lista += "<div class='right'; style='text-align:right;'><ons-button class='"+(retorno[i]['visualizado'] == 'Sim' ? '' : 'botaocheck_bilhete')+"' value='"+(retorno[i]['codigoMural'])+"' modifier='light'><ons-icon icon='"+(retorno[i]['visualizado'] == 'Sim' ? "fa-envelope-open" : "fa-envelope")+"'></ons-icon></ons-button></div>";
            conteudo_lista += "</ons-card>";
        }
        $('#pageBilhetesList').html($('#pageBilhetesList').html()+conteudo_lista);
        $('#pageBilhetesListButton').html("<div class='align_center'><ons-button name='buscar' class='buscamaisbilhete'  id='pageBilhetes' >Buscar Mais</ons-button></div><br>");

    }

    else{
        conteudobotao += "<ons-card><font class='font_tam1'>Nenhum Registro Encontrado</font></ons-card>";
        $('#pageBilhetesListErro').html(conteudobotao);
    }
    //Caso o bilhete tenha um link 
    $('.clicavelbilhete').unbind('click');
    $('.clicavelbilhete').click(function(){
    
        abrirURL($(this).attr('valor'), 1);
    });

    //Evento click no botao Ver Mais
    $('.buscamaisbilhete').unbind('click');
    $('.buscamaisbilhete').click(function(e){
        recadocontrole = recadocontrole+5 ;
        complemento = recadotipo+"/"+recadocontrole+'/';
        controle(e);
    });

    //clique para marcar como lido
    $('.botaocheck_bilhete').unbind('click');
    $('.botaocheck_bilhete').click(function(){
       marcarrecado($(this).attr('value'));
    });

    /*Redirecionando para novo recado.. retirando evento click e criando novamente */
    $('#buttontop').unbind('click');
    $('#buttontop').click(function(){
        
        var myNavigator = document.getElementById('myNavigator');
        myNavigator.pushPage('html/page_novorecado.html');
        /* Aguardando carregar a pagina para configurar os eventos após os elementos estarem carregados na tela*/
        setTimeout(function(){
            /* Acao voltar para o app principal */
            $('#bt_voltar_app').click(function(){
                window.location.href = './app.html';
            });
            /*Acao enviar o recado digitado */
            $('#idcadastrarnovorecado').click(function(){
                $('#button').show();
                /*Verificando se o recado foi digitado e possui mais de 10 caractere */
                if($('#mensagemnovorecado').val() =='' || $('#mensagemnovorecado').val().length < 10 ){
                    ons.notification.toast('Escreva a mensagem antes de enviar.',{'timeout':1500});
                }
                else{
                    cadastronovamensagem($('#mensagemnovorecado').val());
                }

            });

        }, 1000);
    });

    //Criando eventos dos cliques nos botoes superiores
    $('.segment__input').unbind('click');
    $('.segment__input').unbind('click');
    $('.segment__input').click(function(e){
        recadotipo = $(this).val();
        //Limpando dados
        $('#pageBilhetesList').html(' ');
        $('#pageBilhetesListErro').html(' ');
        //Limpando dados se o tipo for enviados
        if(recadotipo == ''){
            $('#pageBilhetesListButton').html('');
        }
        recadocontrole = 0;
        complemento = recadotipo;
        controle(e);
    });

}
