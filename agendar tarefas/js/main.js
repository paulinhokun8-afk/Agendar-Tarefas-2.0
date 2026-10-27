$(function(){

    $('select').formSelect();

    $("#botao").click(inserirTarefa);

    $(".campoTitulo").keyup(function(){
        $(".erroTitulo").text("");
    });

    $(".campoObs").keyup(function(){
        $(".erroObs").text("");
    });

});

function inserirTarefa(){
    var tabela =$(".tarefas").find("tbody")
   var campoTitulo = $(".campoTitulo").val();
    var campoObs = $(".campoObs").val();
    var campoPrioridade = $(".campoPrioridade").val();

    $(".erroTitulo").text("");
    $(".erroObs").text("");

    if (campoTitulo.trim() === "") {
        $(".erroTitulo").text("* Campo obrigatório");
    }

    if (campoObs.trim() === "") {
        $(".erroObs").text("* Campo obrigatório");
    }

     if (campoTitulo.trim() === "" || campoObs.trim() === "") {
        return;
    }

     if (campoTitulo.trim() === "" || campoObs.trim() === "") {
        alert("Preencha o título e a observação antes de cadastrar a tarefa.");
        return;
    }

    var linha = funLinha(campoTitulo, campoObs, campoPrioridade);
    linha.find(".botaoDeletar").click(deletaLinha);
    linha.find(".botaoConcluir").click(concluirTarefa);
    tabela.append(linha);

    $(".campoTitulo").val("");

    $(".campoObs").val("");

    



}
function funLinha(campoTitulo, campoObs, campoPrioridade) {

    var linha = $("<tr>");

    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaObs = $("<td>").text(campoObs);
    var colunaPrioridade = $("<td>").text(campoPrioridade);
    var colunaConcluir = $("<td>");
    var colunaDelete = $("<td>");

    
    var bConcluir = $("<a>").attr("href", "#").addClass("botaoConcluir");
    var iconeConcluir = $("<i>").addClass("material-icons").text("check");
    bConcluir.append(iconeConcluir);
    colunaConcluir.append(bConcluir);

    
    var bDeletar = $("<a>").attr("href", "#").addClass("botaoDeletar");
    var icone = $("<i>").addClass("material-icons").text("delete");
    bDeletar.append(icone);
    colunaDelete.append(bDeletar);

    linha.append(colunaTarefa);
    linha.append(colunaObs);
    linha.append(colunaPrioridade);
    linha.append(colunaConcluir);
    linha.append(colunaDelete);

    return linha;
}

function deletaLinha(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
}

function concluirTarefa(event) {
    event.preventDefault();

    $(this).closest("tr").toggleClass("concluida");

    alert("Status da tarefa atualizado!");
}

$(document).on("click", ".botaoDeletar", function(event) {
    event.preventDefault();

    if (confirm("Tem certeza de que deseja apagar esta tarefa?")) {
        $(this).closest("tr").remove();
    }
});
