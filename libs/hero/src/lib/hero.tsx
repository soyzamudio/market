import * as React from 'react';
import { Component } from 'react';

import './hero.scss';

export class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">El mejor sitio para vender y comprar productos de moda en México.</h1>
          <form className="hero__form">
            <input className="hero__form--input" type="text" placeholder="Correo electronico" />
            <input className="hero__form--input" type="password" placeholder="Contraseña" />
            <div className="hero__form--buttons">
              <button className="hero__form--button-login btn-large">Entrar</button>
              <button className="hero__form--button-register btn-large">Registrate</button>
            </div>
            <button className="hero__form--button-facebook btn-large">Continuar con Facebook</button>
          </form>
        </div>
      </div>
    );
  }
}
