function esqueceusenha(unidade, username){

        
      $.ajax({
        type: 'POST',
        timeout: 15000,
         url : server1 +unidade + '/alteraSenhaExterno/trata_ajax_senha_externo.php',
        cache: false,
        data: {
          'login'  : username,
          'unidade'  : unidade ,
          'requisicao'    : 'solicita_troca_senha'
        },
        success:function(ret){
          //Se retornar um token valido de acesso
         if(ret.length > 200){
                    // houve um erro e foi exibido o html inteiro da solicitação
                    alert("Houve um erro ao realizar sua solicitação, tente novamente em instantes.");
                    
        }
        else{
            ons.notification.alert(ret);

            setTimeout(function(){
              window.location.href = './index.html';

              }
              ,5000);
        }
          
        },
        error: function (e){
          ons.notification.toast('Erro ao conectar. Verifique sua conexão.', {timeout: 2000});
          $('#button').show();
          $('#progress').hide();
        },
        dataType:'html',
        async: true
    }); 


}

function cadastro(unidade, usuario, senha, foto, app_){
      console.log(unidade);
        var username = usuario ;
        var password = senha ;
        var ok = 0 ;  
        
            

            $.ajax({
              type: 'POST',
              url : server1 + unidade + '/' + url_auth,
              cache: false,
              timeout: 15000,
              data: {
                'usuario'  : username,
                'senha'  : password,
                'action'    : 'LOGIN'
              },
              success:function(ret){
                //Se retornar um token valido de acesso
                if(debug == 1){
                  console.log(ret);
                }

                //Localizou token... fez login
                if(ret.token){
                  auth_check  = 1 ;
                  
                  var usuarios = new Array();
                  var confere_insercao = 0 ;
                  var codigo = 1 ;
                  var msg = '';
                  dados = localStorage.getItem('usuarios_salvos');

                  //Se já existirem usuarios salvos
                  if(dados){

                    //Salvando os dados no array usuario
                    usuarios = JSON.parse(dados);
                    
                    for(i in usuarios){
                      console.log('verificando '+usuarios[i]['usuario']);
                      if(usuarios[i]['usuario'] == username){
                        confere_insercao = 1 ;
                      }

                      codigo = usuarios[i]['codigo'];
                    
                    }
                    
                    codigo = parseInt(codigo) + 1 ;
                    

                  }

                  if(confere_insercao == 1 ){
                      
                      msg = 'Usuário já existe. Remova os usuários e tente novamente.';
                      $('#progress').hide();
                      ons.notification.toast(msg, {timeout: 3000});
                      $('#button').show();
                    
                  }
                  else{

                    //Inserindo os dados, existindo ou nao usuarios já armazados. Somente adiciona se nao existir.
                    var novo =  {
                                  'codigo' : codigo, 
                                  'nome':ret.nome_aluno,
                                  'unidade': unidade, 
                                  'usuario' : ret.ra, 
                                  'senha' : password,
                                  'foto'  : foto
                                };  
                    
                    
                    usuarios.push(novo);
                    
                    localStorage.setItem('usuarios_salvos', JSON.stringify(usuarios));

                    msg = 'Usuário inserido com sucesso.';

                    /*Inserindo foto se houver*/
                    if(foto){
                      
                      $.ajax({
                        type: 'POST',
                        url : server1 + unidade + '/' + url_upload_foto + '?apitoken='+ ret.token+'&periodo_letivo='+localStorage.getItem('periodoletivo'),
                        cache: false,
                        timeout: 30000,
                        dataType:'json',
                        async: true,
                        data: {
                          'imagem'  : foto
                        },
                        success:function(ret){
                                  $('#progress').hide();
                                  ons.notification.toast(msg, {timeout: 3000});
                                  $('#button').show();
                                  setTimeout(direcionar, 1000, './index.html');
                                }
                        });
                    }
                    //Se não houver continua  o login
                    else{
                      $('#progress').hide();
                      ons.notification.toast(msg, {timeout: 3000});
                      $('#button').show();
                      setTimeout(direcionar, 1000, './index.html');
                    }

                    
                  }
                  
                    
                  

                }
                else{
                  
                  msg = 'Erro ao efetuar login.';

                  auth_check = -1 ;

                  $('#progress').hide();
                  ons.notification.toast(msg, {timeout: 3000});
                  $('#button').show();
                
                }
                
              
              },
              error:function(e){
                $('#progress').hide();
                //alert(JSON.stringify(e));
                ons.notification.toast('Falha ao conectar. Verifique sua conexão.', {timeout: 3000});
                $('#button').show();
              },
              dataType:'json',
              async: true
          }); 

        return ok ;
}

function exibir_usuarios(usuarios){
  var item = '' ;
  var foto = '';
  var j ;
  
  j = 0 ;
  for(i in usuarios){
      
    if(usuarios[i]['foto']){
      foto = usuarios[i]['foto'];
    }
    else{
      foto = './img/quad.png';
    }
    item+= "<ons-list-item modifier='chevron' tappable class='1usuario' codigo='"+(usuarios[i]['codigo'])+"'><div class='left'><img class='list-item__thumbnail' src='"+foto+"'></div><div class='center'>";
    item+= "    <span class='list-item__title font_users'>"+(usuarios[i]['nome'])+"</span><span class='list-item__subtitle'>"+(usuarios[i]['usuario'])+"</span></div>";
    item+= "</ons-list-item>";
    j++;
  }
  if(j > 1){
    item = "<ons-list-header style='text-align:center;font-size:12pt'> Usuário(s)</ons-list-header><hr>" + item;
  }
  else{
    item = "<ons-list-header style='text-align:center;font-size:12pt'> Usuário</ons-list-header><hr>" + item;
  }

  $('#exibicao_usuarios').html(item);
}