import { useState } from "react";
import data from "./data.js";
import "./style.css";

export default function Accordian() {
  const [selected, setSelectced] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelectced(id === selected ? null : id);
  };

  const handleMultipleSelection = (id) => {
    let copyMultiple = [...multiple];
    //devolver la posicion o indice del elemento actual
    const findIndexOfCurrentId = copyMultiple.indexOf(id);
    // Verificar si el elemento ya está presente en el array
    if (findIndexOfCurrentId === -1) {
      // Si no está presente, agregar el elemento al array
      copyMultiple.push(id);
    } else {
      // Si ya está presente, eliminar el elemento del array usando splice
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(copyMultiple);
  };

  // console.log(multiple);

  

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable multi Selection
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={
                enableMultiSelection
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              key={dataItem.id}
              className="item"
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>Not data found!!!!</div>
        )}{" "}
      </div>
    </div>
  );
}
