"use strict";

const discountContainer = document.querySelector(".total-discounted-container");
const btnDiscount = document.querySelector(".btn-calculate-discount");
const inputTotal = document.querySelector(".total");
const inputPercentage = document.querySelector(".percentage");

const calcPercentage = function (number, discountPerc) {
  const porcentage = discountPerc / 100;
  return number * porcentage;
};

btnDiscount.addEventListener("click", function (event) {
  const inputMoneyValue = Number(inputTotal.value);
  const inputDiscountValue = Number(inputPercentage.value);

  event.preventDefault();

  if (isNaN(inputMoneyValue) || isNaN(inputDiscountValue)) {
    discountContainer.textContent = "Please insert valid number!";
  } else {
    if (inputDiscountValue >= 1 && inputDiscountValue <= 100) {
      const discount = calcPercentage(inputMoneyValue, inputDiscountValue);
      const total = inputMoneyValue - discount;

      discountContainer.textContent = total;
    } else if (inputDiscountValue > 100) {
      discountContainer.textContent = `Discount percentage is ${inputDiscountValue} and not bellow 100`;
    } else {
      discountContainer.textContent = `Discount percentage is ${inputDiscountValue} and it's not equal or greater than 1`;
    }
  }
});

// Create a new feature for the Title, that when the mouse is over the Title becomes a button to play a game
