const inicio = document.querySelector("#inicio");
const main = document.querySelector(".modal");

let isHidden = true
inicio.addEventListener("click", () => {
  if(isHidden){
    main.classList.add("modal_active");
    isHidden = false;
  }else {
    main.classList.remove("modal_active");
    isHidden = true;

  }
})
inicio.addEventListener("mouseout", () => {
  inicio.style.backgroundColor = ""
})