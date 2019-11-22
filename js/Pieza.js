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
        this.x = 4;
        this.y = -4;
    }

    // rota la piezaentre las distintas formas del tetrominio
    // de debe controlar que si está muy cerca de las paredes algunas no pueden girar
    rotar = () => {

        this.borrar();
        this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.dibujar();
        this.tablero.caer();
    }


    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {
        for (var i = 0; i < this.activeTetromino.length; i++) {
            for (var j = 0; j < this.activeTetromino.length; j++) {
                if (this.activeTetromino[j][i]) {
                    this.tablero.dibujarCasilla(this.x + j, this.y + i, color);
                }
            }
        }
    }

    // dibuja el color de una pieza
    dibujar = () => {
        this.rellenar(this.color);
    }

    // borra una pieza rellenandola de casillas blancas
    borrar = () => { this.rellenar("white") }

    // mover abajo la pieza, si queda fijada, deberá obtener una nueva
    moverAbajo = () => {
       
        if (this.y<15) {
            this.borrar();
            this.y++;
            this.dibujar();
        } else {
            this.fijar();
        }
    }

    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {
        this.borrar();
        this.x++;
        this.dibujar();
        this.tablero.caer();
    }

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
        this.borrar();
        this.x--;
        this.dibujar();
        this.tablero.caer();
    }

    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => {
        for (var r = 0; r < this.activeTetromino.length; r++) {
            for (var c = 0; c < this.activeTetromino.length; c++) {
                if (!this.activeTetromino[r][c]) {
                    continue;
                }
                if (this.y + r < 0) {
                    juego.gameOver = true;
                    alert("Game Over");
                    break;
                }
                this.tablero.tablero[this.y+r][this.x+c]=this.color;
            }
        }
        console.log(this.tablero.tablero);
        juego._pieza = juego.piezaAleatoria();
    }

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y, pieza) => {
        for (var f = 0; f < pieza.length; f++) {
            for (var c = 0; c < pieza.length; c++) {
                // si la casilla está vacía la obviamos
                if (!pieza[f][c]) {
                    continue;
                }
                let nuevaX = this.x + c + x;
                let nuevaY = this.y + f + y;
                if (nuevaX < 0 || nuevaX >= this.tablero.columnas || nuevaY >= this.tablero.filas) {
                    return true; // sale del tablero
                }
                if(nuevaY < 0){ // para evitar acceder a tablero[-1]
                    continue;
                }
                if(!this.tablero.esVacio(nuevaY,nuevaX)){
                    return true;
              }
          
            }
        }
        return false;
    }


}