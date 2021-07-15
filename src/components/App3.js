import React from "react";


class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: '' };

  }
  chanceName = (event) => {
    this.setState({ nome: event.target.value })
  }

  render() {
    return (

      <div>

        Nome: <input type='text'
          value={this.state.nome}
          onChange={this.chanceName}>

        </input>



        <p>Olá {this.state.nome}</p>

      </div>

    );
  }
}

export default App3;
