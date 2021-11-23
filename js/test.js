// SWITCH

// const option = 1;
// let message;

// switch (option) {
//     case 1:
//         message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
//         break;
    
//     case 2:
//         message = "Курьер доставит заказ завтра с 9:00 до 18:00";
//         break;
    
//     case 3:
//         message = "Посылка будет отправлена сегодня";
//         break;
    
//     default:
//         message = "Вам перезвонит менеджер";
// }

// console.log(message);

// Цикл for

// for (let i = 0; i < 50; i += 3) {
//     console.log(i);
// }

// console.log("qweqwe");

// Задача 1
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
//     console.log(`ЗП работника ${i} - ${salary}`);
    
//     totalSalary += salary;
// }
// console.log('totalSalary: ', totalSalary);

// Задача 2
// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
    
//     if (i % 2 !== 0) {
//         console.log('НЕ чётное: ', i);
//         continue;
//     }
//     console.log('чётное: ', i);
//     total += i;
//    }

// console.log('total: ', total);

// Задача 3
// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);

// if (payment <= balance) {
//     console.log('ok');

//     balance -= payment;
//     // balance = balance - payment;

//     console.log(`На счету осталось ${balance} кредитов`)
// } else {
//     console.log('На счету недостаточно средств для проведения операции!');
// }

// console.log('Операция завершена');

// Задача 4
// const totalSpent = 5000;
// let payment = 500;
// let discount = 0;

// if (totalSpent < 100) {
//     console.log('Не партнер, скидка 0%');
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовый партнер, скидка 2%');

//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Серебрянный партнер, скидка 5%');

//     discount = 0.05;
// } else {
//     console.log('Золотой партнер, скидка 10%');

//     discount = 0.1;
// }

// payment -= payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);

// работа с DOM
const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]')
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');

let total = 0;

btnAdd.addEventListener('click', function () {
    console.log('click')

    const value = Number(valueInput.value);

    total += value;
    outputEl.textContent = total;
    valueInput.value = '';
})

resetBtn.addEventListener('click', function () {
    total = 0;
    outputEl.textContent = total;
})