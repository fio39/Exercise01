let money;
let time;

money = +prompt("Ваш бюджет на месяц?", 1000);
time = prompt("Введите дату в формате YYYY-MM-DD", "2020-05-30");

const appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};


let expenseItem;
let expenseCost;

expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
expenseCost = prompt("Во сколько обойдется?");

appData.expenses.expenseItem = expenseItem;
appData.expenses.expenseCost = expenseCost;

let moneyDay = appData.money / 30;

alert(moneyDay); 