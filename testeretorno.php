<?php
header('Content-Type: application/json');

if($_POST['action'] == 'boletos'){
    $boletos[0] = array(
        'Codigo' => '45443',
        'Parcela' => '1',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[1] = array(
        'Codigo' => '45444',
        'Parcela' => '2',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[2] = array(
        'Codigo' => '45445',
        'Parcela' => '3',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[3] = array(
        'Codigo' => '45445',
        'Parcela' => '4',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[4] = array(
        'Codigo' => '45445',
        'Parcela' => '5',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[5] = array(
        'Codigo' => '45445',
        'Parcela' => '6',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    echo json_encode(  $boletos  );
}

if($_POST['action'] == 'bilhetes'){
    $bilhete[0] = array(
        'Data' => '08/02/2020',
        'Titulo' => 'Sejam Bem vindos',
        'Mensagem' => "<img src='https://static.todamateria.com.br/upload/be/mv/bem-vindo-benvindo-og.jpg' width='100%'>Estamos aqui para agradecer a você por ter nos escolhido.<br><br>Fique tranquilo, aqui seu filho estará seguro. Se precisar nos mandar um recado, use o botão acima para nos comunicar o que achar pertinente.",
        "Lido" => "Nao"
    );

    $bilhete[1] = array(
        'Data' => '10/02/2020',
        'Titulo' => 'Uma escola sensacional',
        'Mensagem' => "<img src='https://http2.mlstatic.com/os-incriveis-2-bonecos-familia-incrivel-completa-D_NQ_NP_885059-MLB31670263560_082019-F.jpg' width='100%'>Temos uma equipe sensacional para receber você.<br><br>Seu filho é incrível e nós estamos aqui para ajudá-lo a se tornar melhor ainda.",
        "Lido" => "Sim"

    );

    echo json_encode( $bilhete);
}

if($_POST['action'] == 'agenda'){
    $bilhete[0] = array(
        'Data' => '01/02/2020',
        
        'Mensagem' => "O dia foi animado! <br>Dia de Robótica, seu filho se desenvolveu bem.<br>Todas as atividades foram cumpridas no prazo<br><br>Estamos enviando tarefa: Livro de Português, página 45.<br><br><img src='https://i.ytimg.com/vi/4qfkzsGuKiw/maxresdefault.jpg' width='100%'>"
    );
    $bilhete[1] = array(
        'Data' => '31/01/2020',
        
        'Mensagem' => "Seu filho hoje se alimentou bem. <br>Brincou o tempo todo.<br>Tudo <br>Iogurte: Comeu bem.<br><br>Fez cocô direitinho.<br><br> Aprendeu a usar o piniquinho para fazer xixi."

    );
    echo json_encode( $bilhete);
}

?>