class Tablero {

    constructor(filas, columnas, tamañoCuadrado, ctx) {
        // inicializa el tablero todos los elementos de color WHITE	
        this.fila=filas;
        this.columna=columnas;
        this.tamañoCuadrado=tamañoCuadrado;
        this.ctx = ctx;	
        this.tablero=[];
    }


    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => { }

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.tamañoCuadrado, y * this.tamañoCuadrado, this.tamañoCuadrado, this.tamañoCuadrado);
        this.ctx.strokeStyle = "BLACK";
        this.ctx.strokeRect(x * this.tamañoCuadrado, y * this.tamañoCuadrado, this.tamañoCuadrado, this.tamañoCuadrado);
    }

    // dibujar en el canvas según los colores del tablaro
    dibujarTablero = () => {
        for(var r=0; r < this.fila; r++) {
            this.tablero[r]=[];
            for (var c = 0; c < this.columna; c++) {
                this.tablero[r][c]="white";                
            }
        }

        for (var r = 0; r < this.fila; r++) {
            for (var c = 0; c < this.columna; c++) {
                this.dibujarCasilla(c, r, this.tablero[r][c]);
            }
        }
    }

    get filas() {return this.filas}

    set filas(fila) {this.filas=fila}

    get columnas() {return this.columnas}

    set columnas(columna) {this.columnas=columna}

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
        return f,c;
    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {
        this.f=f;
        this.c=c;
        this.color=color;
    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => { }

}