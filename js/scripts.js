(function () {
    "use strict";
    
    const cartForm = document.getElementById("cart-hplus"),
          state = document.getElementById("s-state"),
          etimatorBtn = document.getElementById("btn-estimate");
    
    function totalEstimator(e) {
        e.preventDefault();
        
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        cartForm.addEventListener("submit", totalEstimator);
        
        etimatorBtn.disabled = true;
        
        state.addEventListener("change", function () {
            etimatorBtn.disabled = (state.value === "");
        });
    });
    
}());