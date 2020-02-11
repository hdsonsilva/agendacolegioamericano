var server1 = 'https://sicof.doctum.edu.br/sicof/webservice/';
var server = "https://sicof.doctum.edu.br/";

//URL AUTENTICACAO
var server_auth = server1 + 'logintoken.php';

var server_action = server + 'testeretorno.php';

var idonesignal = "4c03d205-c832-43ba-b816-c850b8773f04";
var debug = 0 ; 


var controle_mensagem_atualizar = 1;

localStorage.setItem('app_timeverify_auth', 5000);
localStorage.setItem('server_auth', server_auth);
localStorage.setItem('idonesignal', idonesignal);