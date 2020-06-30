import React from 'react';

//Definindo as propriedades do componente e definindo se é ou não obrigatório
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return(
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
