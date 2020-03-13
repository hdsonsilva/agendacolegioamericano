function controle(event){
 	
    var tipoenvio = 'GET';
    
    //Se estiver na Home
    if( event.target.matches('#homePage') ){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo'),
        'offset' : localStorage.getItem('offset_avisos')
      }
      $('#homePageList').html('');
      buscaAcoes("alunos/api/mural/ver-avisos", dados, tipoenvio);
      
    }

    //Se estiver na pagina Financeiro
    else if(event.target.matches('#pageFinanceiro')){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo')
      }
      $('#pageFinanceiroList').html('');
      buscaAcoes("alunos/api/financeiro/boletos", dados, tipoenvio);
    }

    
    //Se estiver na pagina Academico
    else if(event.target.matches('#pageNotas')){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo'),
        'offset' : localStorage.getItem('offset_avisos')
      }
      $('#pageNotasList').html('');

      buscaAcoes('alunos/api/notas/ver-notas',dados,tipoenvio);
    }

     //Se estiver na pagina Bilhetes
    else if(event.target.matches('#pageBilhetes') ){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo'),
        'offset' : localStorage.getItem('offset_avisos')
      }
      if(complemento == ''){
        recadocontrole = 0 ;
        $('#pageBilhetesList').html('');
        $('#pageBilhetesListErro').html('');
      }
      buscaAcoes('alunos/api/mural/ver-recados',dados,tipoenvio);
    }
    //Se estiver na pagina Bilhetes, mas for recado enviado
    else if(event.target.matches('#pageBilhetesEnviado') ){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo'),
        'offset' : localStorage.getItem('offset_avisos')
      }
      $('#pageBilhetesList').html('');
      buscaAcoes('alunos/api/mural/historico-recados',dados,tipoenvio);
    }
    
    

    //Se estiver na pagina Agenda
    else if(event.target.matches('#pageAgenda')){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo'),
        'offset' : localStorage.getItem('offset_avisos')
      }
      if(complemento == ''){
        agendacontrole = 0 ;
        $('#pageAgendaList').html('');
        $('#pageAgendaListErro').html('');
      }
      buscaAcoes('alunos/api/mural/ver-agenda',dados,tipoenvio);
    }
   
}