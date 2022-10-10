// header hover 
const sub = document.querySelectorAll(".header__center .menu li .sub");
const menu = document.querySelectorAll(".header__center .menu li a");
const header = document.querySelector(".header__center");

header.addEventListener("mouseover", () => {
    header.classList.remove("height");
    sub.forEach((e) => {
        e.style.display = "block";
    })
})
header.addEventListener("mouseout", () => {
    header.classList.add("height");
    sub.forEach((e) => {
        e.style.display = "none";
    })
})


// menu.forEach((e) => {
//     e.addEventListener("mouseover", () => {
//         header.classList.remove("height");
//         sub.forEach((e) => {
//             e.style.display = "block";
//         })
//     })
//     e.addEventListener("mouseout", () => {
//         header.classList.add("height");
//         sub.forEach((e) => {
//             e.style.display = "none";
//         })
//     })
// })

// smallmenu
const menuBtn = document.querySelector(".header__right > svg");
const menuBtnClose = document.querySelector(".header__right > svg:nth-child(3)");
const smallmenu = document.querySelector(".smallmenu");

menuBtn.addEventListener("click", () => {
    smallmenu.classList.remove("blind");
    menuBtnClose.classList.remove("blind");
    menuBtn.classList.add("blind");
});

menuBtnClose.addEventListener("click", () => {
    smallmenu.classList.add("blind");
    menuBtnClose.classList.add("blind");
    menuBtn.classList.remove("blind");
});

