var server1 = 'https://adx.doctum.edu.br/adx/unidades/';
var server = "https://adx.doctum.edu.br/adx/unidades/";

//Nome do Aplicativo
var appName = 'Agenda Escola Liber' ;

//URL AUTENTICACAO
var url_auth =  'fer/apitoken/cria_token.php';

var server_action = server + 'testeretorno.php';

var idonesignal = "4c03d205-c832-43ba-b816-c850b8773f04";
var debug = 0 ;

var controle_mensagem_atualizar = 1;

//Complemento para ser usado nos servicos chamados via GET
var complemento = 'todos';

localStorage.setItem('app_timeverify_auth', 180000);
localStorage.setItem('idonesignal', idonesignal);
localStorage.setItem('periodoletivo', '2020');