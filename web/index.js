
//Tudo que está aqui dentro será executado automatico
$(document).ready(function(){
	$('#dataLancamento').mask('00/00/0000');
	$('#dataLancamento').datepicker();
});


function adicionarItemTabela(){
	with(document.forms[0]){
		let corpoTabela = $("#jogos tr");
		
		$.each(corpoTabela, function(index, value){
			console.log($(value).text());
		});
		
	}
}
