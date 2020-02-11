function controle(event){
 	//Se estiver na Home
    if(event.target.matches('#homePage')){
      view_home('home');
    }

    //Se estiver na pagina Financeiro
    else if(event.target.matches('#pageFinanceiro')){
      buscaAcoes('boletos');
    }

    //Se estiver na pagina Academico
    else if(event.target.matches('#pageNotas')){
      view_academico('acad');
    }

     //Se estiver na pagina Bilhetes
    else if(event.target.matches('#pageBilhetes')){
      buscaAcoes('bilhetes');
    }
    //Se estiver na pagina Agenda
    else if(event.target.matches('#pageAgenda')){
      buscaAcoes('agenda');
    }
   
}