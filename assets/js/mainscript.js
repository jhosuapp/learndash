const getAllOptions = document.querySelectorAll('.questions-options .questions-options__response');
const getButtonSubmit = document.querySelector('#comprobation');
const getModal = document.querySelector('#modalIntento');
const getModalDinamicText = document.querySelector('#dinamicText');


//RECORREMOS TODAS LAS OPCIONES Y SETIAMOS ATR
getAllOptions.forEach((data)=>{

    data.addEventListener('click', ()=>{

        getAllOptions.forEach((data)=>{
            data.classList.remove('active');
        });

        let getAttributeQuestion = data.getAttribute('data-question');
        
        getButtonSubmit.setAttribute('data-validate', getAttributeQuestion);

        data.classList.add('active');

        getButtonSubmit.classList.remove('active');

    });

});


//COMPROBAMOS QUE LA RESPUETA SEA LA CORRECTA
getButtonSubmit.addEventListener('click', ()=>{

    getButtonSubmit.classList.add('active');

    let getAttributeValidate = getButtonSubmit.getAttribute('data-validate');
    let getAllContainersActive = document.querySelectorAll('.questions__block');
    let getAllValidationsOfQuestions = document.querySelectorAll('.validation-questions');

    if(getAllValidationsOfQuestions.length == 9){

        getModal.classList.add('validate-all-questions');
        let getDinamitextResults = document.querySelector('#dinamicTextResults');
        getDinamitextResults.textContent = "Has obtenido un total de 10/10 respuestas correctas"; 
        document.querySelector('#modalTextDinamic').textContent = "¡Has respondido de manera correcta!"

    }

    if(getAttributeValidate == "true"){

        let getContainerActive = document.querySelector('.questions__block.active');
        getContainerActive.classList.remove('active');
        getContainerActive.nextElementSibling.classList.add('active');
        getContainerActive.nextElementSibling.classList.add('validation-questions');

    }else{

        getModal.classList.add('active');
        getAllContainersActive.forEach((data, indice)=>{

            if(data.classList.contains('active')){
                let getDinamitextResults = document.querySelector('#dinamicTextResults');
                getDinamitextResults.textContent = "Has obtenido un total de " + indice + "/10 respuestas correctas"; 
                localStorage.setItem('preguntas-bien', indice);
            }

        });


        //VALIDACION INTENTOS
        let numberIntentos = localStorage.getItem('intento-1');
        let getNumberIntentos = document.querySelector('#dinamicText');

        if(numberIntentos){
            setTimeout(()=>{
                localStorage.setItem('intento-2', 'intento-2');
            },500);
            getNumberIntentos.textContent = "Te queda 1 intento";
        }

        if(localStorage.getItem('intento-2')){
            getNumberIntentos.textContent = "Se acabaron todos los intentos, vuelva más tarde";
            localStorage.setItem('finish', 'finish');
        }        

        localStorage.setItem('intento-1', 'intento-1');
        
    }

});


if(localStorage.getItem('finish')){
    document.querySelector('.questions').remove();
}