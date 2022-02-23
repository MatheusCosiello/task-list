// pegar informação do input
// retornar a informação na div

const inputElement = document.querySelector(".container-task-input");    // input entrada de novas task
const addTaskButton = document.querySelector(".button-task-add");      // botão de adicionar novas tasks
const taskContainer = document.querySelector(".task-list");                   // locas das tarefas

const validateInput = () => inputElement.value.trim().length > 0;         // validando valor do input

// verifica se o valor do input é valido ou não

const handleAddtask = () => {
    const inputIsValid = validateInput();

    console.log(inputIsValid);

    if (!inputIsValid){
        return inputElement.classList.add("error");                  //adiciona class error ao html
    }
    const taskItemContainer = document.createElement("div");        // cria elemento div
    taskItemContainer.classList.add("task-item");                   // adiciona classe na div criada

    const taskContent = document.createElement("p");               // cria elemento P
    taskContent.innerText = inputElement.value;                     // recebe o valor de inputElemente, aceita apenas string

    const deleteItem = document.createElement("i");                 // cria elemento Icon I
    deleteItem.classList.add("fa-solid");                           // adicionando class ao icone delete para chamada do site de fontes
    deleteItem.classList.add("fa-trash-can");

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    taskContainer.appendChild(taskItemContainer);

    inputElement.value = "";                                        // limpa o inputElemente depois de adicionar tarefa
};

const handleInputChange = () =>{
    const inputIsValid = validateInput();

    if(inputIsValid){
        return inputElement.classList.remove("error");
    }
};

addTaskButton.addEventListener("click", () =>handleAddtask()); // previnindo evento padrao do click no botao
inputElement.addEventListener("change", () => handleInputChange()); // previnindo evento padrao do change(troca de cor do input)

