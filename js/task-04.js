const counterValue = 0;

const counter = {
    value: counterValue,
    decrement() {
        // console.log(`decrement -> this`, this);
        this.value -= 1;
    },
    increment() {
        // console.log(`increment -> this`, this);
        this.value += 1;
    },

};

const incrementBtn = document.querySelector("[data-action = 'increment']");
const decrementBtn = document.querySelector("[data-action = 'decrement']");
const valueEl = document.querySelector(`#value`);
const counterButton = document.querySelector('#counter ');

decrementBtn.addEventListener(`click`, function () {
    
    counter.decrement();
    // console.log(counter);
    valueEl.textContent = counter.value;

});

incrementBtn.addEventListener(`click`, function () {
    
    counter.increment();
    // console.log(counter);
    valueEl.textContent = counter.value;

});

// const counterValue = 0;

// const counter = {
//     value: counterValue,
//     decrement() {
//         // console.log(`decrement -> this`, this);
//         this.value -= 1;
//     },
//     increment() {
//         // console.log(`increment -> this`, this);
//         this.value += 1;
//     },

// };

// const refs = {
//  incrementBtn: document.querySelector("[data-action = 'increment']"),
//  decrementBtn: document.querySelector("[data-action = 'decrement']"),
//  valueEl: document.querySelector(`#value`),
// //  counterButton = document.querySelector('#counter ');
// }

// refs.decrementBtn.addEventListener()

// decrementBtn.addEventListener(`click`, function () {
    
//     counter.decrement();
//     // console.log(counter);
//     valueEl.textContent = counter.value;

// });

// incrementBtn.addEventListener(`click`, function () {
    
//     counter.increment();
//     // console.log(counter);
//     valueEl.textContent = counter.value;

// });

