"use strict";

/////////////////////////////////////////////////////
// Variables

const discountContainer = document.querySelector(".total-discounted-container");

const btnCalcDiscount = document.querySelector(".btn-calculate-discount");
const btnRandonDiscount = document.querySelector(".btn-randon-discount");

const inputTotal = document.querySelector(".total");
const inputPercentage = document.querySelector(".percentage");

const title = document.querySelector(".title");
const labelRandonDiscount = document.querySelector(".label-random-discount");

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal-discount");

let discount;

/////////////////////////////////////////////////////
// Functions

const calcPercentage = function (number, discountPerc) {
  const porcentage = discountPerc / 100;
  return number * porcentage;
};

const randonDiscount = function () {
  return Math.round(Math.random() * 99 + 1);
};

const hideModal = function () {
  overlay.classList.add("hidden");
  modal.style.display = "none";
};

/////////////////////////////////////////////////////
// Event Listeners

btnCalcDiscount.addEventListener("click", function (event) {
  const inputMoneyValue = Number(inputTotal.value);
  const inputDiscountValue = Number(inputPercentage.value);

  event.preventDefault();

  if (isFinite(inputMoneyValue) || isFinite(inputDiscountValue)) {
    if (inputDiscountValue >= 1 && inputDiscountValue <= 100) {
      const discount = calcPercentage(inputMoneyValue, inputDiscountValue);
      const total = inputMoneyValue - discount;

      discountContainer.textContent = total;
    } else if (inputDiscountValue > 100) {
      discountContainer.textContent = `Discount percentage is ${inputDiscountValue} and not bellow 100`;
    } else {
      discountContainer.textContent = `Discount percentage is ${inputDiscountValue} and it's not equal or greater than 1`;
    }
  } else {
    discountContainer.textContent = "Please insert valid number!";
  }
});

btnRandonDiscount.addEventListener("click", function () {
  labelRandonDiscount.textContent = randonDiscount();
  discount = labelRandonDiscount.textContent;

  inputPercentage.value = discount;
});

title.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
  modal.style.display = "flex";
});

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    console.log(e.key);
    hideModal();
  }
});

overlay.addEventListener("click", function () {
  hideModal();
});
