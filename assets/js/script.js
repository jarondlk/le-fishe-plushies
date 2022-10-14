// Display Toast Message
function displayToast() {
            var toastElList = [].slice.call(document.querySelectorAll('.toast'))
            var toastList = toastElList.map(function (toastEl) {
                // Creates an array of toasts (it only initializes them)
                return new bootstrap.Toast(toastEl) // No need for options; use the default options
            });
            toastList.forEach(toast => toast.show()); // This show them

            console.log(toastList); // Testing to see if it works
        };

function orderSuccess() {
    temp = document.getElementById("totalPriceFinal").innerHTML;
    alert("Total price of your order: ฿" + temp + "\nYour order has been processed sucessfully");
}