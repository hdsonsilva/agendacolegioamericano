function cadastronovamensagem(msg, tipomsg, valor, retorno){
            
            let dados = new Array();
            if(tipomsg == 'dep'){
              dados = {
                mensagem  : removerAcentos(msg),
                aluno  : localStorage.getItem('login_username'),
                departamentoAlunoMensagem : valor,
                statusMensagem : 'enviado_aluno'
              }  
            }
            else{
              dados = {
                mensagem  : removerAcentos(msg),
                aluno  : localStorage.getItem('login_username'),
                docenteAlunoSelecionado : valor,
                statusMensagem : 'enviado_aluno'
              }  
            }
            $.ajax({
              type: 'POST',
              url : server1 + localStorage.getItem('unidade') + '/' + 'alunos/api/mural/cadastra-recados/?apitoken='+localStorage.getItem('token')+"&periodo_letivo="+localStorage.getItem('periodoletivo'),
              cache: false,
              timeout: 10000,
              data: dados,
              beforeSend: function (e) {
                  //Colocando para transformar e tratar o resultado todo como um resultado iso
                  e.overrideMimeType("text/plain;charset=iso-8859-1");
                  //Sempre exive modal de busca de dados
                  showModal('show');
              },
              success:function(ret){
                showModal('hide');
                //Se retornar um token valido de acesso
                
                console.log(ret);
                //Localizou token... fez login
                if(ret.status == 'ok'){
                    //ons.notification.toast('Recado enviado com sucesso.', {timeout: 1500});
                    //setTimeout(direcionar, 2000, './app.html?objeto=bilhetes');
                    dados['msg'] = msg;
                    dados['hora'] = 'Agora';
                    dados['de'] = '';
                    dados['visto'] = '';
                    if(retorno == 'individual'){
                      ons.notification.toast('Mensagem Enviada com sucesso!', {timeout: 1500});
                      $('#mensagemnovorecadoindividual').val('');
                      $('#destinatario').val('');
                    }
                    else{

                      exibeMsg(dados,'aluno');
                      $('#mensagemnovorecado').val('');
                      $("#mensagensdetalhe").animate({ scrollTop: 10000 }, 1000);
                    }
                  }
                  else{
                    ons.notification.toast('Ocorreu algum erro.', {timeout: 1500});
                    
                  }
              
              },
              error:function(e){
                showModal('hide');
                $('#progress').hide();
                ons.notification.toast('Falha ao conectar. Verifique sua conexão.', {timeout: 3000});
                $('#button').show();
              },
              dataType:'json',
              async: true
          }); 

        return true ;
}
function marcarLidoAluno(tipomsg, valor){
            
            let dados = new Array();
            if(tipomsg == 'dep'){
              dados = {
                
                statusDepartamento : valor,
                statusRemetente : 'alunos',
                edicaoDeDados: 'editaDados'
              }  
            }
            else{
              dados = {
                
                statusDocente : valor,
                statusRemetente : 'alunos',
                edicaoDeDados: 'editaDados'
              }  
            }
            $.ajax({
              type: 'POST',
              url : server1 + localStorage.getItem('unidade') + '/' + 'alunos/api/mural/cadastra-recados/?apitoken='+localStorage.getItem('token')+"&periodo_letivo="+localStorage.getItem('periodoletivo'),
              cache: false,
              timeout: 10000,
              data: dados,
              beforeSend: function (e) {
                  //Colocando para transformar e tratar o resultado todo como um resultado iso
                  e.overrideMimeType("text/plain;charset=iso-8859-1");
                  //Sempre exive modal de busca de dados
                  showModal('show');
              },
              success:function(ret){
                showModal('hide');
                //Se retornar um token valido de acesso
                
                console.log(ret);
                //Localizou token... fez login
                if(ret.status == 'ok'){
                    
                    
                  }
                  else{
                    
                    
                  }
              
              },
              error:function(e){
                showModal('hide');
                $('#progress').hide();
                ons.notification.toast('Falha ao conectar. Verifique sua conexão.', {timeout: 3000});
                $('#button').show();
              },
              dataType:'json',
              async: true
          }); 

        return true ;
}
function exibir_usuarios(usuarios){
  var item = '' ;
  item += "<ons-list-header>Usuários Cadastrados:</ons-list-header>";
  for(i in usuarios){
    
    item+= "<ons-list-item modifier='chevron' tappable class='1usuario' codigo='"+(usuarios[i]['codigo'])+"'><div class='left'><img class='list-item__thumbnail' src='https://placekitten.com/g/40/40'></div><div class='center'>";
    item+= "    <span class='list-item__title'>"+(usuarios[i]['nome'])+"</span><span class='list-item__subtitle'>"+(usuarios[i]['usuario'])+"</span></div>";
    item+= "</ons-list-item>";

  }

  $('#exibicao_usuarios').html(item);
}