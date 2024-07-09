import React, { useState } from "react";
import "../styles/App.css";
function App() {
  // State to manage selected shape and list of shapes
  const [selectedShape, setSelectedShape] = useState("square"); // Default to 'square'
  const [shapes, setShapes] = useState([]);

  // Handler for shape selection change
  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  // Handler for adding a shape
  const addShape = () => {
    const newShape = {
      type: selectedShape,
      id: shapes.length + 1, // Unique identifier
    };
    setShapes([...shapes, newShape]);
  };

  return (
    <div className="App">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={addShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape) => (
          <div key={shape.id} className={shape.type}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
