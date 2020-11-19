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
  const inputMoneyValue = inputTotal.value;
  const inputDiscountValue = inputPercentage.value;

  console.log(typeof inputMoneyValue, typeof inputDiscountValue);

  event.preventDefault();

  if (inputDiscountValue >= 1 && inputDiscountValue <= 100) {
    const discount = calcPercentage(inputMoneyValue, inputDiscountValue);
    const total = inputMoneyValue - discount;

    discountContainer.textContent = total;
  } else if (inputDiscountValue > 100) {
    discountContainer.textContent = `Discount percentage is ${inputDiscountValue} and not bellow 100`;
  } else {
    discountContainer.textContent = `Discount percentage is ${inputDiscountValue} and it's not equal or greater than 1`;
  }
});

// Create a condtion for when the value is not a number or has nothing in the input
