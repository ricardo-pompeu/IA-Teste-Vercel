document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleThemeButton = document.getElementById('toggle-theme');

    // Aplica o tema salvo ao carregar qualquer página
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(savedTheme + "-mode"); // Adiciona a classe corretamente

    // Função para alternar o tema
    function applyTheme(theme) {
        body.classList.remove('dark-mode', 'light-mode'); // Remove classes antigas
        body.classList.add(theme + "-mode"); // Adiciona a nova classe
        localStorage.setItem('theme', theme); // Salva no localStorage
    }

    // Adiciona evento de clique no botão de alternância
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
});

// Código do Sidebar
document.addEventListener("DOMContentLoaded", () => {
    const openSidebar = document.getElementById("openSidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const overlay = document.getElementById("overlay");
    const sidebar = document.getElementById("sidebar");

    if (openSidebar) {
        openSidebar.onclick = () => {
            sidebar.style.left = "0";
            overlay.style.display = "block";
        };
    }

    if (closeSidebar) {
        closeSidebar.onclick = () => {
            sidebar.style.left = "-280px";
            overlay.style.display = "none";
        };
    }

    if (overlay) {
        overlay.onclick = () => {
            sidebar.style.left = "-280px";
            overlay.style.display = "none";
        };
    }
});




/*----------------------------------------------------------------------------------*/
/*
document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.background-image-mireral');
    const leftButton = document.getElementById('leftimg');
    const rightButton = document.getElementById('rightimg');
    const indicatorsContainer = document.querySelector('.indicators');

    // Lista de imagens de fundo
    const images = [
        'url(../Src/imagem1.jpg)',
        'url(../Src/imagem2.jpg)',
        'url(../Src/imagem3.jpg)',
        'url(../Src/imagem4.jpg)',
        'url(../Src/imagem5.jpg)'
    ];

    let currentIndex = 0;
    let autoChangeInterval;

    // Função para atualizar a imagem de fundo e os indicadores
    function updateBackground() {
        banner.style.backgroundImage = images[currentIndex];
        updateIndicators();
    }

    // Função para criar os indicadores (bolinhas)
    function createIndicators() {
        indicatorsContainer.innerHTML = ''; // Limpa o contêiner
        images.forEach((_, index) => {
            const indicator = document.createElement('span');
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateBackground();
                resetAutoChange(); // Reinicia o intervalo ao clicar em uma bolinha
            });
            indicatorsContainer.appendChild(indicator);
        });
        updateIndicators(); // Atualiza os indicadores ao carregar a página
    }

    // Função para atualizar o estado dos indicadores
    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicators span');
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Função para avançar para a próxima imagem
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackground();
    }

    // Função para retroceder para a imagem anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateBackground();
    }

    // Função para reiniciar o intervalo de transição automática
    function resetAutoChange() {
        clearInterval(autoChangeInterval); // Para o intervalo atual
        autoChangeInterval = setInterval(nextImage, 12000); // Reinicia o intervalo
    }

    // Navegação para a esquerda
    leftButton.addEventListener('click', function() {
        prevImage();
        resetAutoChange(); // Reinicia o intervalo ao clicar no botão
    });

    // Navegação para a direita
    rightButton.addEventListener('click', function() {
        nextImage();
        resetAutoChange(); // Reinicia o intervalo ao clicar no botão
    });

    // Criar os indicadores ao carregar a página
    createIndicators();

    // Definir a imagem inicial
    updateBackground();

    // Iniciar a transição automática
    autoChangeInterval = setInterval(nextImage, 12000);
});




/*

const meuPacoteIcones = {

    chat: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><g 
fill="currentColor"><path d="m 14 3.175781 v 3.824219 c 0 2.179688 -1.820312 4 -4 4 h -3.585938 l -2 2 h 5.585938 l 3 3 v -3 c 1.644531 0 3 -1.355469 3 -3 v -4 c 0 -1.292969 -0.839844 -2.40625 -2 -2.824219 z m 0 0"/><path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 4 c 0 1.644531 1.355469 3 3 3 v 3 l 3 -3 h 4 c 1.644531 0 3 -1.355469 3 -3 v -4 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 7 c 0.570312 0 1 0.429688 1 1 v 4 c 0 0.570312 -0.429688 1 -1 1 h -7 c -0.570312 0 -1 -0.429688 -1 -1 v -4 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/><path d="m 3 3 h 7 v 1 h -7 z m 0 0"/><path d="m 3 5 h 4 v 1 h -4 z m 0 0"/></g></svg>`,
    
    check: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><g 
fill="currentColor"><path d="m 9.492188 0.140625 c -0.851563 -0.1640625 -1.722657 -0.1835938 -2.574219 -0.0664062 c -1.699219 0.2304692 -3.328125 1.0078122 -4.601563 2.2929692 c -2.546875 2.566406 -3.050781 6.539062 -1.230468 9.664062 c 1.824218 3.121094 5.53125 4.636719 9.019531 3.683594 c 3.488281 -0.949219 5.90625 -4.132813 5.890625 -7.75 c 0 -0.550782 -0.453125 -1 -1.003906 -0.996094 c -0.550782 0.003906 -0.996094 0.453125 -0.996094 1.003906 c 0.015625 2.722656 -1.792969 5.097656 -4.417969 5.816406 c -2.625 0.714844 -5.390625 -0.417968 -6.761719 -2.765624 c -1.371094 -2.351563 -0.996094 -5.316407 0.921875 -7.25 c 1.914063 -1.929688 4.875 -2.335938 7.238281 -0.984376 c 0.476563 0.273438 1.089844 0.109376 1.363282 -0.371093 c 0.273437 -0.480469 0.109375 -1.089844 -0.371094 -1.367188 c -0.785156 -0.445312 -1.621094 -0.75 -2.476562 -0.910156 z m 0 0"/><path d="m 15.753906 3.65625 c 0.175782 -0.199219 0.261719 -0.460938 0.246094 -0.722656 c -0.019531 -0.265625 -0.140625 -0.511719 -0.339844 -0.6875 c -0.199218 -0.175782 -0.460937 -0.265625 -0.726562 -0.246094 c -0.265625 0.015625 -0.511719 0.140625 -0.6875 0.339844 l -6.296875 7.195312 l -2.242188 -2.246094 c -0.390625 -0.390624 -1.023437 -0.390624 -1.414062 0 c -0.1875 0.1875 -0.292969 0.445313 -0.292969 0.710938 s 0.105469 0.519531 0.292969 0.707031 l 3 3 c 0.195312 0.195313 0.464843 0.300781 0.742187 0.292969 c 0.277344 -0.011719 0.535156 -0.132812 0.71875 -0.34375 z m 0 0"/></g></svg>`,

    checkbox: `<?xml version="1.0" encoding="UTF-8"?>
<svg height="24px" viewBox="0 0 16 16" width="24px" xmlns="http://www.w3.org/2000/svg">
    <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 10 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -10 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.421875 0 0.765625 0.234375 0.917969 0.585938 l -0.667969 0.757812 l -6.296875 7.195312 l -2.246094 -2.246093 c -0.390625 -0.390625 -1.023437 -0.390625 -1.414062 0 s -0.390625 1.027343 0 1.417969 l 3 3 c 0.410156 0.40625 1.078125 0.386718 1.460937 -0.050782 l 6.246094 -7.136718 v 7.476562 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -10 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0" fill="currentColor"/>
</svg>`,

    code: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><g 
fill="currentColor"><path d="m 10 4 v 1 c 0 0.257812 0.128906 0.527344 0.3125 0.71875 l 2.25 2.28125 l -2.25 2.28125 c -0.183594 0.191406 -0.3125 0.460938 -0.3125 0.71875 v 1 h 1 c 0.308594 0 0.550781 -0.089844 0.75 -0.28125 l 3.65625 -3.71875 l -3.65625 -3.71875 c -0.199219 -0.191406 -0.441406 -0.28125 -0.75 -0.28125 z m 0 0"/><path d="m 6 4 v 1 c 0 0.257812 -0.128906 0.527344 -0.3125 0.71875 l -2.25 2.28125 l 2.25 2.28125 c 0.183594 0.191406 0.3125 0.460938 0.3125 0.71875 v 1 h -1 c -0.308594 0 -0.550781 -0.089844 -0.75 -0.28125 l -3.65625 -3.71875 l 3.65625 -3.71875 c 0.199219 -0.191406 0.441406 -0.28125 0.75 -0.28125 z m 0 0"/></g></svg>`,
    
    contrast: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><path 
d="m 8 0 c -4.410156 0 -8 3.589844 -8 8 s 3.589844 8 8 8 s 8 -3.589844 8 -8 s -3.589844 -8 -8 -8 z m 0 2 v 12 c -3.332031 0 -6 -2.667969 -6 -6 s 2.667969 -6 6 -6 z m 0 0" fill="currentColor"/></svg>`,
    
    dialog: `<?xml version="1.0" encoding="UTF-8"?>
<svg height="24px" viewBox="0 0 16 16" width="24px" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
        <path d="m 7.996094 0 c -2.835938 0 -5.292969 2 -5.871094 4.777344 c -0.527344 2.535156 0.6875 5.035156 2.875 6.328125 v 0.894531 c 0 0.554688 0.449219 1 1 1 h 4 c 0.550781 0 1 -0.445312 1 -1 l 0.003906 -0.898438 c 2.179688 -1.292968 3.398438 -3.796874 2.867188 -6.332031 c -0.582032 -2.773437 -3.039063 -4.769531 -5.875 -4.769531 z m 0 2 c 1.898437 0 3.527344 1.320312 3.917968 3.179688 c 0.390626 1.863281 -0.570312 3.726562 -2.3125 4.488281 c -0.363281 0.15625 -0.597656 0.515625 -0.601562 0.914062 v 0.417969 h -2 v -0.417969 c -0.003906 -0.398437 -0.238281 -0.753906 -0.601562 -0.914062 c -1.742188 -0.761719 -2.703126 -2.625 -2.316407 -4.484375 s 2.015625 -3.183594 3.914063 -3.183594 z m -1.996094 12 v 1 c 0 0.554688 0.445312 1 1 1 h 2 c 0.554688 0 1 -0.445312 1 -1 v -1 z m 0 0"/>
        <path d="m 6.644531 6.144531 c -0.195312 0.195313 -0.195312 0.515625 0 0.707031 l 1 1 c 0.195313 0.195313 0.511719 0.195313 0.707031 0 l 1 -1 c 0.195313 -0.191406 0.195313 -0.511718 0 -0.707031 c -0.195312 -0.191406 -0.511718 -0.191406 -0.707031 0 l -0.648437 0.648438 l -0.644532 -0.648438 c -0.195312 -0.191406 -0.511718 -0.191406 -0.707031 0 z m 0 0" fill-opacity="0.34902"/>
    </g>
</svg>`,
    
    info: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><path 
d="m 8 0 c -4.410156 0 -8 3.589844 -8 8 s 3.589844 8 8 8 s 8 -3.589844 8 -8 s -3.589844 -8 -8 -8 z m 0 2 c 3.332031 0 6 2.667969 6 6 s -2.667969 6 -6 6 s -6 -2.667969 -6 -6 s 2.667969 -6 6 -6 z m 0 1.875 c -0.621094 0 -1.125 0.503906 -1.125 1.125 s 0.503906 1.125 1.125 1.125 s 1.125 -0.503906 1.125 -1.125 s -0.503906 -1.125 -1.125 -1.125 z m -1.523438 3.125 c -0.265624 0.011719 -0.476562 0.230469 -0.476562 0.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 0.5 v 3 h -0.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 3 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 h -0.5 v -4 h -2.5 c -0.007812 0 -0.015625 0 -0.023438 0 z m 0 0" fill="currentColor"/></svg>`,
    
    labs: `<?xml version="1.0" encoding="UTF-8"?>
<svg height="24px" viewBox="0 0 16 16" width="24px" xmlns="http://www.w3.org/2000/svg">
    <path d="m 4.996094 0 c -1.03125 0.00390625 -1.386719 1.371094 -0.484375 1.871094 l 0.488281 0.273437 v 2.683594 c -0.128906 0.207031 -0.25 0.390625 -0.441406 0.714844 c -0.269532 0.472656 -0.601563 1.0625 -0.964844 1.707031 c -0.722656 1.296875 -1.554688 2.910156 -2.203125 4.09375 c -0.574219 1.046875 -0.550781 2.453125 0.300781 3.511719 c 0.671875 0.902343 1.738282 1.140625 2.617188 1.140625 h 7.351562 c 0.878906 0 1.949219 -0.238282 2.621094 -1.140625 c 0.851562 -1.058594 0.867188 -2.464844 0.296875 -3.511719 c -1.164063 -2.371094 -2.472656 -4.316406 -3.5625 -6.496094 v -2.699218 l 0.488281 -0.277344 c 0.902344 -0.5 0.546875 -1.871094 -0.484375 -1.871094 z m 2.003906 2 h 2.015625 v 3.105469 c 0 0.152343 0.035156 0.304687 0.101563 0.441406 c 1.203124 2.457031 2.574218 4.441406 3.6875 6.714844 c 0.003906 0.011719 0.011718 0.027343 0.015624 0.039062 c 0.242188 0.441407 0.257813 0.882813 -0.097656 1.316407 c -0.011718 0.011718 -0.023437 0.027343 -0.035156 0.042968 c -0.144531 0.199219 -0.488281 0.335938 -1.027344 0.335938 h -7.351562 c -0.539063 0 -0.882813 -0.136719 -1.027344 -0.335938 c -0.011719 -0.015625 -0.023438 -0.027344 -0.035156 -0.042968 c -0.351563 -0.433594 -0.339844 -0.875 -0.097656 -1.316407 c 0.644531 -1.179687 1.472656 -2.789062 2.191406 -4.070312 c 0.359375 -0.644531 0.6875 -1.230469 0.953125 -1.683594 c 0.261719 -0.453125 0.488281 -0.8125 0.515625 -0.847656 c 0.125 -0.171875 0.191406 -0.378907 0.191406 -0.589844 z m 0 0" fill="currentColor"/>
    <path d="m 6.21875 9 l -2.21875 4 h 8 l -2.21875 -4 z m 0 0" fill="currentColor"/>
</svg>`,
    
    left: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><path 
d="m 9.292969 13.707031 l -5 -5 c -0.390625 -0.390625 -0.390625 -1.023437 0 -1.414062 l 5 -5 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 s 0.390625 1.023437 0 1.414062 l -4.292969 4.292969 l 4.292969 4.292969 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 s -1.023437 0.390625 -1.414062 0 z m 0 0" fill="currentColor" fill-rule="evenodd"/></svg>`,
    
    map: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><g 
fill="currentColor"><path d="m 8 0 c -3.589844 0 -6.5 2.910156 -6.5 6.5 s 2.910156 6.496094 6.5 6.496094 c 3.589844 0.003906 6.5 -2.90625 6.5 -6.496094 s -2.910156 -6.5 -6.5 -6.5 z m 0 4 c 1.378906 0 2.5 1.117188 2.5 2.5 c 0 1.378906 -1.121094 2.5 -2.5 2.496094 c -1.378906 0 -2.5 -1.117188 -2.5 -2.496094 s 1.117188 -2.5 2.5 -2.5 z m 0 0"/><path d="m 14.097656 8.746094 l -5.660156 0.230468 l -6.535156 -0.230468 c 0.6875 2.152344 4.097656 5.25 6.097656 7.25 v 0.003906 v -0.003906 c 2 -2 5.410156 -5.101563 6.097656 -7.25 z m 0 0"/></g></svg>`,
    
    menu: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><g 
fill="currentColor"><path d="m 2 3 h 12 v 2 h -12 z m 0 0"/><path d="m 2 7 h 12 v 2 h -12 z m 0 0"/><path d="m 2 11 h 12 v 2 h -12 z m 0 0"/></g></svg>`,
    
    openbook: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><g 
fill="currentColor"><path d="m 3 1 c -1.644531 0 -3 1.355469 -3 3 v 7 c 0 1.644531 1.355469 3 3 3 h 3 c 0.5625 0 1 0.4375 1 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -1.644531 -1.355469 -3 -3 -3 h -3 c -0.5625 0 -1 -0.4375 -1 -1 v -7 c 0 -0.5625 0.4375 -1 1 -1 h 3 c 0.5625 0 1 0.4375 1 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 0"/><path d="m 7 4 v 10 h 2 v -10 z m 0 0"/><path d="m 10 1 c -1.644531 0 -3 1.355469 -3 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -0.5625 0.4375 -1 1 -1 h 3 c 0.5625 0 1 0.4375 1 1 v 7 c 0 0.5625 -0.4375 1 -1 1 h -3 c -1.644531 0 -3 1.355469 -3 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -0.5625 0.4375 -1 1 -1 h 3 c 1.644531 0 3 -1.355469 3 -3 v -7 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 0"/><path d="m 3 4 h 3 v 1 h -3 z m 0 0"/><path d="m 3 6 h 3 v 1 h -3 z m 0 0"/><path d="m 3 8 h 3 v 1 h -3 z m 0 0"/><path d="m 10 4 h 3 v 1 h -3 z m 0 0"/><path d="m 10 6 h 3 v 1 h -3 z m 0 0"/><path d="m 10 8 h 2 v 1 h -2 z m 0 0"/></g></svg>`,
    
    panelleft: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><g 
fill="currentColor"><path d="m 6.5 13.992188 v -12 h -5 v 12 z m 0 0" fill-opacity="0.34902"/><path d="m 3 0.992188 c -1.644531 0 -3 1.355468 -3 3 v 8 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -8 c 0 -1.644532 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.570312 0 1 0.429687 1 1 v 8 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -8 c 0 -0.570313 0.429688 -1 1 -1 z m 0 0"/><path d="m 6 1.992188 h 1 v 12 h -1 z m 0 0"/></g></svg>`,
    
    question: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><g 
fill="currentColor"><path d="m 8.152344 2.996094 c 0.726562 0.035156 1.433594 0.335937 1.96875 0.871094 c 0.855468 0.855468 1.113281 2.152343 0.652344 3.269531 c -0.332032 0.796875 -0.988282 1.390625 -1.773438 1.671875 v 1.179687 h -2 v -2 c 0 -0.550781 0.449219 -1 1 -1 c 0.40625 0 0.769531 -0.242187 0.925781 -0.617187 c 0.152344 -0.375 0.070313 -0.800782 -0.21875 -1.089844 c -0.289062 -0.289062 -0.714843 -0.371094 -1.089843 -0.214844 c -0.375 0.152344 -0.617188 0.515625 -0.617188 0.921875 h -2 c 0 -1.210937 0.734375 -2.308593 1.851562 -2.769531 c 0.417969 -0.175781 0.863282 -0.246094 1.300782 -0.222656 z m -0.152344 7.992187 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/><path d="m 13.648438 2.363281 c -3.113282 -3.117187 -8.179688 -3.117187 -11.296876 0 c -3.113281 3.113281 -3.113281 8.179688 0 11.292969 c 3.117188 3.113281 8.183594 3.113281 11.296876 0 c 3.113281 -3.113281 3.113281 -8.179688 0 -11.292969 z m -1.609376 1.609375 c 2.25 2.25 2.25 5.824219 0 8.074219 c -2.25 2.253906 -5.828124 2.253906 -8.078124 0 c -2.25 -2.25 -2.25 -5.824219 0 -8.078125 c 2.25 -2.25 5.828124 -2.25 8.078124 0 z m 0 0"/></g></svg>`,
    
    user: `<?xml version="1.0" encoding="UTF-8"?>
<svg height="24px" viewBox="0 0 16 16" width="24px" xmlns="http://www.w3.org/2000/svg">
    <path d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0" fill="currentColor"/>
</svg>`,
    
    x: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 16 16" width="24px"><g 
fill="currentColor"><path d="m 3.019531 0 c -1.644531 0 -2.9999998 1.355469 -2.9999998 3 v 10 c 0 1.644531 1.3554688 3 2.9999998 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -10 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.570313 0 1 0.429688 1 1 v 10 c 0 0.570312 -0.429687 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -10 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/><path d="m 5 4 c 0.265625 0 0.519531 0.105469 0.707031 0.292969 l 2.292969 2.292969 l 2.292969 -2.292969 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 s 0.519531 0.105469 0.707031 0.292969 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 l -2.292969 2.292969 l 2.292969 2.292969 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 s -1.023437 0.390625 -1.414062 0 l -2.292969 -2.292969 l -2.292969 2.292969 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 s -0.390625 -1.023437 0 -1.414062 l 2.292969 -2.292969 l -2.292969 -2.292969 c -0.390625 -0.390625 -0.390625 -1.023437 0 -1.414062 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 z m 0 0"/></g></svg>`,





























};

// Função para substituir <i class="meu-icone nome-do-icone"></i> pelo SVG correspondente
function carregarIcones() {
    document.querySelectorAll("i.meu-icone").forEach(icon => {
        const classes = icon.classList;
        for (const className of classes) {
            if (meuPacoteIcones[className]) {
                icon.innerHTML = meuPacoteIcones[className]; // Adiciona o SVG dentro do <i>
                break; // Garante que só um ícone seja adicionado por vez
            }
        }
    });
}

// Executa a função ao carregar a página
document.addEventListener("DOMContentLoaded", carregarIcones);













*/








if (window.innerWidth > 1000) {

    let index = 0;
    const slides = document.querySelector('.carousel-images');
    const dots = document.querySelectorAll('.dot');
    const total = document.querySelectorAll('.carousel-images img').length;
    let startX = 0;
    let moveX = 0;
    let isDragging = false;

    function showSlide() {
        slides.style.transition = "transform 0.5s ease-out";
        slides.style.transform = `translateX(calc(${-index * 100}% - ${index * 0}vw))`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        if (index < total - 1) index++;
        else index = 0;
        showSlide();
    }

    function prevSlide() {
        if (index > 0) index--;
        else index = total - 1;
        showSlide();
    }

    function goToSlide(n) {
        index = n;
        showSlide();
    }


    // Suporte a gestos estilo Instagram
    document.getElementById("carousel").addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        moveX = startX;
        slides.style.transition = "none";
        isDragging = true;
    });

    document.getElementById("carousel").addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        moveX = e.touches[0].clientX;
        let diff = moveX - startX;

        slides.style.transform = `translateX(calc(${-index * 100}% - ${index * 0}vw + ${(diff / window.innerWidth) * 100}%))`;

    });

    document.getElementById("carousel").addEventListener("touchend", () => {
        let diff = moveX - startX;
        if (diff < -50) {
            nextSlide();
        } else if (diff > 50) {
            prevSlide();
        } else {
            showSlide();
        }
        isDragging = false;
    });

}


if (window.location.pathname.endsWith("index.html")) {
    window.history.replaceState(null, "", window.location.pathname.replace("index.html", ""));
}

























/*-------------------------------------------------------------------------------------------------------------------------------*/

let index = 0;
const slides = document.querySelector('.carousel-images');
const dots = document.querySelectorAll('.dot');
const total = document.querySelectorAll('.carousel-images img').length;
let startX = 0;
let moveX = 0;
let isDragging = false;

function showSlide() {
    slides.style.transition = "transform 0.5s ease-out";
    slides.style.transform = `translateX(calc(${-index * 100}% - ${index * 24}vw))`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    if (index < total - 1) index++;
    else index = 0;
    showSlide();
}

function prevSlide() {
    if (index > 0) index--;
    else index = total - 1;
    showSlide();
}

function goToSlide(n) {
    index = n;
    showSlide();
}


// Suporte a gestos estilo Instagram
document.getElementById("carousel").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    moveX = startX;
    slides.style.transition = "none";
    isDragging = true;
});

document.getElementById("carousel").addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    moveX = e.touches[0].clientX;
    let diff = moveX - startX;

    slides.style.transform = `translateX(calc(${-index * 100}% - ${index * 24}vw + ${(diff / window.innerWidth) * 100}%))`;

});

document.getElementById("carousel").addEventListener("touchend", () => {
    let diff = moveX - startX;
    if (diff < -50) {
        nextSlide();
    } else if (diff > 50) {
        prevSlide();
    } else {
        showSlide();
    }
    isDragging = false;
});






// Inicia o autoplay trocando as imagens a cada 6 segundos
let autoplay = setInterval(nextSlide, 10000);

// Função para pausar o autoplay
function pauseAutoplay() {
    clearInterval(autoplay);
}

// Função para retomar o autoplay
function resumeAutoplay() {
    autoplay = setInterval(nextSlide, 10000);
}

// Seleciona todas as imagens do carrossel
const images = document.querySelectorAll(".carousel-images img");

// Adiciona eventos de toque para pausar e retomar o autoplay
images.forEach(img => {
    img.addEventListener("touchstart", pauseAutoplay); // Pausa ao tocar na imagem
    img.addEventListener("touchend", resumeAutoplay);  // Retoma ao soltar o dedo
});









/*--------------------------------------------------------------------------------------------------------------------------------------------- */


if (window.innerWidth >= 1000) {

    let index = 0;
    const slides = document.querySelector('.carousel-images');
    const dots = document.querySelectorAll('.dot');
    const total = document.querySelectorAll('.carousel-images img').length;
    let startX = 0;
    let moveX = 0;
    let isDragging = false;

    function showSlide() {
        slides.style.transition = "transform 0.5s ease-out";
        slides.style.transform = `translateX(${-index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        if (index < total - 1) index++;
        else index = 0;
        showSlide();
    }

    function prevSlide() {
        if (index > 0) index--;
        else index = total - 1;
        showSlide();
    }

    function goToSlide(n) {
        index = n;
        showSlide();
    }

    // Suporte a gestos estilo Instagram
    document.getElementById("carousel").addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        moveX = startX;
        slides.style.transition = "none";
        isDragging = true;
    });

    document.getElementById("carousel").addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        moveX = e.touches[0].clientX;
        let diff = moveX - startX;
        slides.style.transform = `translateX(${-index * 100 + (diff / window.innerWidth) * 100}%)`;
    });

    document.getElementById("carousel").addEventListener("touchend", () => {
        let diff = moveX - startX;
        if (diff < -50) {
            nextSlide();
        } else if (diff > 50) {
            prevSlide();
        } else {
            showSlide();
        }
        isDragging = false;
    });



}




function toggleSearchBar() {
    const searchLi = document.getElementById("search-bar-li");
    if (searchLi.style.display === "none") {
        searchLi.style.display = "block";
    } else {
        searchLi.style.display = "none";
    }
}



function toggleSidebarBackground() {
    const sidebar = document.getElementById("FindSidebar");

    if (sidebar.style.backgroundColor === "black" || sidebar.style.backgroundColor === "") {
        sidebar.style.backgroundColor = "white";
    } else {
        sidebar.style.backgroundColor = "black";
    }
}







function limparCampo() {
    document.getElementById('search-input').value = '';
}






