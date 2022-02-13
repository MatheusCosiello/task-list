// pegar informação do input
// retornar a informação na div

const inputTarefa = document.querySelector(".container-task-input");    // input entrada de novas task
const botaoAddTarefa = document.querySelector(".button-task-add");      // botão de adicionar novas tasks
const taskList = document.querySelector("task-list");                   // locas das tarefas

botaoAddTarefa.addEventListener("click", function (e) {                 // ação do botao enviar task
    e.preventDefault();                                                 // previni atualização da pagina ao clicar
    const inputTarefaValue = inputTarefa.value;                         // pega valor do input e salva na memorias
   
});
