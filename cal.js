const num1 = parseFloat(prompt('Enter first number '))
const operator = prompt('Enter one of the operators (+ - / *) ')
const num2 = parseFloat(prompt('Enter Second Number '))

let result = 0
if (isNaN(num1) || isNaN(num2)) {
    alert('Input only digits')
}else{
    if(operator === '+'){
        result = num1 + num2
    }else if(operator === '-'){
        result = num1 - num2
    }else if(operator === '/'){
        result = num1 / num2
    }else if(operator === '*'){
        result = num1 * num2
    }
    alert(num1 + ''+ operator + ''+ num2 + '=' + result)
}