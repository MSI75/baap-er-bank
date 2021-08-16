// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function() {
    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText);

    // update deposit total 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newdepositAmount;
    depositTotal.innerText = newDepositTotal;


    // updeta account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previouseBalanceTotal + newdepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';
});

// bandle withdraw button even bandler
document.getElementById('withdraw-button').addEventListener('click', function() {
    // get the amount withdraw 
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update ccount balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previouseBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the withdraw input Field 
    withdrawInput.value = '';
})