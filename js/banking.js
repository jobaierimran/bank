
function getInputValue(inputId){
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  inputField.value = '';
  return amountValue;
}
function updateTotalField (totalFieldId, amount){
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  const newDepositTotal = previousTotal + amount;
  totalElement.innerText = newDepositTotal;
}

function getCurrentBalance (){
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalance (amount, isAdd){
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true){
    const newBalancetotal = previousBalanceTotal + amount;
  balanceTotal.innerText = newBalancetotal;
}
else {
  const newBalancetotal = previousBalanceTotal - amount;
  balanceTotal.innerText = newBalancetotal;
}
}

document.getElementById('deposit-button'). addEventListener('click', function(){
  const depositAmount = getInputValue('deposit-input');
  if (depositAmount > 0) {
  updateTotalField('deposit-total', depositAmount);
  updateBalance(depositAmount, true);
  }
})


document.getElementById('withdraw-button').addEventListener('click', function(){
  const withdrawAmount = getInputValue('withdraw-input');
  const currentBalance = getCurrentBalance();
  if (withdrawAmount > 0 && withdrawAmount < currentBalance){
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false)
  }
  if (withdrawAmount > currentBalance){
    alert('Please! Check your Balance')
  }
})