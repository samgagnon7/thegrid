import React, { useState } from 'react';
import './Grid.css'; // For styling the grid

const Grid: React.FC = () => {
  const [clickedSquares, setClickedSquares] = useState<boolean[]>(new Array(1000).fill(false));

  const handleSquareClick = (index: number) => {
    const newSquares = [...clickedSquares];
    newSquares[index] = !newSquares[index];
    setClickedSquares(newSquares);
  };

  const renderSquares = () => {
    return clickedSquares.map((clicked, index) => (
      <div
        key={index}
        className={`square ${clicked ? 'clicked' : ''}`}
        onClick={() => handleSquareClick(index)}
      >
      </div>
    ));
  };

  return <div className="grid">{renderSquares()}</div>;
};

export default Grid;
