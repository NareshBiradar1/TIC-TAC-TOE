package com.scaler.tictactoe.Models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Cell {

    Player player;
    int row;
    int col;
    CellState cellState;
}
