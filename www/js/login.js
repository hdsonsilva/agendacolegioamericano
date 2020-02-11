function login(usuario, senha, app_, unidade, nome){

        var username = usuario ;
        var password = senha ;
        var ok = 0 ;  
                      
        localStorage.setItem('login_username', username);
        localStorage.setItem('login_password', password);
        localStorage.setItem('login_nome', nome);
        

        console.log(password);
      

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
          
          if(ret.token){
            auth_check  = 1 ;
            
            if(app_ == 'index')
              ons.notification.toast('Login efetuado com sucesso.', {timeout: 3000});
             //Armazenando o token
            localStorage.setItem('token',ret.token);
            setTimeout(direcionar, 1500, './app.html');
            
            
            ok  = 1 ;

          }
          else{
            
            if(app_ == 'app'){
              window.location.href = './index.html';
            }

            auth_check = -1 ;
          
          }
          //Se o login der certo, chama a funcao acoes novamente,
          //para carregar a lista de tarefas do usuarios, caso tenha dado falha antes
          //buscaAcoes();
        
        },
        dataType:'json',
        async: true
    }); 

    return ok ;
}


function deslogar(){
        showModal('show');
        document.addEventListener('deviceready', function () {
          
          window.plugins.OneSignal.deleteTag("user");
        
        }, false);

        
        setTimeout(direcionar, 2000, './index.html');

        return false ;

    }



function buscarDadosUsuario(codigo){

  usuarios = JSON.parse(localStorage.getItem('usuarios_salvos'));
  for(i in usuarios){
    if(usuarios[i]['codigo'] == codigo){
      console.log(codigo);
      console.log(usuarios[i]['codigo']);
      localStorage.setItem('login_username',  usuarios[i]['usuario']);
      localStorage.setItem('login_password',  usuarios[i]['senha']);
      localStorage.setItem('login_unidade',   usuarios[i]['unidade']);
      localStorage.setItem('login_nome',      usuarios[i]['nome']);
    }
  }
}