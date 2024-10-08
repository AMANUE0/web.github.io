const calculadora = (a, b, operador, callback)  => {
    setTimeout( () => {
        let resultado ;
        switch (operador) {
            case 'suma':
                resultado = a + b;
                break;
            case 'resta':
                resultado = a - b;
                break;
            case 'multiplicacion':
                resultado = a * b;
                break;
            case 'division':
                resultado = a / b;
                break;
            default:
                return callback('Operador no valido');
        }
        callback(resultado);
    }, 2000)
}
const mostrarResultado = (resultado) => {
    console.log(`El resultado de la operacion es ${resultado}`);
}

calculadora(10, 10,'suma', mostrarResultado)