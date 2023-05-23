const burger = document.querySelector('.burger');
const container = document.querySelector('.container');
const main = document.querySelectorAll('.main');
const screens = document.querySelectorAll('.screen');

burger.addEventListener('click', ()=>{
    container.classList.toggle('active');
    burger.style.pointerEvents = 'none';
    main[0].style.pointerEvents = 'none';
    setTimeout(()=>{
        burger.style.pointerEvents = 'auto';
        main[0].style.pointerEvents = 'auto';
    }, 1500)
})

function replaseBg(id){
    const bg = document.getElementById(id)
    screens.forEach( screen =>{
        screen.style.display = 'none';
    })
    bg.style.display = 'block';
}

function changeBg(){
    const links = document.querySelectorAll('.link')
    links.forEach((elem, index)=>{
        elem.addEventListener('mouseenter', event => {
            event.preventDefault();
            replaseBg(event.target.dataset.linck)

            burger.style.pointerEvents = 'none';
            main[event.target.dataset.linck-1].style.pointerEvents = 'none';
            setTimeout(()=>{
                burger.style.pointerEvents = 'auto';
                main[event.target.dataset.linck-1].style.pointerEvents = 'auto';
            }, 1500)

        })
        elem.addEventListener('click', event =>{
            event.preventDefault();
            container.classList.toggle('active');
        })
    })
    screens.forEach((elem, index) => {
        if(index){
            elem.style.display = 'none';
        }
    });
}
changeBg()

let num = 0.1;
const nawItems = document.querySelectorAll('.links a');
nawItems.forEach((elem, index, array)=>{
    elem.style.cssText = `--i: ${Math.floor(num*100)/100}s;`
    num += 0.05;
})