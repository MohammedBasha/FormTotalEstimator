(function () {
    "use strict";

    const cartForm = document.getElementById("cart-hplus"),
          state = document.getElementById("s-state"),
          estimatorBtn = document.getElementById("btn-estimate");

    function totalEstimator(e) {
        e.preventDefault();

        const itemBall = document.getElementById("txt-q-bball").value,
              itemJersey = document.getElementById("txt-q-jersey").value,
              itemPower = document.getElementById("txt-q-power").value,
              shippingState = state.value,
              shippingMethod = document.querySelector("[name=r_method]:checked").value;
              

        console.log(itemBall, itemJersey, itemPower, shippingState, shippingMethod);
    }

    document.addEventListener("DOMContentLoaded", function () {
        cartForm.addEventListener("submit", totalEstimator);

        estimatorBtn.disabled = true;

        state.addEventListener("change", function () {
            estimatorBtn.disabled = (state.value === "");
        });
    });

}());