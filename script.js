// Mendapatkan semua elemen dengan class number dan menambahkan event listener ketika di klik
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

// Fungsi untuk mengupdate tampilan kalkulator
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

// Inisialisasi variabel prevNumber, calculationOperator, dan currentNumber
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

// Fungsi untuk menginput angka
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number 
    } else {
        currentNumber += number
    }
}

// Mendapatkan semua elemen dengan class operator dan menambahkan event listener ketika salah satu di klik
const operators = document.querySelectorAll('.operator,.percentage');
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
        updateScreen(prevNumber+calculationOperator)
    })
})

// Fungsi untuk menginput operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

// Mendapatkan elemen dengan class equal-sign dan menambahkan event listener ketika di klik
const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

// Fungsi untuk melakukan perhitungan aritmatika
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/':
            result = prevNumber / currentNumber
            break
        case '%':
            result = parseFloat(prevNumber)/100
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

// Mendapatkan elemen dengan class all-clear dan menambahkan event listener ketika di klik
const clearBtn = document.querySelector('.all-clear')
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

// fungsi hpus pada  tombol AC
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

// Fungsi untuk menginput titik desimal
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

// Mendapatkan elemen dengan class decimal dan menambahkan event listener ketika di klik
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
