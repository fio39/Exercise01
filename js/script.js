let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", 1000);
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-05-30");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 1000);
    }
}

start();

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
        expenseItem = prompt(`Введите обязательную 
                              статью расходов в этом месяце`);
        expenseCost = prompt("Во сколько обойдется?");
    
        if( (typeof(expenseItem)) == 'string' && expenseItem != null &&
            expenseItem != '' && expenseCost != '') {
    
            appData.expenses[expenseItem] = expenseCost;
    
        } else {
            i--;
        }
    }
}

enteryExpense();

function chooseOptExpenses() {
    const optionalExpenses = {};
    for(let i = 0; i < 3; i++) {
        let optionalExpensesItem = prompt(`Введите название 
                                           дополнительной статьи расходов`);
        let optionalExpensesCost = prompt(`Веедите 
            сумму дополнительныx расходов по статье ${optionalExpensesItem}`);

        optionalExpenses[optionalExpensesItem] = optionalExpensesCost;
    }
}

function detectDayBudget() {
    appData.moneyDay = (appData.money / 30).toFixed(2);
    alert("Дневной заработок: " + appData.moneyDay); 
    console.log(appData);
}



function detectLevel() {
    if(appData.moneyDay < 1000) {
        console.log('Низкий доход'); 
    } else if(appData.moneyDay >=1000 && appData.moneyDay < 3000) {
        console.log('Средний доход');
    } else if(appData.moneyDay >= 3000) {
        console.log('Высокий доход');
    } else {
        console.log('Доход не определен');
    }
}

detectLevel();

function enterySaving() {
    if(appData.saving) {
        let savingAccount = +prompt('Введите сбережения',1000);
        let savingProcent = +prompt('введите процент', 12);
        appData.additionIncome = savingAccount/100/12 * savingProcent;
        alert(`Ежемесечный дополнительный доход от сбережений 
               составляет: ${appData.additionIncome}`);  
    }
}

enterySaving();