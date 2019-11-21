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
        this.y = -4;
        this.x = 4;
    }

    // rota la piezaentre las distintas formas del tetrominio
    // de debe controlar que si está muy cerca de las paredes algunas no pueden girar
    rotar = () => { }


    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {
        for (var i = 0; i < this.activeTetromino.length; i++) {
            for (var j = 0; j < this.activeTetromino.length; j++) {
                if (this.activeTetromino[i][j]) {
                    this.tablero.dibujarCasilla(this.x + i, this.y + j, color);
                }
            }
        }
    }

    // dibuja el color de una pieza
    dibujar = () => {
        this.rellenar(this.color);
    }

    // borra una pieza rellenandola de casillas blancas
    borrar = () => { this.rellenar("white"); }

    // mover abajo la pieza, si queda fijada, deberá obtener una nueva
    moverAbajo = () => {
        /*if (this.colision(x,y++,this.activeTetromino)){
            this.fijar();
        }else{*/
        if(this.y<20){
        this.borrar();
        this.y++;
        this.dibujar();
        
        console.log(this.tablero.tablero);
        } else{
            this.fijar();
        }
    }
    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {
        this.borrar();
        this.x++;
        this.dibujar();
    }

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
        this.borrar();
        this.x--;
        this.dibujar();
    }

// fijar pieza cuando choca con el suelo u otra pieza
// hay que comprobar si se ha formado una o varias lineas para borrarlas 
fijar = () => {
    for (var r = 0; r < this.activeTetromino.length; r++) {
        for (var c = 0; c < this.activeTetromino.length; c++) {
            if (!this.activeTetromino[r][c]) {
                continue;
            } if (this.y + r < 0) {
                gameover = true;
            }
            this.tablero.setCasilla(r,c,this.color);
        }
    }
    console.log("quieto parao");
    Juego._pieza = juego.piezaAleatoria();    
    console.log(juego._pieza);
}

// Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
colision = (x, y, pieza) => {
    if(x>=0 && x<10 && y<20){
        if (this.tablero.esVacio(x,y)) return true;
        else return false;
    }
    else return false;

}
    
}