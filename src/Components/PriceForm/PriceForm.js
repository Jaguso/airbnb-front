import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addPrice} from '../../actions';
import {calculatePrice} from '../../services';

class PriceForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      price: "",
    }
  }

  componentDidMount() {
    // llamar al api para el calculo
    const {dates, match} = this.props
    
    let data = {
      date_init: dates.start_date,
      date_due: dates.due_date,
      houseId: match.params.id
    }

    calculatePrice(data).then(({data}) => {
      this.setState({price: data.price})
    }).catch((e) => {
      console.log(e)
    })
  }

  nextStep = () => {
    // guarda en redux y va al siguiente paso
  }

  render = () => {
    return(
      <div className="row justify-content-center">
        <div className="col-md-10 text-center">
          <h5>Precio: {this.state.price || 0.0} MXN</h5>
          <button className="btn btn-info">Aceptar</button>
        </div>

      </div>
    )
  }

}


// esta función convierte los elementos del state de redux en props (por eso arriba llamamos dates.start_date etc)
const mapStateToProps = state => {
  return {dates: {...state}}
}

export default connect(mapStateToProps)(PriceForm);