
const participarConcursoTrybe = document.getElementById('botao1');
const checkbox = document.getElementById('ofertas1');
const getForms = document.getElementById('myform');

participarConcursoTrybe.disabled = true;

function sendInformation(){
    checkbox.addEventListener('click', ()=> {
      participarConcursoTrybe.disabled = false;
         }
       
      )
      participarConcursoTrybe.addEventListener('click', verify);

      function verify() {

        const nameSize = document.getElementById('name').value.length;
        const emailSize = document.getElementById('e-mails').value.length;
        const textAraSize = document.getElementById('por que').value.length;
    
               if(nameSize<10 || nameSize>40 || emailSize<10 || emailSize>50 ||textAraSize<30 || textAraSize>500){
          alert ('Dados inválidos')
          
                } 
                else{
                  getForms.innerHTML = '';
                  getForms.style.textAlign = 'center';
                  getForms.style.fontSize = '30px';
                  getForms.innerText = 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.';

                }
    
      }

  
    }
    sendInformation();


  