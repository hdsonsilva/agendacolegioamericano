function cadastro(unidade, usuario, senha, app_){

        var username = usuario ;
        var password = senha ;
        var ok = 0 ;  
        
            

            $.ajax({
              type: 'POST',
              url : localStorage.getItem('server_auth'),
              cache: false,
              data: {
                'username'  : username,
                'password'  : password,
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

                    //Salvando os ados no array usuario
                    usuarios = JSON.parse(dados);
                    
                    for(i in usuarios){
                      console.log('verificando '+usuarios[i]['usuario']);
                      if(usuarios[i]['usuario'] == ret.usuario){
                        confere_insercao = 1 ;
                      }

                      codigo = usuarios[i]['codigo'];
                    
                    }
                    
                    codigo = parseInt(codigo) + 1 ;
                    

                  }

                  if(confere_insercao == 1 ){
                      
                      msg = 'Usuário já existe.';
                    
                  }
                  else{

                    //Inserindo os dados, existindo ou nao usuarios já armazados. Somente adiciona se nao existir.
                    var novo =  {
                                  'codigo' : codigo, 
                                  'nome':ret.nome,
                                  'unidade': unidade, 
                                  'usuario' : ret.usuario, 
                                  'senha' : password
                                };  
                    
                    
                    usuarios.push(novo);
                    
                    console.log('inserindo novo usuario:');
                    
                    localStorage.setItem('usuarios_salvos', JSON.stringify(usuarios));
                    console.log(usuarios);

                    msg = 'Usuário inserido com sucesso.';
                  }

                  setTimeout(direcionar, 3000, './index.html');
                  
                    
                  

                }
                else{
                  
                  msg = 'Erro ao efetuar login.';

                  auth_check = -1 ;
                
                }
                $('#progress').hide();
                ons.notification.toast(msg, {timeout: 3000});
                $('#button').show();
              
              },
              dataType:'json',
              async: true
          }); 

        return ok ;
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