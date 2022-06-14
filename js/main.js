const contCarro = document.querySelector('.header_nav--carro');
const carro = document.querySelector('.header_nav--carro i');

contCarro.addEventListener('mouseover',cambioColorCarro);
contCarro.addEventListener('mouseout',resetColorCarro);


/*
contCarro.addEventListener('click',prueba);
*/

function cambioColorCarro(){
    this.style.backgroundColor = 'aqua';
    this.style.transition ='.3s';
    carro.style.color = 'grey';
    carro.style.transition ='.3s';
}

function resetColorCarro(){
    this.style.backgroundColor = 'transparent';
    this.style.transition ='.3s';
    carro.style.color = 'black';
    carro.style.transition ='.3s';
}

/*
function prueba(){
    this.style.backgroundColor = 'aqua';
    this.style.transition ='.3s';
    carro.style.color = 'grey';
    carro.style.transition ='.3s';
}
*/