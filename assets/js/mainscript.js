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



    if(getAttributeValidate == "true"){

        let getContainerActive = document.querySelector('.questions__block.active');
        getContainerActive.classList.remove('active');
        getContainerActive.nextElementSibling.classList.add('active');

    }else{

        getModal.classList.add('active');
        getAllContainersActive.forEach((data, indice)=>{

            if(data.classList.contains('active')){
                let getDinamitextResults = document.querySelector('#dinamicTextResults');
                getDinamitextResults.textContent = "Has obtenido un total de " + indice + "/10 respuestas correctas"; 
            }

        });
        
    }

});



