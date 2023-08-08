document.getElementById('calculate-btn').addEventListener('click', calculateExpenses);

function calculateExpenses() {
  const monthlyBudget = parseFloat(document.getElementById('monthly-budget').value);
  const expenseList = document.getElementById('expense-list');
  const savingsList = document.getElementById('savings-list');
  const remainingBudgetElement = document.getElementById('remaining-budget');
  expenseList.innerHTML = '';
  savingsList.innerHTML = '';

  if (isNaN(monthlyBudget)) {
  alert('Please enter a valid monthly budget.');
  return;
  }

  const taxPercentage = 0.2; 
  const savingsPercentage = 0.1;

  const remainingBudget = monthlyBudget * (1 - taxPercentage - savingsPercentage);

  let totalExpenses = 0;
  let expenseInputs = document.getElementsByClassName('expense-input');
  
  for (let i = 0; i < expenseInputs.length; i++) {
  const expenseAmount = parseFloat(expenseInputs[i].value);
  const expenseItem = document.createElement('div');
  expenseItem.classList.add('expense-item');
  expenseItem.textContent = `Expense ${i + 1}: ${expenseAmount.toFixed(2)}`;
  expenseList.appendChild(expenseItem);
  }

  const taxAmount = monthlyBudget * taxPercentage;
  const savingsAmount = monthlyBudget * savingsPercentage;

  const taxItem = document.createElement('div');
  taxItem.classList.add('savings-item');
  taxItem.textContent = `Taxes: ${taxAmount.toFixed(2)}`;
  savingsList.appendChild(taxItem);

  const savingsItem = document.createElement('div');
  savingsItem.classList.add('savings-item');
  savingsItem.textContent = `Savings: ${savingsAmount.toFixed(2)}`;
  savingsList.appendChild(savingsItem);

  const remainingBudgetItem = document.createElement('div');
  remainingBudgetItem.classList.add('savings-item');
  remainingBudgetItem.textContent = `Remaining Budget: ${remainingBudget.toFixed(2)}`;
  savingsList.appendChild(remainingBudgetItem);

  document.getElementById('expenses-container').style.display = 'block';
  document.getElementById('savings-container').style.display = 'block';
}