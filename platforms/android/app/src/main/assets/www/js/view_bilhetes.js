function view_bilhetes(retornos){

    let retorno = retornos['mensagensAgrupadas'];
    let msgs    = retornos['mensagensAluno'];
    var i ;
    var conteudo_lista = '';
    var conteudobotao = '';
    let titulo ;
    let tipocontato ;
    let codigocontato ;
     //Alterando título do app
    $('#tituloApp').html("Mensagens");
    $('#buttontop').html("<ons-icon icon='fa-edit' size='24px, material:24px'></ons-icon>");
    if(retorno){    
        
        //Preenchendo a lista com cards
        for(i  in retorno){
            console.log(retorno);

            conteudo_lista += mensagemAgrupada(retorno[i]);
        }
        $('#pageBilhetesList').html(conteudo_lista);

        $('.verdetalhemsg').click(function(){

            titulo = $(this).attr('nome');
            tipocontato = ($(this).attr('prof') ? 'prof' : 'dep' );
            codigocontato = ($(this).attr('prof') ? $(this).attr('prof') : $(this).attr('dep') );

            $('#buttontop').click();

        });
        //$('#pageBilhetesListButton').html("<div class='align_center'><ons-button name='buscar' class='buscamaisbilhete'  id='pageBilhetes' >Buscar Mais</ons-button></div><br>");

    }

    else{
        

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
    $('#buttontop').click(function(ok){
        
        var myNavigator = document.getElementById('myNavigator');
        myNavigator.pushPage('html/page_novorecado.html');
        /* Aguardando carregar a pagina para configurar os eventos após os elementos estarem carregados na tela*/
        setTimeout(function(){
            $('#tituloAppNew').html(titulo);
            /* Acao voltar para o app principal */
            //$('#bt_voltar_appp').unbind('click');
            $('#bt_voltar_appp').click(function(){
                
                //$('#buttontop').html("<ons-icon icon='fa-edit' size='24px, material:24px'></ons-icon>");
                //$('#pageNovoRecado').hide();
                $('#tituloAppNew').html('');
                window.location.href = './app.html?objeto=bilhetes';
            });
            

            $('#mensagensdetalhe').height( ($('#pageNovoRecado').height() - $('#titulomsg').height() - $('#mensagemnovorecado').height() - 50)  );

            buscarMensagensDetalhadas(msgs,tipocontato,codigocontato);
            

            $("#mensagensdetalhe").animate({ scrollTop: 1000 }, 1000);

            /*Acao enviar o recado digitado */
            $('#idcadastrarnovorecado').unbind('click');
            $('#idcadastrarnovorecado').click(function(){
                $('#button').show();
                /*Verificando se o recado foi digitado e possui mais de 10 caractere */
                if( $('#mensagemnovorecado').val() =='' || $('#mensagemnovorecado').val().length < 10 ){
                    ons.notification.toast('Escreva a mensagem antes de enviar.',{'timeout':1500});
                }
                else{
                    cadastronovamensagem($('#mensagemnovorecado').val());
                }

            });

        }, 100);
    });

    //Criando eventos dos cliques nos botoes superiores
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



function exibeMsg(dados, tipo){
    let msg ;
    let color ;
    let icon ;
    if(tipo == 'escola'){
        msg = ""+
        "<div class='msgescola'>"+
            "<font class='titulomsg'><ons-icon  icon='md-account' size='10px, material:10px'></ons-icon> "+dados['de']+"</font><br>"+
            "<font class='corpomsg'>"+quebra_de_linha(dados['msg'])+"</font>"+
            "<div class='rodapedireita'><font class='rodapemsg'>"+dados['hora']+"</font></div>"+
        "</div>";
    }

    else{
        color = dados['visto'] == 'visto' ? "blue" : "gray";
        icon = dados['visto'] == 'visto' ? "md-check-all" : "md-check";
        msg = ""+
        "<div class='msgaluno'>"+
             "<font class='titulomsg'><ons-icon  icon='md-account' size='10px, material:10px'></ons-icon> Você</font><br>"+
            "<font class='corpomsg'>"+quebra_de_linha(dados['msg'])+"</font>"+
            "<div class='rodapedireita'><ons-icon style='color: "+color+";' icon='"+icon+"' size='12px, material:12px'></ons-icon> <font class='rodapemsg'>"+dados['hora']+"</font></div>"+
        "</div>";   
    }

    $('#mensagensdetalhe').html($('#mensagensdetalhe').html() + msg);

}

function quebra_de_linha(texto){
 

    let ocorrencias = (texto.match(/\n/g) || []).length;
    for(i = 0 ; i < ocorrencias; i++){
       texto = texto.replace("\n","<br>");
    }
    return texto;
}

function buscarMensagensDetalhadas(msgs,tipocontato,codigocontato){
    let posicao = tipocontato == 'prof' ? 4 : 5 ;
    let dados = new Array() ;
    for(i in msgs){
        if(msgs[i][posicao] == codigocontato){
            dados['msg'] = msgs[i][1];
            dados['hora'] = msgs[i][6];
            dados['de'] = msgs[i][9];
            dados['visto'] = msgs[i][8];
            if(msgs[i]['7'] == 'Alunos'){
                exibeMsg(dados,'aluno');    
            }
            else{
             exibeMsg(dados,'escola');       
            }
        }


        
    }
    
}

function mensagemAgrupada(dados){
    let conteudobotao;

    if(dados[0]){
        conteudobotao = '<ons-list-item tappable class="verdetalhemsg" nome="'+dados[0]+'" dep="'+dados[5]+'">' +
              '<label class="left">' +
               '<ons-icon style="color: #2c7be5; padding-left: 2px" icon="md-group-work, material:md-group-work" size="36px, material:36px"></ons-icon>' +
              '</label>' +
              '<div class="center">' +
                '<font class="msg_titulo">'+dados[0]+'</font>' +
                '<br>' +
                '<font class="msg_last">'+dados[7]+'</font>' +
              '</div>' +
              '<div class="right">' +
                '<ons-icon style="color: grey; padding-left: 4px" icon="md-ios-comment-text, material:md-comment-text" size="24px, material:24px"></ons-icon>' +
              '</div>' +
            '</ons-list-item>';

    }
    else{
        conteudobotao = '<ons-list-item tappable  nome="'+dados[1]+'" class="verdetalhemsg" prof="'+dados[4]+'">' +
              '<label class="left">' +
               '<ons-icon style="color: #2c7be5; padding-left: 2px" icon="md-account-box, material:md-account-box" size="36px, material:36px"></ons-icon>' +
              '</label>' +
              '<div class="center">' +
                '<font class="msg_titulo">'+dados[1]+'</font>' +
                '<br><br>' +
                '<font class="msg_last">'+dados[7]+'</font>' +
              '</div>' +
              '<div class="right">' +
                '<ons-icon style="color: grey; padding-left: 4px" icon="md-ios-comment-text, material:md-comment-text" size="24px, material:24px"></ons-icon>' +
              '</div>' +
            '</ons-list-item>';
    }

    return conteudobotao;

}