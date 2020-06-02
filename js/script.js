let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", 1000);
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-05-30");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 1000);
    }
}

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

function enteryExpense() {
    for(let i = 0; i < 2; i++) {
        expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
        expenseCost = prompt("Во сколько обойдется?");
    
        if( (typeof(expenseItem)) == 'string' && expenseItem != null &&
            expenseItem != '' && expenseCost != '') {
    
            appData.expenses[expenseItem] = expenseCost;
    
        } else {
            i--;
        }
    }
}


appData.moneyDay = (appData.money / 30).toFixed(2);

alert("Дневной заработок: " + appData.moneyDay); 
console.log(appData);

function enterySaving() {
    if(appData.saving) {
        let savingAccount = +prompt('Введите сбережения',1000);
        let savingProcent = +prompt('введите процент', 12);
        appData.additionIncome = savingAccount/100/12 * savingProcent;
        alert(`Ежемесечный дополнительный доход от сбережений: ${appData.additionIncome}`);  
    }
}

enterySaving();