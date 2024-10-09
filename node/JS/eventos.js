 document.addEventListener('DOMContentLoaded', ()=>{
    let botao = document.querySelector('.botao')
    let textoEscondido = document.querySelector('.texto__escondido');

    botao.addEventListener('click', texto)
    botao.addEventListener('mousemove', mudar)
    botao.addEventListener('mouseout', troca)
        
   

   function texto (){

      textoEscondido.style.display = 'block'
    }
   

   function mudar() {
      botao.style.background = 'blue'
      
    }
       function troca() {
        
    botao.style.background = 'white'

  }
  })
 



    


