document.querySelector(`.menu-btn`).addEventListener(`click`,()=>{
    document.querySelector(`body`).classList.toggle(`active`)
})

// let arrowBtn=document.querySelector(`.body-form-block__button`);
// arrowBtn.addEventListener(`click`,()=>{
//     arrowBtn.classList.toggle(`arrowBtn`);
//     document.querySelector(`.form-invisible-block__tittle`).classList.toggle(`visible-block`);
// })

let arrowBtn=document.querySelectorAll(`.body-form-block__button`);

// for (const btn of arrowBtn) {
//     btn.addEventListener(`click`,()=>{
//     btn.classList.toggle(`arrowBtn`);
//         // console.log(element.id);
//         let invisibleBlocks = document.querySelectorAll(`.form-invisible-block__tittle`)
//         invisibleBlocks[btn.id].classList.toggle(`visible-block`);
//     })
// }

for (let i = 0; i < arrowBtn.length; i++) {
    arrowBtn[i].addEventListener(`click`,()=>{
        arrowBtn[i].classList.toggle(`arrowBtn`);
                let invisibleBlocks = document.querySelectorAll(`.form-invisible-block__tittle`)
                invisibleBlocks[i].classList.toggle(`visible-block`);
            })
    
}
