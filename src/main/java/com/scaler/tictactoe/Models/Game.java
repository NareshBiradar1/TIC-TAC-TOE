package com.scaler.tictactoe.Models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class Game {

    Board board;
    List<Player> players;
    List<Move> moves;
    GameState gameState ;
    Player winner;
    int nextPlayerIndex ;
}
