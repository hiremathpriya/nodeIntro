const priya = {

    "accounts": [
        {
            "name": "Priya account 1",
            "balance": 450000.00
        },
        {
            "name": "Priya Account 2",
            "balance": 20000

        },
        {
            "name": "Priya Account 3",
            "balance": 200000

        }
    ]
};

document.addEventListener("DOMContentLoaded", function() {

    console.log('I\'m making a call to node api');

    let accountsContainer = document.getElementById('accounts');

    priya.accounts.forEach(function(item, index){

        console.log(item);

        const accountDiv = document.createElement("div");
        accountDiv.className = "account";

        const nameSpan = document.createElement("span");
        nameSpan.className = "accountName";
        nameSpan.innerText = item.name;

        const balanceSpan = document.createElement("span");
        balanceSpan.className = "balance";
        balanceSpan.innerText = item.balance;

        accountDiv.appendChild(nameSpan);
        accountDiv.appendChild(balanceSpan);

        accountsContainer.appendChild(accountDiv);
        

    });
});