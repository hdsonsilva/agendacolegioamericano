function view_home(retornos){
    let imagem = '';

    if(localStorage.getItem('foto')){
        imagem = "<img src='"+localStorage.getItem('foto')+"' width='40px'>";
    }
    //Alterando título do app
    $('#tituloApp').html(appName);
    $('#idNome').html(imagem+' '+localStorage.getItem("login_nome"));

    var i ;
    var conteudo_lista = '';
     
    var retorno = retornos['murais'];
    var i ;
    var conteudo_lista = '';
    var imagem_view = '';
 if(retornos['murais']){     
    //Preenchendo a lista com cards
    for(i  in retorno){

        conteudo_lista += "<ons-card "+(retorno[i]['url_destino'] ? "class='clicavelhome' valor='"+(retorno[i]['url_destino'])+"'" : (retorno[i]['arquivo'] ? "class='imagemview' loading='lazy' imagem='"+(retorno[i]['arquivo'])+"'" : " ")  )+"><font class='font_tam1'>"+(retorno[i]['data_inicio'])+" - "+(retorno[i]['assunto'])+"</font>";
        conteudo_lista += "<br><br>";
        conteudo_lista += "<font class='font_text'>"+(retorno[i]['arquivo'] ? "<img width='100%' src='"+(retorno[i]['arquivo']).replace("http://", "https://")+"'><br>" : "")+quebraLinha(retorno[i]['mensagem'])+"</font>";
        conteudo_lista += "</ons-card>";
    }


    $('#homePageList').html(conteudo_lista);

    $('.clicavelhome').click(function(){
        
        abrirURL($(this).attr('valor'), 1);
    });

    $('.imagemview').click(function(){
             
             imagem_view = $(this).attr('imagem');
            document.addEventListener('deviceready', function () {
                //PhotoViewer.show($(this).attr('url'));
               
                PhotoViewer.show(imagem_view,'',{share:true,closeButton: true,copyToReference: true, headers: '',piccasoOptions: { }});
            });
    });
}
else{
    conteudo_lista += "<ons-card><font class='font_tam1'>Sem avisos</font></ons-card>";
    $('#homePageList').html($('#homePageList').html()+conteudo_lista);
}

}
