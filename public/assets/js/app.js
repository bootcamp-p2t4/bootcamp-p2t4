let log = console.log
log("Hello World");

$(document).ready(function() {
    
    let stockForm = {
        stock: $("#stock"),
        ticker: $("#ticker"),
        price: $("#price"),
        shares: $("#shares")
    }

    let stockList = [];

    // Display stocks currently in database in current period
    displayStocks();

    // Resets stock list with new list
    function initializeStockList() {
        stockForm.empty();
        let rowsToAdd = [];
        for (let i = 0; i < stockList.length; i++) {
            rowsToAdd.push(createNewRow(stockList[i]));
        }
    }
    
    // Display stocks currently in database
    function displayStocks() {
        $.get("/", function(data) {
            stockList = data;
            initializeStockList();
        })
    }
    


});