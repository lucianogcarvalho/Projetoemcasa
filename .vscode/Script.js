function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')


    //pegar a tag imagem
    const img = document.querySelector('#profile img')


    //substituir a imagem
    if(html.classList.contains('light')) {

         // se tiver light mode , adicionar a imagem avatar-light
        img.setAttribute('src', './assets/avatar-light.png')
    }


         // se estiver sem light mode , manter a imagem normal avatar.png
    else {
        
        img.setAttribute('src', './assets/avatar.png')
        

    }
 


        









}