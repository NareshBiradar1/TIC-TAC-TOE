package com.scaler.tictactoe.Models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Cell {

    private Player player;
    private int row;
    private int col;
    private CellState cellState;
}
