(function () {
    "use strict";

    const cartForm = document.getElementById("cart-hplus"),
          state = document.getElementById("s-state"),
          estimatorBtn = document.getElementById("btn-estimate");

    function totalEstimator(e) {
        e.preventDefault();

        var itemBall = parseInt(document.getElementById("txt-q-bball").value) || 0,
            itemJersey = parseInt(document.getElementById("txt-q-jersey").value) || 0,
            itemPower = parseInt(document.getElementById("txt-q-power").value) || 0,

            shippingState = state.value,
            shippingMethod = document.querySelector("[name=r_method]:checked").value || "",

            totalQty = itemBall + itemJersey + itemPower,
            shippingCostPer,
            shippingCost,
            taxFactor = 1,
            totalItemsPrice = (90 * itemBall) + (25 * itemJersey) + (30 * itemPower),
            estimate,
            results = document.getElementById("results");
        
        
        if (shippingState === 'CA') taxFactor = 1.075;
        
        switch(shippingMethod) {
            case 'usps' :
                shippingCostPer = 2;
                break;
            case 'ups' :
                shippingCostPer = 3;
                break;
            default:
                shippingCostPer = 0;
                break;
        }
            
        shippingCost = shippingCostPer * totalQty;
        
        estimate = "$" + ((totalItemsPrice * taxFactor) + shippingCost).toFixed(2);
        
        document.getElementById("txt-estimate").value = estimate;
        
        results.innerHTML = "Total items: " + totalQty + "<br>";
        results.innerHTML += "Total Shipping Cost: $" + shippingCost.toFixed(2) + "<br>";
        results.innerHTML += "Tax: " + ((taxFactor - 1) * 100).toFixed(2) + "% (" + shippingState + ")";
    }

    document.addEventListener("DOMContentLoaded", function () {
        cartForm.addEventListener("submit", totalEstimator);

        estimatorBtn.disabled = true;

        state.addEventListener("change", function () {
            estimatorBtn.disabled = (state.value === "");
        });
    });

}());