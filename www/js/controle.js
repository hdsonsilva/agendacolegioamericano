function controle(event){
 	
    var tipoenvio = 'GET';
    
    //Se estiver na Home
    if( event.target.matches('#homePage') ){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo'),
        'offset' : localStorage.getItem('offset_avisos')
      }
      buscaAcoes("alunos/api/mural/ver-avisos", dados, tipoenvio);
      
    }

    //Se estiver na pagina Financeiro
    else if(event.target.matches('#pageFinanceiro')){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo')
      }
      buscaAcoes("alunos/api/financeiro/boletos", dados, tipoenvio);
    }

    
    //Se estiver na pagina Academico
    else if(event.target.matches('#pageNotas')){
      view_academico('academico');
    }

    

     //Se estiver na pagina Bilhetes
    else if(event.target.matches('#pageBilhetes')){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo'),
        'offset' : localStorage.getItem('offset_avisos')
      }
      buscaAcoes('alunos/api/mural/ver-recados',dados,tipoenvio);
    }
    

    //Se estiver na pagina Agenda
    else if(event.target.matches('#pageAgenda')){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo'),
        'offset' : localStorage.getItem('offset_avisos')
      }
      buscaAcoes('alunos/api/mural/ver-agenda',dados,tipoenvio);
    }
   
}