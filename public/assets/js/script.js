const log = console.log;
log("Hello World");

$(document).ready(function () {

    // Function to buy stock
    // for (let i = 0; i < 11; i++) {
    //     $("#form-positions-buy" + i).on("click", function (event) {
    //         event.preventDefault();

    //         let newBuy = {
    //             monthly_period: $("monthly_period").val(),
    //             stock: $("#stock").val(),
    //             ticker: $("#ticker").val(),
    //             price: $("#price").val(),
    //             shares: $("#shares").val(),
    //             buyShares: $("#buy_shares").val()
    //         };
    //         log(newBuy);
    //         postNewBuy();

    //     });

    //     function postNewBuy(newBuy) {
    //         $.post("/buy", newBuy, function () {


    //         })
    //     }
    //     $("#buy_shares").val("");

    // }


    // // Function to sell stock
    // for (let i = 0; i < 11; i++) {
    //     $("#form-positions-sell" + i).on("click", function (event) {
    //         event.preventDefault();

    //         let newSell = {
    //             monthly_period: $("monthly_period").val(),
    //             stock: $("#stock").val(),
    //             ticker: $("#ticker").val(),
    //             price: $("#price").val(),
    //             shares: $("#shares").val(),
    //             sellShares: $("#sell_shares").val()
    //         };
    //         log(newSell);
    //         postNewSell();

    //     });

    //     function postNewSell(newSell) {
    //         $.post("/sell", newSell, function () {


    //         })
    //     }
    //     $("#sell_shares").val("");

    // }



});