
let board = [" "," "," "," "," "," "," "," "," "];
let setPlayer = parseInt(Math.random() * 2);
let symbolPlayer = ["Iron_Man","Captain_America"];
let winner = " " ;
let rounds = 1;
let roudsPc = 0;
let pcFirstPlayer = 0;

/* Função que atualizar o tabuleiro e controla o preenchimento em campos já preenchidos */
function updateBoard(position){
    if( position === "squareFilled" || board[position] === "Iron_Man"){
        return 0;
    }else{
        if(setPlayer){
            board[position] = "Captain_America";
            setPlayer = 0;
            return 1;
        }else{
            board[position] = "Iron_Man";
            setPlayer = 1;
            return 1;
        }
    }
}
/* Função que define o ganhador ou empate */
function defWinner (){
    let squares = document.querySelectorAll(".square");
    let i = 0;
    rounds++;
    if( (board[i] === board[i+4]) && (board[i] === board[i+8]))
        if(board[i] === "Captain_America" || board[i] === "Iron_Man"){
            winner = board[i];
            return 1;
    }
    if( (board[i+2] === board[i+4]) && (board[i+2] === board[i+6]) )
        if(board[i+2] === "Captain_America" || board[i+2] === "Iron_Man"){
            winner = board[i+2];
            return 1;
    }
    for ( i = 0;i < 8; i+=3 ){
        if(board[i] === board[i+1] && board[i] === board[i+2] )
            if(board[i] === "Captain_America" || board[i] === "Iron_Man"){
                winner = board[i];
                return 1;
        }
    }
    for ( i = 0;i<3;i++){
        if(board[i] === board[i+3] && board[i] === board[i+6] )
            if(board[i] === "Captain_America" || board[i] === "Iron_Man"){
                winner = board[i];
                return 1;
        }
    }
    if(rounds >= 10){
        winner = "EMPATE";
        return 1;
    }
    return 0;
}

/* Função que define a jogada do PC */
function pcPlayer (){
    let position ;
    let a = false;
    
    if(setPlayer){
        if(rounds === 1){
                while(a === false){
                    position = parseInt(Math.random()*9);
                    if(position === 0 ){
                        a = true;
                    }else if(position === 2 ){
                        a = true;
                    }else if(position === 6 ){
                        a = true;
                    }else if(position === 8 ){
                        a = true;
                    }
                }
                jogoDaVelha(position);
                return 1;
        }else if(rounds === 3){
                if(board[0] ===  "Captain_America"){
                    if(board[8] != "Iron_Man"){
                        jogoDaVelha(8);
                        return 1;
                        }
                    } 
                    if(board[2] ===  "Captain_America"){
                            if(board[6] != "Iron_Man"){
                                jogoDaVelha(6);
                                return 1;
                                }
                    }
                    if(board[6] ===  "Captain_America"){
                                if(board[2] != "Iron_Man"){
                                    jogoDaVelha(2);
                                    return 1;
                                    }
                    }
                    if(board[8] ===  "Captain_America"){
                                    if(board[0] != "Iron_Man"){
                                        jogoDaVelha(0);
                                        return 1;
                                        }    
                    }
                    if(playToWin()){
                        return 1;
                        }else{
                            return(randomPlay());
                            }
            }else if(rounds === 5){
                    if(playToWin()){
                        return 1;
                    }else{
                        if(board[0] === "Captain_America"){
                            if(board[6] != "Iron_Man"){
                                jogoDaVelha(6)
                                return 1;
                                }
                            if(board[2] != "Iron_Man"){
                                jogoDaVelha(2)
                                return 1;
                            }
                        } 
                        if(board[2] === "Captain_America"){
                            if(board[0] != "Iron_Man"){
                                jogoDaVelha(0)
                                return 1;
                                } 
                            if(board[8] != "Iron_Man"){
                                jogoDaVelha(8)
                                return 1;
                            }
                        }
                    }
                    return(randomPlay());
                }else if(rounds === 2){
                            if(board[4] === "Iron_Man"){
                                while(a === false ){
                                    let w = parseInt(Math.random()*9);
                                    if( w === 0 || w === 2 || w === 6 || w === 8 ){
                                        jogoDaVelha(w);
                                        a = true;
                                    }
                                }
                                return 1;
                            } else {
                                jogoDaVelha (4)
                                return 1;
                            }

            } else if(rounds === 4){
                        if(playToWin()){
                            return 1;
                        }else{
                            while(a === false ){
                                let w = parseInt(Math.random()*9);
                                if( w === 1 || w === 3 || w === 5 || w === 7 ){
                                    if(board[w] != "Iron_Man"){
                                        jogoDaVelha(w);
                                        a = true;
                                    }  
                                } 
                            }
                            return 1; 
                        }
                    }else if(playToWin()){
                            return 1;
                            }else{
                                return(randomPlay());
                                }   
    }
}
/* Função que irá prever se tem um jogada em específico para o PC ganhar ou evitar a derrota */
function playToWin(){
    let i = 0;
    if(!playToWinEscudo()){
        if(board[i] === board[i+4]){
            if(board[i] != " " && board[8] === " "){
                jogoDaVelha(8);
                return 1;
            } 
        }
        if(board[i] === board[i+8]){
            if(board[i] != " " && board[4] === " "){
                jogoDaVelha(4);
                return 1;
            }
        } 
        if(board[i+4] === board[i+8]){
            if(board[i+4] != " " && board[0] === " "){
                jogoDaVelha(0);
                return 1;
            }
        } 
        if(board[i+2] === board[i+4]){
            if(board[i+2] != " " && board[6] === " "){
                jogoDaVelha(6);
                return 1;
            }
        } 
        if(board[i+2] === board[i+6]){
            if(board[i+2] != " " && board[4] === " "){
                jogoDaVelha(4);
                return 1;
            }
        } 
        if(board[i+4] === board[i+6]){
            if(board[i+4] != " " && board[2] === " "){
                jogoDaVelha(2);
                return 1;
            }
        }
                    for ( i = 0;i < 9; i+=3 ){
                        if(board[i] === board[i+1]){
                            if(board[i] != " " && board[i+2] === " "){
                                jogoDaVelha(i+2);
                                return 1;
                            } 
                        }
                        if(board[i] === board[i+2]){
                            if(board[i] != " " && board[i+1] === " "){
                                jogoDaVelha(i+1);
                                return 1;
                            } 
                        }
                        if(board[i+1] === board[i+2]){
                            if(board[i+1] != " " && board[i] === " "){
                                jogoDaVelha(i);
                                return 1;
                            } 
                        }
                    }
                    for ( i = 0;i < 3; i++ ){
                        if(board[i] === board[i+3]){
                            if(board[i] != " " && board[i+6] === " "){
                                jogoDaVelha(i+6);
                                return 1;
                            } 
                        }
                        if(board[i] === board[i+6]){
                            if(board[i] != " " && board[i+3] === " "){
                                jogoDaVelha(i+3);
                                return 1;
                            } 
                        }
                        if(board[i+3] === board[i+6]){
                            if(board[i+3] != " " && board[i] === " "){
                                jogoDaVelha(i);
                                return 1;
                            } 
                        }
                    }
        return 0;
    }
    return 1;

}

/* Mesma função do playtowin, porém utilizada para o PC dar preferência para a jogada que fará com que ganhe a partida */
function playToWinEscudo(){
    let i = 0;
    if(board[i] === board[i+4]){
        if(board[i] == "Captain_America" && board[8] === " "){
            jogoDaVelha(8);
            return 1;
        } 
    }
    if(board[i] === board[i+8]){
        if(board[i] == "Captain_America" && board[4] === " "){
            jogoDaVelha(4);
            return 1;
        }
    } 
    if(board[i+4] === board[i+8]){
        if(board[i+4] == "Captain_America" && board[0] === " "){
            jogoDaVelha(0);
            return 1;
        }
    } 
    if(board[i+2] === board[i+4]){
        if(board[i+2] == "Captain_America" && board[6] === " "){
            jogoDaVelha(6);
            return 1;
        }
    } 
    if(board[i+2] === board[i+6]){
        if(board[i+2] == "Captain_America" && board[4] === " "){
            jogoDaVelha(4);
            return 1;
        }
    } 
    if(board[i+4] === board[i+6]){
        if(board[i+4] == "Captain_America" && board[2] === " "){
            jogoDaVelha(2);
            return 1;
        }
    }
                for ( i = 0;i < 9; i+=3 ){
                    if(board[i] === board[i+1]){
                        if(board[i] == "Captain_America" && board[i+2] === " "){
                            jogoDaVelha(i+2);
                            return 1;
                        } 
                    }
                    if(board[i] === board[i+2]){
                        if(board[i] == "Captain_America" && board[i+1] === " "){
                            jogoDaVelha(i+1);
                            return 1;
                        } 
                    }
                    if(board[i+1] === board[i+2]){
                        if(board[i+1] == "Captain_America" && board[i] === " "){
                            jogoDaVelha(i);
                            return 1;
                        } 
                    }
                }
                for ( i = 0;i < 3; i++ ){
                    if(board[i] === board[i+3]){
                        if(board[i] == "Captain_America" && board[i+6] === " "){
                            jogoDaVelha(i+6);
                            return 1;
                        } 
                    }
                    if(board[i] === board[i+6]){
                        if(board[i] == "Captain_America" && board[i+3] === " "){
                            jogoDaVelha(i+3);
                            return 1;
                        } 
                    }
                    if(board[i+3] === board[i+6]){
                        if(board[i+3] == "Captain_America" && board[i] === " "){
                            jogoDaVelha(i);
                            return 1;
                        } 
                    }
                }
        return 0;
           

}
/* Caso não haja nenhum jogada específica, essa função irá gerar uma jogada aleatória */
function randomPlay(){
    let position ;
    i = 0;

    while( !i ){
        position = parseInt(Math.random()*9);
        if(board[position] === " "){
            jogoDaVelha(position);
            i = 1;
            return 1;
        }
    }
    return 0;
}