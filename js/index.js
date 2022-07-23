const btnRobocassa = document.querySelector("#link-robocassa");
const btnKaspi = document.querySelector("#link-kaspi");
const btnRequisites = document.querySelector("#link-requisites");

const robocassaPayment = document.querySelector(".payment-amount");
const kaspiPayment = document.querySelector(".payment-kaspi");
const requisitesPayment = document.querySelector(".payment-requisites")

btnRobocassa.addEventListener("click", () => {
     btnRobocassa.classList.toggle("clicked-link");
     btnKaspi.classList.remove("clicked-link");
     btnRequisites.classList.remove("clicked-link");

     requisitesPayment.classList.remove("requisites-visible");
     kaspiPayment.classList.remove("kaspi-visible");
     robocassaPayment.classList.toggle("amount-visible");
});

btnKaspi.addEventListener("click", () => {
     btnKaspi.classList.toggle("clicked-link");
     btnRobocassa.classList.remove("clicked-link");
     btnRequisites.classList.remove("clicked-link");

     requisitesPayment.classList.remove("requisites-visible");
     robocassaPayment.classList.remove("amount-visible");
     kaspiPayment.classList.toggle("kaspi-visible");
});

btnRequisites.addEventListener("click", () => {
     btnRequisites.classList.toggle("clicked-link");
     btnRobocassa.classList.remove("clicked-link");
     btnKaspi.classList.remove("clicked-link");

     kaspiPayment.classList.remove("kaspi-visible");
     robocassaPayment.classList.remove("amount-visible");
     requisitesPayment.classList.toggle("requisites-visible");
});