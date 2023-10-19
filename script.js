let inputString = ''
let memoryValue = 0
const inputField = document.querySelector('input')
const calculatorButtons = document.querySelectorAll('button')
calculatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent
    switch (buttonValue) {
      case '=':
        if (inputString) {
          try {
            inputString = inputString.replace(/%/g, '/100')
            const result = eval(inputString)
            inputField.value = result
            inputString = result.toString()
          } catch (error) {
            // Handle invalid expressions
            navigator.vibrate(200)
            inputField.value = 'Error'
            inputString = ''
          }
        }
        break
      case 'C':
        inputString = ''
        inputField.value = inputString
        break
      case 'M+':
        memoryValue += parseFloat(inputString) ?? 0
        inputString = ''
        break
      case 'M-':
        memoryValue -= parseFloat(inputString) ?? 0
        inputString = ''
        break
      default:
        if (buttonValue === '%') {
          inputString = (parseFloat(inputString) / 100).toString()
        } else {
          inputString += buttonValue
        }
        inputField.value = inputString
        break
    }
  })
})
