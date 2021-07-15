import React from "react";


class App extends React.Component{
  render(){
    return(
      
      <div>
      <p>Meu primeiro paragrafo</p>

      <p>Meu segundo paragrafo</p>
      <p>
        { new Date().toLocaleDateString('pt-PT') }
      </p>
      </div>

      );
  }
}

export default App;
