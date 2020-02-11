function buscaAcoes(acao){
        
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: server_action,
            cache: false, //Nao fazer cache
            timeout: 10000, //10 segundos
            data: {
                'token': localStorage.getItem('token'),
                'action': acao
            },
            beforeSend: function () {
                showModal('show');
            },
            success: function (ret) {

                showModal('hide');
                if (ret) {
                    retornoAcao(acao,ret) ;
                } else {
                    //$('#pending-list').html("<ons-list id='listaNotifications'><ons-list-item modifier='nodivider'><label class='center' for='inner-highlight-input'><ons-icon icon='fa-thumbs-down'></ons-icon>Nenhuma tarefa localizada</label></ons-list-item></ons-list-item></ons-list>");
                    retornoAcao(acao,false) ;
                }
                controle_mensagem_atualizar = 0;
            },
            error: function (e, erro) {

                showModal('hide');
                retornoAcao(acao,false) ;
            },
            dataType: 'json',
            async: true //Esperar retorno para continuar codigo
        });
    

}
/*
Funcao para tratar retorno de requisicao assincrona e realizar ação correta
 */
function retornoAcao(acao, retorno){
   // ons.notification.alert(retorno);
    if(acao == 'boletos') {
        view_boletos(retorno);
    }
    else if(acao == 'bilhetes'){
        view_bilhetes(retorno);
    }
    else if(acao == 'agenda'){
        view_agenda(retorno);
    }
}