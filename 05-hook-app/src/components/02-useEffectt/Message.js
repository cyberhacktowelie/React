import React, {useEffect, useState} from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});
    const {x, y} = coords;

    useEffect(() => {
        console.log('Componete montado');

        const mouseMove = (event) => {
            const coords = { x: event.x, y: event.y };
            setCoords(coords);
            console.log(coords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

  return (
    <div>
        <h3>Eres genial </h3>
        <p>
            <strong>X:</strong> {x}
        </p>
        <p>
            <strong>Y:</strong> {y}
        </p>
    </div>
  )
}
