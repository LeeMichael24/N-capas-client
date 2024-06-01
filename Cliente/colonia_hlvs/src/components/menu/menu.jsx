/* eslint-disable react/prop-types */
import ButtonMenu from './menuButtom/menuButtom';
import './menu.css'; // Asegúrate de definir estilos aquí
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Menu = ({ buttons }) => {
	/* funcion para medir el espacio y contener los botones, segun los que genere */
	const [containerHeight, setContainerHeight] = useState('auto');

	useEffect(() => {
			const calculateHeight = () => {
					const buttonHeight = 110; // Altura del botón en px
					const buttonMargin = 20; // Margen superior e inferior del botón en px
					const buttonsPerRow = 2; // Número de botones por fila

					const numRows = Math.ceil(buttons.length / buttonsPerRow);
					const totalHeight = numRows * (buttonHeight + buttonMargin);
					setContainerHeight(`${totalHeight}px`);
			};

			calculateHeight();
	}, [buttons]);

  const isSingleButton = buttons.length === 1; // Verificar si hay solo un botón


  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };


  return (
    <div className="menu-container" style={{ height: containerHeight}}>
      {buttons.map((button, index) => (
        <ButtonMenu 
          key={index}
          icon={button.icon}
          name={button.name}
          path={button.path}
          isSingleButton={isSingleButton}
          className={`menu-button ${location.pathname === button.path ? 'selected' : ''}`}
          onClick={() => handleButtonClick(button.path)}
        />
      ))}
    </div>
  );
};

export default Menu;
