import React from "react";


class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: undefined, txtNome: '' };

  }
  chanceTxtName = (event) => {
    this.setState({ txtNome: event.target.value })
  }
  persistName = () => {
    this.setState({ nome: this.state.txtNome })
  }

  render() {
    const renderForm = () =>{

      return (
        <>
          Nome: <input type='text'
            value={this.state.nome}
            onChange={this.chanceTxtName}>

          </input>

          <button onClick={this.persistName}>Salvar</button>
        </>
      );
    }
    const renderTxt = () => {
      return (

        <div>

          <p>Olá {this.state.nome}</p>

        </div>

      );
    }
    return !this.state.nome ? renderForm() : renderTxt();
  }
}

export default App4;
