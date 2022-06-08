// ----- HOME -----
let menu = document.querySelector(".navbar__container")
let container = document.querySelector(".main")
let check = document.querySelector(".marked")
check.addEventListener('click', () => {
    check.classList.toggle("bx-radio-circle-marked")
    menu.classList.toggle("minimize")
    container.classList.toggle("container-min")
})




let relatorio = document.querySelectorAll(".nav-dropdown")
let arrow = document.querySelectorAll(".arrow")

for (let i = 0; i < relatorio.length; i++) {
    const seta = relatorio[i];
    
    seta.addEventListener('click', () => {
        seta.classList.toggle("nav-dropdown_active")
        let test = seta.children[1]
        if (test.style.transform == "") {
            test.style.transform = "rotate(90deg)"
        } else {
            test.style.transform = ""
        }
        
        seta.nextSibling.nextSibling.classList.toggle("test")
        console.log(seta.clientWidth)
        
    })
    
}

let dropItem = document.querySelectorAll(".dropdown-item")
for (let i = 0; i < dropItem.length; i++) {
    const element = dropItem[i];
    element.addEventListener('click', () => {
        element.classList.toggle("item-active")
    })
    
}


//----------------------------------------- HEADER -------------------------------------------

let profile = document.querySelector('.info-rigth_name')
    profile.addEventListener('click', () => {
        let info = document.querySelector('.info-right_profile_drop')
        info.classList.toggle('hide')
    })


let bell = document.querySelector('.bell_container')
    
    bell.addEventListener('click', () => {
        let notifi = document.querySelector('.bell-drop')
        notifi.classList.toggle('hide')
    })

//mudando o icone de thema
    let mode = document.querySelector(".theme")
    mode.addEventListener('click', () => {
        console.log(mode)
        if (mode.className == "bx bx-sun theme icon") {
            mode.className = "bx bx-moon theme icon"
        } else {
            mode.className = "bx bx-sun theme icon"
        }
    })
//barra de pesquisa
    //     function search_animal() {
    // let input = document.getElementById('searchbar').value
    // input=input.toLowerCase();
    // let x = document.getElementsByClassName('animals');
      
    // for (i = 0; i < x.length; i++) { 
    //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
    //         x[i].style.display="";
    //     }
    //     else {
    //         x[i].style.display="list-item";                 
    //     }
    // }
    // }
    // let bar = document.querySelector('.search')
    // let lupa = document.querySelector('.lupa')
    // lupa.addEventListener('click', () => {
    //     bar.style.display="block"
    // })
    // let fechar = document.getElementById('close')
    //     fechar.addEventListener('click', () => {
    //         bar.style.display="none"
    // })
