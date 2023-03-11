import React, { useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  const [color, setColor] = useState("#202124");
  const [showColorMenu, setShowColorMenu] = useState(false);

  const handleColorChange = (color) => {
    setColor(color);
    setShowColorMenu(false);
  };

  const colorOptions = [
    "#000000",
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
    "#0000ff",
    "#202124"
  ];

  const handleColorButtonClick = () => {
    setShowColorMenu(!showColorMenu);
  };

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="buttons-container">
        <button
          className="color-button"
          onClick={handleColorButtonClick}
          style={{ zIndex: 1 }}
        >
          <ColorLensOutlinedIcon />
        </button>
        <button className="delete-button" onClick={handleClick}>
          <DeleteForeverOutlinedIcon fontSize="medium" />
        </button>
        {showColorMenu && (
          <div
            className="color-menu"
            style={{ position: "absolute", zIndex: 2 }}
          >
            {colorOptions.map((colorOption) => (
              <button
                key={colorOption}
                style={{
                  backgroundColor: colorOption,
                  borderRadius: "50%",
                  border: "1px solid white",
                  width: "30px",
                  height: "30px",
                  margin: "5px",
                  cursor: "pointer"
                }}
                onClick={() => handleColorChange(colorOption)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Note;
