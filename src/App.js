import React, { Component } from 'react';
// import logo from './logo.svg';
// import Board from './components/Board'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greet: true,
      board: []
    }
  }

  d = 4; DIM_MAX = 3; DIM_MIN = 9;
  // properties
  tile_r; tile_c; blank_r; blank_c;

  componentWillMount = () => {
    // ensure proper usage

    // enure valid dimension
    if (this.d < this.DIM_MIN || this.d > this.DIM_MAX) {
      // print board must be between DIM_MIN * DIM_MIN and DIM_MAX * DIM_MAX
    }

    // open file for logging


    // this.init()
  }

  clear = () => {
    // do animation
  }

  Greet = () => {
    this.clear() //Todo fade screen
    // this.init()
    return (
      <h1>Welcome To Game Of Fifteen</h1>
    )
  }

  init = () => {
    let b_size = this.d * this.d - 1
    for (var i = 0; i < this.d; i++) {
      for (var j = 0; j < this.d; j++) {
        this.setState( state => {
          state.board[i][j] = b_size--
          return {board: state.board}
        })
      }
    }

    if (this.d % 2 === 0) {
      this.setState( state => {
        state.board[this.d - 1][this.d - 2] = 2
        return {board: state.board}
      })
      this.setState( state => {
        state.board[this.d - 1][this.d - 3] = 1
        return {board: state.board}
      })
    }
  }

  draw = () => {

    for (var i = 0; i < this.d; i++) {
      for (var j = 0; j < this.d; j++) {
        if (this.state.board[i][j] === 0) {
          // print Blank
        } else {
          // print board[i][j]
        }
      }
      // prepare for new row
    }
  }

  flow = () => {
    // log the current state of the board (for testing)
        // for (int i = 0; i < d; i++)
        // {
        //     for (int j = 0; j < d; j++)
        //     {
        //         fprintf(file, "%i", board[i][j]);
        //         if (j < d - 1)
        //         {
        //             fprintf(file, "|");
        //         }
        //     }
        //     fprintf(file, "\n");
        // }
        // fflush(file);
        //
        // // check for win
        // if (won())
        // {
        //     printf("ftw!\n");
        //     break;
        // }
        //
        // // prompt for move
        // printf("Tile to move: ");
        // int tile = get_int();
        //
        // // quit if user inputs 0 (for testing)
        // if (tile == 0)
        // {
        //     break;
        // }
        //
        // // log move (for testing)
        // fprintf(file, "%i\n", tile);
        // fflush(file);
        //
        // // move if possible, else report illegality
        // if (!move(tile))
        // {
        //     printf("\nIllegal move.\n");
        //     usleep(500000);
        // }
        //
        // // sleep thread for animation's sake
        // usleep(500000);
  }

  won = () => {
    let checked = false
    let incr = 1

    for (var i = 0; i < this.d; i++) {
      for (var j = 0; j < this.d; j++) {

        if (this.state.board[i][j] === 0) {
          incr = 0
        }

        if (this.state.board[i][j] !== incr) {
          checked = false
          break
        } else {
          checked = true
        }

        incr++
      }
    }

    if (checked) {
      return true
    } else {
      return false
    }
  }

  move = (tile) => {
    for (let i = 0; i < this.d; i++) {
      for (let j = 0; j < this.d; j++) {
        if (this.state.board[i][j] === tile) {
          this.tile_r = i
          this.tile_c = j
          break
        }
      }
    }

    for (let i = 0; i < this.d; i++) {
      for (let j = 0; j < this.d; j++) {
        if (this.board[i][j] === 0) {
          this.tile_r = i
          this.tile_c = j
          break
        }
      }
    }

    let legal = false;
    let up_r = this.blank_r - 1;
    let up_c = this.blank_c;
    let down_r = this.blank_r + 1;
    let down_c = this.blank_c;
    let left_r = this.blank_r;
    let left_c = this.blank_c - 1;
    let right_r = this.blank_r;
    let right_c = this.blank_c + 1;

    if(this.board[this.tile_r][this.tile_c] === this.board[up_r][up_c]
      || this.board[this.tile_r][this.tile_c] === this.board[down_r][down_c]
      || this.board[this.tile_r][this.tile_c] === this.board[left_r][left_c]
      || this.board[this.tile_r][this.tile_c] === this.board[right_r][right_c])
    {
        legal = true;
    }
    if(legal)
    {
        this.swap();
        return true;
    }
    else
    {
        return false;
    }
  }

  swap = () => {
    let temp = this.state.board[this.tile_r][this.tile_c]
    this.state.board[this.tile_r][this.tile_c] = this.state.board[this.blank_r][this.blank_c];
    this.state.board[this.blank_r][this.blank_c] = temp;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.greet ? <this.Greet /> : ''}

        </header>
      </div>
    );
  }
}

export default App;
