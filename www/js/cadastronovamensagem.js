function cadastronovamensagem(msg){
      
            $.ajax({
              type: 'POST',
              url : server1 + localStorage.getItem('unidade') + '/' + 'alunos/api/mural/cadastra-recados/?apitoken='+localStorage.getItem('token')+"&periodo_letivo="+localStorage.getItem('periodoletivo'),
              cache: false,
              timeout: 10000,
              data: {
                'texto'  : removerAcentos(msg),
                'aluno'  : localStorage.getItem('login_username'),
                'codigoRecado' : ''
              },
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
                    ons.notification.toast('Recado enviado com sucesso.', {timeout: 1500});
                    setTimeout(direcionar, 2000, './app.html?objeto=bilhetes');
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