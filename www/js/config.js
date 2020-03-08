var server1 = 'https://adx.doctum.edu.br/adx/unidades/';
var server = "https://adx.doctum.edu.br/adx/unidades/";

//Nome do Aplicativo
var appName = 'Agenda Colégio Americano' ;

//URL AUTENTICACAO
var url_auth =  'fer/apitoken/cria_token.php';

var server_action = server + 'testeretorno.php';

var idonesignal = "1d5f8556-9c36-4f2e-8367-8cc21d12ae1d";
var debug = 0 ;

var controle_mensagem_atualizar = 1;

//Complemento para ser usado nos servicos chamados via GET
var complemento = 'todos';

localStorage.setItem('app_timeverify_auth', 180000);
localStorage.setItem('idonesignal', idonesignal);
localStorage.setItem('periodoletivo', '2020');