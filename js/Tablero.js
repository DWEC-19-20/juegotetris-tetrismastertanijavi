class Tablero {

    constructor(filas, columnas, tamañoCuadrado, ctx) {
        // inicializa el tablero todos los elementos de color WHITE	
        this.fila = filas;
        this.columna = columnas;
        this.tamañoCuadrado = tamañoCuadrado;
        this.ctx = ctx;
        this.tablero = [];
    }


    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => {
        if (this.tablero[y][x] == "white") {
            return true;
        } else {
            return false;
        }
    }

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.tamañoCuadrado, y * this.tamañoCuadrado, this.tamañoCuadrado, this.tamañoCuadrado);
        this.ctx.strokeStyle = "BLACK";
        this.ctx.strokeRect(x * this.tamañoCuadrado, y * this.tamañoCuadrado, this.tamañoCuadrado, this.tamañoCuadrado);
   
    }

    // dibujar en el canvas según los colores del tablaro
    dibujarTablero = () => {
        for (var r = 0; r < this.fila; r++) {
            this.tablero[r] = [];
            for (var c = 0; c < this.columna; c++) {
                this.tablero[r][c] = "white";
            }
        }

        for (var r = 0; r < this.fila; r++) {
            for (var c = 0; c < this.columna; c++) {
                this.dibujarCasilla(c, r, this.tablero[r][c]);
            }
        }
    }

    get filas() { return this.filas }

    set filas(fila) { this.filas = fila }

    get columnas() { return this.columnas }

    set columnas(columna) { this.columnas = columna }

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
        return this.tablero[f][c];
    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {
        this.tablero[f][c] = color;
    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => {
        for(let r=0; r<this.filas;r++){

            let filallena=true;
            for (let c=0; c<this.columnas;c++){
                filallena=filallena && (tablero[r][c]!="white");
            }
            if (filallena){
                for(let y=r;y>1;y--){
                    for (let c=0;c<this.columnas;c++){
                        this.tablero[y][c]=board[y-1][c];
                    }
                }

                for (c=0;c<this.columnas;c++){
                    this.tablero[0][c]="white";
                }
                
            }
        }
        this.dibujarTablero();
     }

}