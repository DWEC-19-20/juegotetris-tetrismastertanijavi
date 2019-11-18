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
        this.borrar();
        this.y++;
        this.dibujar();
    }

    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {
        this.borrar();
        this.x++;
        this.dibujar();
    }

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
        if (!this.colision(this.x,this.y--,this.activeTetromino)){
            this.borrar();
            this.x--;
            this.dibujar();} else{
                this.fijar();
            }
        
    }
}
    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => { 
        for (r=0;r<this.activeTetromino.length;r++){
            for(c=0;c<this.activeTetromino.length;c++){
                if(!this.activeTetromino[r][c]){
                    continue;
                } if (this.y+r<0){
                    gameover=true;
                }
                board[this.y+r][this.x+c]=this.color;
            }
        }
    }

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y, param) => {
      for (var a=0;a<this.param.length;a++){
        for (var b=0;b<this.param.length;b++){
            if (!param[a][b]){
                if (x<0||x>=a||y>=0){
              return true;
            }
            }
            
        }
      }
    }