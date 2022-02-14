import React from "react";
import ProductInformation from "./views/ProductInformation/ProductInformation";
import Stepper from "./components/Stepper/Stepper";
import { useState } from "react";
import "./App.scss";


const steps = [1, 2, 3];

export default function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  console.log(activeStepIndex);
  function handleNextButton() {
    setActiveStepIndex((currentIndex) => {
      if (currentIndex + 1 < steps.length) return currentIndex + 1;
      return 0;
    });
  }
  return (
    <div className="App">
      <main className="App-content">
        <div className="modal-container">
          <div className="modal">
            <Stepper {...{ activeStepIndex, steps }}>
              <div className="content">
                <h2>Crea tu Password Manager</h2>
                <div className="title-divider"></div>
                <div className="form">
                  {activeStepIndex === 0 ? <ProductInformation /> : null}
                  {activeStepIndex === 1 ? <div /> : null}
                  {activeStepIndex === 2 ? <div /> : null}
                </div>
                <div className="bottom-control-buttons-divider"></div>
                <div className="bottom-control-buttons">
                  <button variant="secondary">Cancelar</button>
                  <button onClick={handleNextButton}>
                    Siguiente
                    <div style={{ fontSize: "2em", marginLeft: "10px" }}>
                      &rsaquo;
                    </div>
                  </button>
                </div>
              </div>
            </Stepper>
          </div>
        </div>
      </main>
    </div>
  );
}