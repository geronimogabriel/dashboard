// pegando o valor no localStorage
const whiteModeStorage = localStorage.getItem('gmtWhiteMode')

// selecionando o botao
const whiteMode = document.querySelector('.theme')

// caso tenha o valor no localStorage
if (whiteModeStorage) {
    // ativa o white mode
    document.documentElement.classList.add('white-mode')

    // já deixa o input marcado como ativo
    whiteMode.checked = true
}

// ao clicar mudaremos as cores
whiteMode.addEventListener('click', () => {
    // adiciona a classe `white-mode` ao html
    document.documentElement.classList.toggle('white-mode')

    // se tiver a classe white-mode
    if (document.documentElement.classList.contains('white-mode')) {
        // salva o tema no localStorage
        localStorage.setItem('gmtWhiteMode', true)
        // pinta o theme color na meta tag
        metaThemeColor.setAttribute('content', '#2b2b2b')
        return
    }
    // senão remove
    localStorage.removeItem('gmtWhiteMode')
    // senão bota a cor original
    metaThemeColor.setAttribute('content', '#005f97')
})

