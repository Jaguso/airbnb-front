import React, {Component} from 'react';
// import './style.scss';
import { createUser } from '../../services'; //OBS: si algo tiene el nombre index, lo llama por default cuando llamamos a la carpeta donde está

class Signup extends Component{
  
  constructor(){
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      checkPassword: ""
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target

    console.log("Evento: ", event)
    console.log("Valores: ", name, value)
    this.setState({[name]: value})  //obs: el input debe tener el mismo nombre que el estado
  }

  validPasswords = () => {
    const {password, checkPassword} = this.state
    return password === checkPassword; 
  }

  onSubmit = async (event) => {
    event.preventDefault();

    if(this.validPasswords()){
      let response = {}
      response = await createUser(this.state).catch(({response}) => alert(response.data.error.errors[0].message))
      if(response) {
        console.log(response.data.id)
      }

    } else{
      alert("Los passwords no coinciden")
    }


  }

  render() {
    const {name, lastname, password, email, checkPassword} = this.state
    return(
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="name">Tu nombre:</label>
                  <input type="text" name="name" 
                    className="form-control" value={name}
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="lastname">Tus Apellidos:</label>
                  <input type="text" name="lastname" 
                    className="form-control" value={lastname}
                    onChange={this.onChangeInput}
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-10 form-group">
                  <label htmlFor="">Tu email:</label>
                  <input type="email" name="email" className="form-control" value={email} onChange={this.onChangeInput}/>
                </div>
                <div className="col-md-10 form-group">
                  <label htmlFor="">Tu Password:</label>
                  <input type="password" name="password" className="form-control" value={password} onChange={this.onChangeInput}/>
                </div>
                <div className="col-md-10 form-group">
                  <label htmlFor="">Confirma tu password:</label>
                  <input type="password" name="checkPassword" className="form-control" value={checkPassword} onChange={this.onChangeInput}/>
                </div>
              </div>
              <button type="submit" className="btn btn-success" >Registrar</button>
          </form>

        </div>

      </div>
    );
  }
}

export default Signup;