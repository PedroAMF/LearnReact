import React from "react";


class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      linguagem: 'JavaScript',
      tipo: 'programador',
      dedico: true,
      bio: ''
    }

    this.handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
    }
    this.chanceName = (event) => { this.setState({ nome: event.target.value }) }
    this.chanceSelect = (event) => { this.setState({ linguagem: event.target.value }) }
    this.changeRadio = (event) => { this.setState({ tipo: event.target.value }) }
    this.chanceCheckbox = (event) => { this.setState({ dedico: event.target.checked }) }
    this.chanceBio = (event) => { this.setState({ bio: event.target.value }) }

  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome: <input type="text"
              value={this.state.nome}
              onChange={this.chanceName} />
          </label>

          <br></br>
          <br></br>

          <label>
            Linguagem favorita
            <select value={this.state.linguagem}
              onChange={this.chanceSelect}>
              <option>JavaScript</option>
              <option>Python</option>
              <option>C#</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <label>
            Sou:<br></br>
            <input type="radio"
              value='programador'
              checked={this.state.tipo == 'Programador'}
              onChange={this.changeRadio} /> Programador
            <br></br>
            <input type="radio"
              value='estudante'
              checked={this.state.tipo == 'Estudante'}
              onChange={this.changeRadio} /> Estudante
          </label>
          <br></br>
          <br></br>
          <label>
            <input type="checkbox"
              checked={this.state.dedico}
              onChange={this.chanceCheckbox}/>Dedico 8h semanais aos estudos
          </label>
          <br></br>
          <br></br>
          <label>
            Bio:
            <br></br>
            <textarea cols="50"
            value={this.state.bio}
            onChange={this.chanceBio}/>
          </label>
          <input type="submit" value="Salvar"></input>
        </form>
      </>
    );
  }
}
export default Formulario;
