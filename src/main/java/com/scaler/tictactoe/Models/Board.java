package com.scaler.tictactoe.Models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Board {

    int size;
    List<List<Cell>> cells ;
}
