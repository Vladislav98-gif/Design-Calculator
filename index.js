 const calculatorContainer = document.getElementById('calculator-container');
    const developerInfo = document.getElementById('developer-info');
    const blurInfo = document.getElementById('blur-info');

    // Обробник подій для наведення курсору
    developerInfo.addEventListener('mouseenter', function () {
      // Зробити вікно калькулятора невидимим
      calculatorContainer.style.opacity = '0';
      // Застосувати ефект блюру до всього документу
      document.documentElement.style.filter = 'blur(10px)';
      // Показати інформаційний текст
      blurInfo.style.display = 'block';
    });

    // Обробник подій для відведення курсору
    developerInfo.addEventListener('mouseleave', function () {
      // Зробити вікно калькулятора видимим
      calculatorContainer.style.opacity = '1';
      // Зняти ефект блюру
      document.documentElement.style.filter = 'none';
      // Сховати інформаційний текст
      blurInfo.style.display = 'none';
    });

    let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function appendDigit(digit) {
  if (displayValue === '0') {
    displayValue = digit;
  } else {
    displayValue += digit;
  }
  updateDisplay();
}

function appendSymbol(symbol) {
  if (displayValue !== '0') {
    displayValue += symbol;
  }
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === '') {
    displayValue = '0';
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

// Initial display update
updateDisplay();