// l147 project: banklist app
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
const displayMovements = function (movements) {
  // empty container
  containerMovements.innerHTML = ''; // text content -> only text content, innerHTML -> all tags + content

  // add data in movements
  console.log(movements);
  movements.forEach(function (mov, i) {
    const transaction = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
          <div class="movements__row">
              <div class="movements__type movements__type--${transaction}"> ${
      i + 1
    } ${transaction}</div>
              <div class="movements__value">${mov}€</div>
          </div>
        `;
    // console.log(html);
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);


// l152: computing usernames
// there is a very less diff between map and forEach loop, one returns new array and second work on called array
const addInitials = function (account) {
    const initials = account.owner
    .split(' ')
    .map(value => value[0])
    .join('').toLowerCase();
    account.userName = initials;
};

const createUserName = function(accounts){
    accounts.forEach(addInitials);
}

createUserName(accounts);
console.log(accounts);
// side effects: do some work without returing anything

// calc total balance of each account 
console.log('calc account balance');
const calcBalance = function(account){
    const accountBalance = account.movements.reduce(function(accumulator, currVal, index, array){
        return accumulator + currVal;
    },0);
    account.balance = accountBalance;
}

const addAccountBalance = function(accounts){
    accounts.forEach(calcBalance);
}
addAccountBalance(accounts);
console.log(accounts);

const calcPrintBalance = function(movements){
    const balance = movements.reduce((acc, curr) => acc+curr, 0);
    return balance;
}
const acc1Balance = calcPrintBalance(account1.movements);
labelBalance.textContent = `${acc1Balance} EUR`;



