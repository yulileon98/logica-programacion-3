function calculateFactorial() {
    // Se obtine el valor del input y quitar espacios en blanco, los espacios no se usan debido a que el input es de tipo numerico
    const input = document.getElementById('inputNumber').value.trim();

    // Se valida si el input es un número
    if (isNaN(input) || input === '') {
        alert('Por favor, ingrese un número válido.');
        return;
    }

    const number = parseInt(input); // Convertir el input a un número entero
    // Se valida si el número es negativo
    if (number < 0) {
        alert('El factorial de un número negativo no existe. Intente con un número positivo por favor');
        return;
    }
    // Calcular el factorial
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Se muestra el resultado en el DOM
    const resultElement = document.getElementById('result');
    resultElement.textContent = `El factorial de ${number} es: ${factorial}`;
}