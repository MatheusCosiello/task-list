// pegar informação do input
// retornar a informação na div

const inputElement = document.querySelector(".container-task-input");    // input entrada de novas task
const addTaskButton = document.querySelector(".button-task-add");      // botão de adicionar novas tasks
const taskContainer = document.querySelector("task-list");                   // locas das tarefas

const validateInput = () => inputElement.value.trim().length > 0;         // validando valor do input

// verifica se o valor do input é valido ou não

const handleAddtask = () => {
    const inputIsValid = validateInput();

    console.log(inputIsValid);

    if (!inputIsValid){
        return inputElement.classList.add("error");                  //primeiro utilizaçao de classList da minha vida
    }
};

const handleInputChange = () =>{
    const inputIsValid = validateInput();

    if(inputIsValid){
        return inputElement.classList.remove("error");
    }
};

addTaskButton.addEventListener("click", () =>handleAddtask()); // previnindo evento padrao do click no botao
inputElement.addEventListener("change", () => handleInputChange()); // previnindo evento padrao do change(troca de cor do input)