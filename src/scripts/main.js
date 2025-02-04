document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturahero = heroSection.clientHeight;

    const menuToggle = document.querySelector(".header__toggle");
    const navMenu = document.querySelector(".header__nav");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    })

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturahero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })


    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('char__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('char__tabs__button--is-active');
        })
    }

    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe ='faq__list__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('char__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const buttons = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('char__list--is-active');
    }
}