var server1 = 'https://adx.doctum.edu.br/adx/unidades/';
var server = "https://adx.doctum.edu.br/adx/unidades/";
var server_base_foto = "https://adx.doctum.edu.br/hd2/fotosAlunos/"

// var server1 = 'http://192.168.10.240/user/sandro.junior/';
// var server =  'http://192.168.10.240/user/sandro.junior/';

var url_upload_foto = 'alunos/api/embarque/atualiza-foto' ;
//Nome do Aplicativo
var appName = 'Agenda Colégio Americano' ;

//URL AUTENTICACAO
var url_auth =  'fer/apitoken/cria_token.php';

var server_action = server + 'testeretorno.php';

var idonesignal = "1d5f8556-9c36-4f2e-8367-8cc21d12ae1d";
var debug = 0 ;

var controle_mensagem_atualizar = 1;

//Complemento para ser usado nos servicos chamados via GET
var complemento = '';

//Controle de paginacao agenda
var agendacontrole = 0 ;

//Controle de paginacao recados
var recadocontrole = 0 ;

var recadotipo = 'nao-lidos';

localStorage.setItem('app_timeverify_auth', 180000);
localStorage.setItem('idonesignal', idonesignal);

var Xmas = new Date();
var year = Xmas.getFullYear(); //Começamos sempre com o ano atual


if(!localStorage.getItem('periodoletivo')){
	localStorage.setItem('periodoletivo', year);
}

