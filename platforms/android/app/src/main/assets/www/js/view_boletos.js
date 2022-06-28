function view_boletos(retornos){
    var i ;
    var conteudo_lista = '';
    var retorno = retornos['boletos'];
    var anterior, class_venc, realcar_venc ;
    var datas, ano, data_cada ;
    datas = new Date;
    ano = datas.getYear() + 1899;

    //Alterando título do app
    
    $('#tituloApp').html("Financeiro");

conteudo_lista += "<ons-card><font class='font_tam1'>Imposto de Renda</font>";
conteudo_lista += "<div class='right align_direita'><ons-button class='gerarirrf' valor='Gerar' idpopover='' ><ons-icon icon='fa-print'></ons-icon> Gerar </ons-button> </div>";
conteudo_lista += "</ons-card>";

if(retornos['boletos'].length > 0 ){
    retorno.reverse();
    //Preenchendo a lista com cards
    for(i  in retorno){

        tmp = retorno[i]['vencimento'].split("/");
        data_tmp = tmp[1]+"/"+tmp[0]+"/"+tmp[2];
        data_cada = new Date(data_tmp);

        realcar_venc = (datas.getMonth() == data_cada.getMonth() && datas.getYear() == data_cada.getYear()) ? "style='border: 5px solid #4169E1;'" : '' ;
        class_venc = (data_cada < datas && realcar_venc == '') ? 'baloes_red' : (realcar_venc == '' ? 'baloes_orange' : 'baloes_blue');
        texto_venc = (data_cada < datas && realcar_venc == '') ? 'Em atraso' : (realcar_venc == '' ? 'Em aberto' : 'Parcela Atual');
  
        conteudo_lista += "<ons-card "+realcar_venc+"><font class='font_tam3'>Parcela "+(retorno[i]['parcela'])+".::. Vencimento: "+(retorno[i]['vencimento'])+"</font>";
        conteudo_lista += "<br><hr>";
        if(retorno[i]['pagamento'] != null){
            conteudo_lista += "<br><span class='notification notification--material baloes_green'>&nbsp;&nbsp;Pago&nbsp;&nbsp;</span>"
        }
        else{
            conteudo_lista += "<br><span class='notification notification--material "+class_venc+"' >&nbsp;&nbsp;"+texto_venc+"&nbsp;&nbsp;</span>"
        }
        conteudo_lista += "<br><font class='font_tam2'>Emissao: " + retorno[i]['emissao']+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Valor: " + retorno[i]['valor_emitido']+"</font>";

        if(retorno[i]['pagamento'] != null){
            conteudo_lista += "<br><font class='font_tam2'>Pagamento: " + (retorno[i]['pagamento'] == null ? "" : retorno[i]['pagamento'])+"</font>";
            conteudo_lista += "<br><font class='font_tam2'>Valor Pago: " + (retorno[i]['pagamento'] == null ? "" : retorno[i]['valor_pago'])+"</font>";
        }
        if(retorno[i]['pagamento'] == null){
            conteudo_lista += "<div class='right align_direita'><ons-button class='minhalinhadigitavel' valor='"+(retorno[i]['linha_digitavel'])+"' idpopover='"+(retorno[i]['codigo'])+"' ><ons-icon icon='fa-barcode'></ons-icon></ons-button> <ons-button class='meuboleto' valor='"+(server1+localStorage.getItem('unidade'))+"/"+(retorno[i]['url_impressao'])+"'><ons-icon icon='fa-print'></ons-icon></ons-button></div>";
        }
          

        conteudo_lista += "</ons-card>";
    }
    //Exibindo os boletos
    $('#pageFinanceiroList').html($('#pageFinanceiroList').html()+conteudo_lista);
    //Adicionando o click para exibir os boletos
    $('.meuboleto').click(function(){
        abrirNavigator($(this).attr('valor'),'forcar');
    });

    $('.gerarirrf').click(function(){
       abrirNavigator(server1+localStorage.getItem('unidade')+"/webServices/buscaquitacaoanualdebitowsadx.php?ano="+ano+"&matricula="+localStorage.getItem('login_username')+"&unidade=adx_"+localStorage.getItem('unidade'), 'forcar'); 
    });
    //Exibindo a linha digitavel daquele boleto
    $('.minhalinhadigitavel').click(function(){
        
        $('#conteudodialog').html($(this).attr('valor'));
        $('#my-dialog').show(500);

    });
}
else{
    conteudo_lista += "<ons-card><font class='font_tam1'>Nenhuma informação encontrada</font></ons-card>";
    $('#pageFinanceiroList').html($('#pageFinanceiroList').html()+conteudo_lista);
}

}
