const display = document.getElementById('display');

    // Handle number/operator input
    function appendToDisplay(value) {
      if (display.value === "Error") clearDisplay();
      
      // Prevent multiple decimals
      if (value === '.') {
        const parts = display.value.split(/[+\-×÷]/);
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes('.')) return;
      }
      
      display.value += value;
    }

    // Clear display
    function clearDisplay() {
      display.value = '';
    }

    // Calculate result
    function calculate() {
      try {
        let expression = display.value
          .replace(/×/g, '*')
          .replace(/÷/g, '/');
        display.value = eval(expression);
      } catch (error) {
        display.value = "Error";
      }
    }

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.key >= '0' && e.key <= '9') appendToDisplay(e.key);
      if (e.key === '.') appendToDisplay('.');
      if (['+', '-', '*', '/'].includes(e.key)) {
        appendToDisplay(e.key === '*' ? '×' : e.key === '/' ? '÷' : e.key);
      }
      if (e.key === 'Enter') calculate();
      if (e.key === 'Escape') clearDisplay();
    });
  </script>
</body>
</html>
