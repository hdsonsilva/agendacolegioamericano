function view_detalhesnotas(retornos){
    var i ;
    var conteudo_lista = '';
    var retorno = retornos['notas'];
    //Alterando título do app
    
    $('#tituloApp').html("Notas e Frequência");
   console.log(retornos);
if(retornos['notas']){
    //Preenchendo a lista com cards
    for(i  in retorno){
        
        for(j in retorno[i]){
            if(retorno[i][j]['trimestre']){
                conteudo_lista += "<ons-card ><font class='font_tam1'>"+(retorno[i][j]['trimestre'])+"</font>";
                conteudo_lista += "<table width='100%'><tr><td width='50%'><font class='font_tam2'><span class='baloes_gray notification notification--material'>&nbsp;&nbsp;Valor: " + retorno[i][j]['distribuido']+"&nbsp;&nbsp;</span></font></td>";
                conteudo_lista += "<td width='50%' align='right'><font class='font_tam2'><span class='baloes_blue notification notification--material'>&nbsp;&nbsp;Nota: " + retorno[i][j]['pontuacao']+"&nbsp;&nbsp;</span></font></td></tr></table>";
                //conteudo_lista += "<br><font class='font_tam2'>Média da turma: " + (retorno[i]['media'])+"</font>";
                //conteudo_lista += "<div class='align_direita'><ons-button class='minhalinhadigitavel'><ons-icon icon='fa-list'></ons-icon> Ver</ons-button> </div>";
                conteudo_lista += "</ons-card>";
            }
            
            else{
                conteudo_lista += "<ons-card ><font class='font_notastam1'>"+(retorno[i][j]['atividade'])+"</font>";
                conteudo_lista += "<br><div><font class='font_notastam2'>Data: " + retorno[i][j]['data']+"</font></div>";
                conteudo_lista += "<table width='100%'><tr><td width='50%'><font class='font_notastam2'><span class='baloes_gray notification notification--material'>&nbsp;&nbsp;Valor: " + retorno[i][j]['valor']+"&nbsp;&nbsp;</span></font></td>";
                conteudo_lista += "<td width='50%' align='right'><font class='font_notastam2'><span class='baloes_blue notification notification--material'>&nbsp;&nbsp;Nota: " + retorno[i][j]['nota']+"&nbsp;&nbsp;</span></font></td></tr></table>";
                
                //conteudo_lista += "<br><font class='font_tam2'>Média da turma: " + (retorno[i]['media'])+"</font>";
                //conteudo_lista += "<div class='align_direita'><ons-button class='minhalinhadigitavel'><ons-icon icon='fa-list'></ons-icon> Ver</ons-button> </div>";
                conteudo_lista += "</ons-card>";   
            }   
        }
    }
    conteudo_lista += "<ons-card ><font class='font_tam1'>Total Geral</font>";
    conteudo_lista += "<br><table width='100%'><tr><td width='50%'><font class='font_tam2'><span class='baloes_gray notification notification--material'>&nbsp;&nbsp;Valor: " + retornos['totais']['totais']+"&nbsp;&nbsp;</span></font></td>";
    conteudo_lista += "<td width='50%' align='right'><font class='font_tam2'><span class='baloes_blue notification notification--material'>&nbsp;&nbsp;Nota: " + retornos['totais']['pontuacao']+"&nbsp;&nbsp;</span></font></td></tr></table>";
    //conteudo_lista += "<br><font class='font_tam2'>Média da turma: " + (retorno[i]['media'])+"</font>";
    //conteudo_lista += "<div class='align_direita'><ons-button class='minhalinhadigitavel'><ons-icon icon='fa-list'></ons-icon> Ver</ons-button> </div>";
    conteudo_lista += "</ons-card>";
    //Exibindo os boletos
    $('#pageDetalhesNotasItens').html($('#pageDetalhesNotasItens').html()+conteudo_lista);

    
}
else{
    
    conteudo_lista += "<ons-card><font class='font_tam1'>Nenhuma informação encontrada</font></ons-card>";
    $('#pageDetalhesNotasItens').html($('#pageDetalhesNotasItens').html()+conteudo_lista);
}
}
