// las piezas y sus colores
const PIEZAS = [
    [Z, "orange"],
    [S, "cyan"],
    [T, "green"],
    [O, "grey"],
    [L, "purple"],
    [I, "red"],
    [J, "yellow"]
];

// La clase pieza
class Pieza {


    constructor(tetromino, color, tablero) {
        // propiedades numeroForma, tetrominioActual, posición x e y en el canvas  	
        this.tablero = tablero; // referencia al tablero para dibujar
        this.tetromino = tetromino; // letra de la pieza
        this.color = color;  
        this.tetrominoN = 0; // empezamos con la primera forma
        this.activeTetromino = this.tetromino[this.tetrominoN];      // array según la letra de la primera forma  
        this.x = 3; 
        this.y = -2;  
    }

    // rota la piezaentre las distintas formas del tetrominio
    // de debe controlar que si está muy cerca de las paredes algunas no pueden girar
    rotar = () => {}


    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {}

    // dibuja el color de una pieza
    dibujar = (PIEZAS) => {
       
    }

    // borra una pieza rellenandola de casillas blancas
    borrar = () => {}

    // mover abajo la pieza, si queda fijada, deberá obtener una nueva
    moverAbajo = () => {}

    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {}

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {}

    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => {}

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y, pieza) => {}



}