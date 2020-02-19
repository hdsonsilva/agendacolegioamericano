function view_bilhetes(retornos){
    var retorno = retornos['murais'];
    var i ;
    var conteudo_lista = '';
     //Alterando título do app
    $('#tituloApp').html("Recados");
    if(retornos['murais']){    
        //Preenchendo a lista com cards
        for(i  in retorno){

            conteudo_lista += "<ons-card "+(retorno[i]['url_destino'] ? "class='clicavelagenda' valor='"+(retorno[i]['url_destino'])+"'" :"")+"><font class='font_tam1'>"+(retorno[i]['data_referente'])+" - "+(retorno[i]['assunto'])+"</font>";
            conteudo_lista += "<br><br>";
            conteudo_lista += "<font class='font_text'>"+(retorno[i]['arquivo'] ? "<img width='100%' src='"+(retorno[i]['arquivo'])+"'><br>" : "")+(retorno[i]['mensagem'])+"</font>";
            
            conteudo_lista += "<div class='right'; style='text-align:right;'><ons-button class='botaocheck_bilhete' modifier='light'><ons-icon icon='"+(retorno[i]['Lido'] == 'Sim' ? "ion-checkmark-done-outline" : "fa-check")+"'></ons-icon></ons-button></div>";
            conteudo_lista += "</ons-card>";
        }

        $('#pageBilhetesList').html(conteudo_lista);

    }

    else{
        conteudo_lista += "<ons-card><font class='font_tam1'>Sem  recados</font></ons-card>";
        $('#pageBilhetesList').html($('#pageBilhetesList').html()+conteudo_lista);
    }

    $('#newrecado').unbind('click');
    $('#newrecado').click(function(){
        
        var myNavigator = document.getElementById('myNavigator');
        myNavigator.pushPage('html/page_novorecado.html');
        setTimeout(function(){
            $('#bt_voltar_app').click(function(){
                window.location.href = './app.html';
            });

            $('#idcadastrarnovorecado').click(function(){

                if($('#mensagemnovorecado').val() ==''){
                    ons.notification.toast('Escreva a mensagem antes de enviar.',{'timeout':1500});
                }
                else{
                    /*cadastrarnovobilhete($('#mensagemnovorecado').val());*/
                    ons.notification.toast('Ainda em construção.',{'timeout':1500});
                }

            });

        }, 1000);
    });

}
