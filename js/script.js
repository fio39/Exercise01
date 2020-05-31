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


for(let i = 0; i < 2; i++) {
    console.log('start i: ' + i);
    expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
    expenseCost = prompt("Во сколько обойдется?");

    if( (typeof(expenseItem)) == 'string' && expenseItem != null &&
        expenseItem != '' && expenseCost != '') {

        appData.expenses[expenseItem] = expenseCost;
        console.log('continue i: ' + i);

    } else {
        i -= 2
        console.log('return i: ' + i);
    }
    console.log('finish i: ' + i);

}


appData.moneyDay = appData.money / 30;

alert("Дневной заработок: " + appData.moneyDay); 
console.log(appData);