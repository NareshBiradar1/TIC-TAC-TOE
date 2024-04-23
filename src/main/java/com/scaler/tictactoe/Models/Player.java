package com.scaler.tictactoe.Models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Player {

    String name;
    Symbol symbol;

    PlayerState playerState;
}
