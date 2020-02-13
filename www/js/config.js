var server1 = 'https://adx.doctum.edu.br/adx/unidades/';
var server = "https://adx.doctum.edu.br/adx/unidades/";

//URL AUTENTICACAO
var url_auth =  'fer/apitoken/cria_token.php';

var server_action = server + 'testeretorno.php';

var idonesignal = "1d5f8556-9c36-4f2e-8367-8cc21d12ae1d";
var debug = 0 ;

var servicos = new Array();


var controle_mensagem_atualizar = 1;

localStorage.setItem('app_timeverify_auth', 60000);
localStorage.setItem('idonesignal', idonesignal);
localStorage.setItem('periodoletivo', '2020');