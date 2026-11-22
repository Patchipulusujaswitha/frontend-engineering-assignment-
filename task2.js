
const billingToggle = document.getElementById("billingToggle");

const prices = document.querySelectorAll(".price");
const periods = document.querySelectorAll(".period");

billingToggle.addEventListener("change", function () {

    const isAnnual = billingToggle.checked;

    prices.forEach(function (price) {

        if (isAnnual) {
            price.textContent =
                "₹" + Number(price.dataset.annual).toLocaleString("en-IN");
        } else {
            price.textContent =
                "₹" + Number(price.dataset.monthly).toLocaleString("en-IN");
        }

    });

    periods.forEach(function (period, index) {

        if (index === 0) {
            period.textContent = "Free forever";
        } else if (isAnnual) {
            period.textContent = "per year";
        } else {
            period.textContent = "per month";
        }

    });

});

const buttons = document.querySelectorAll(".select-btn");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const plan = button.parentElement.querySelector("h2").textContent;

        document.getElementById("message").textContent =
            "You selected the " + plan + "!";

    });

});
