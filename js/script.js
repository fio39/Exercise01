let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", 1000);
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-05-30");

    while(isNaN(money) || money === '' || money === null) {
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
    savings: false,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let expenseItem = prompt(`Введите обязательную 
                                  статью расходов в этом месяце`);
            let expenseCost = prompt("Во сколько обойдется?");
        
            if( !!expenseItem || !!expenseCost) {
                appData.expenses[expenseItem] = expenseCost;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyDay = (appData.money / 30).toFixed(2);
        alert("Дневной заработок: " + appData.moneyDay); 
    },
    detectLevel: function() {
        if(appData.moneyDay < 1000) {
            console.log('Низкий доход'); 
        } else if(appData.moneyDay >=1000 && appData.moneyDay < 3000) {
            console.log('Средний доход');
        } else if(appData.moneyDay >= 3000) {
            console.log('Высокий доход');
        } else {
            console.log('Доход не определен');
        }
    },
    checkSavings: function() {
        if(appData.savings) {
            let savingAccount = +prompt('Введите сбережения',1000);
            let savingProcent = +prompt('введите процент', 12);
            appData.additionIncome = savingAccount/100/12 * savingProcent;
            alert(`Ежемесечный дополнительный доход от сбережений 
                   составляет: ${appData.additionIncome}`);  
        }
    },
    chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++) {
            let optionalExpensesCost = prompt(`Веедите 
                сумму дополнительныx расходов по статье ${i}`);
            appData.optionalExpenses[i] = optionalExpensesCost;
        }
    },
    chooseIncome: function() {
        //let income = prompt('Введите дополнительный доход','аренда,чаявые, подработка,,"",     возврат       долгов, 0,   "0"');
        let income = 'аренда,чаeвые, подработка,,"   ",     возврат       долгов, 0, "0"';
        let incomeArray = income.split(',');
        
        incomeArray.forEach(function(value, index, array) {
        //   value = value.replace(/ +/g, ' ').trim();
            value =  value.replace(/\s+/g,' ' ) 
                          .replace(/^\s/,'')
                          .replace(/\s$/,''); 
           if(!value || !isNaN(parseInt(value))) {
               array.splice(index, 1);
           } else {
                array[index] = value;                
           } 
        });
        console.log(incomeArray);
        
        appData.income = incomeArray;
    }

};

