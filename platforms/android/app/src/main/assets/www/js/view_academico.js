function view_academico(retornos){
    var i ;
    var conteudo_lista = '';
    var retorno = retornos['notas'];
    //Alterando título do app
    
    $('#tituloApp').html("Notas e Frequência");
   console.log(retornos);
if(retornos['notas']){
    //Preenchendo a lista com cards
    for(i  in retorno){
        class_cor_nota =  retorno[i]['cor'] == 'danger' ? 'baloes_red' : 'baloes_blue' ;
        conteudo_lista += "<ons-card class='click_detalhe_nota' valor='"+(i)+"'><font class='font_tam1'>"+(retorno[i]['materia'])+"</font>";
        conteudo_lista += "<br><hr>";
        conteudo_lista += "<br><span class='notification notification--material "+class_cor_nota+"' >&nbsp;&nbsp;Nota: " + retorno[i]['nota']+"&nbsp;&nbsp;</span>";
        conteudo_lista += "&nbsp;&nbsp;<span class='notification notification--material baloes_gray'>&nbsp;&nbsp;<font class='font_tam2'>Faltas: " + retorno[i]['faltas']+"&nbsp;&nbsp;</font></span><br><br>";
        /*conteudo_lista += "<br><font class='font_tam2'>Média da turma: " + (retorno[i]['media'])+"</font>";*/
        conteudo_lista += "<div class='align_direita'><ons-button class='minhalinhadigitavel'><ons-icon icon='fa-list'></ons-icon> Detalhar</ons-button> </div>";
        conteudo_lista += "</ons-card>";
    }
    //Exibindo os boletos
    $('#pageNotasList').html($('#pageNotasList').html()+conteudo_lista);

    //Adicionando evento click para detalhar
    $('.click_detalhe_nota').click(function(){

        var myNavigator = document.getElementById('myNavigator');
        myNavigator.pushPage('html/page_detalhesnota.html');

        //Se estiver na pagina detalhamento de botas
    
          dados = {
            'apitoken': localStorage.getItem('token'),
            'periodo_letivo': localStorage.getItem('periodoletivo')
          }
          if(complemento == ''){
            agendacontrole = 0 ;
            $('#pageAgendaList').html('');
            $('#pageAgendaListErro').html('');
          }
          //Busca as notas detalhadas.. o tratamento é no view_detalhamento
          buscaAcoes('alunos/api/notas/ver-materia/'+$(this).attr('valor')+"/",dados,'GET');
         
        
        /* Aguardando carregar a pagina para configurar os eventos após os elementos estarem carregados na tela*/
        setTimeout(function(){
            /* Acao voltar para o app principal */
            $('#bt_voltar_app').click(function(){
                window.location.href = './app.html?objeto=academico';
            });

        }, 1000);
    
    });   
}
else{
    conteudo_lista += "<ons-card><font class='font_tam1'>Nenhuma informação encontrada</font></ons-card>";
    $('#pageNotasList').html($('#pageNotasList').html()+conteudo_lista);
}
}
