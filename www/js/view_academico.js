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
  		class_cor_nota =  retorno[i]['cor'] == 'danger' ? 'cor_nota_vermelha' : 'cor_nota_azul' ;
        conteudo_lista += "<ons-card class='click_detalhe_nota' valor='"+(i)+"'><font class='font_tam1'>"+(retorno[i]['materia'])+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Faltas: " + retorno[i]['faltas']+"</font>";
        conteudo_lista += "<br><font class='font_tam2 "+class_cor_nota+"'>Nota: " + retorno[i]['nota']+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Média da turma: " + (retorno[i]['media'])+"</font>";
        conteudo_lista += "<div class='align_direita'><ons-button class='minhalinhadigitavel'><ons-icon icon='fa-list'></ons-icon> Ver</ons-button> </div>";
        conteudo_lista += "</ons-card>";
    }
    //Exibindo os boletos
    $('#pageNotasList').html($('#pageNotasList').html()+conteudo_lista);

    //Adicionando evento click para detalhar
    $('.click_detalhe_nota').click(function(){
    	ons.notification.toast('Detalhamento ainda não disponível.', {timeout: 3000});
    });
    
}
else{
    conteudo_lista += "<ons-card><font class='font_tam1'>Nenhuma informação encontrada</font></ons-card>";
    $('#pageNotasList').html($('#pageNotasList').html()+conteudo_lista);
}
}
