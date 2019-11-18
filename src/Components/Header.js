import React from "react";

const Header = ({ titulo }) => (
  <header>
    <img
      src="https://upaep.mx/templates/hospitalveterinario/img/perro_gato.png"
      alt="imagen"
    ></img>
    <h1 className="text-center">{titulo}</h1>
  </header>
);

export default Header;
