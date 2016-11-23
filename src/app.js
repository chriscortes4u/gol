const React = require('react')
const gol = require('gol-functional')

const App = React.createClass({
  getInitialState() {
    return {
      board: [
        [0,1],
        [1,1]
      ],
      sim: null
    }
  },
  render () {
    const td = (cell) => <td
      className={cell === 1 ? 'bg-yellow' : ''}
      style={{height: '60px', minWidth: '60px'}}
    ></td>
    const tr = (row) => <tr>{row.map(td)}</tr>

    return (
      <div className="pa4">
        <header>
          <h1>Game of Life</h1>
          <div>
            <button>Start</button>
            <button>Stop</button>
          </div>
        </header>
        <hr />
        <main>
          <table>
            {this.state.board.map(tr)}
          </table>
        </main>
      </div>
    )
  }
})

module.exports = App
