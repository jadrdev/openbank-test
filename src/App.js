import React from "react";
import Stepper from "./components/Stepper/Stepper";
import ProductInformation from "./views/ProductInformation/ProductInformation"
import FormPassword from "./views/FormPassword/FormPassword"
import Feedback from "./views/Feedback/Feedback"
import CenteredAlert from "./components/CenteredAlert/CenteredAlert";
import { useState } from "react";
import "./App.scss";
import "./styles/global.scss";


const steps = [1, 2, 3];


export default function App() {

  function handleNextButtonClickUtil() {
    setActiveStepIndex((currentIndex) => {
      if (currentIndex + 1 < steps.length) return currentIndex + 1;
      return 0;
    });
  }

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [nextButtonClicked, setNextButtonClicked] = useState(false);
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [clue, setClue] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(true);
  const handleNextButtonClick = () =>
    handleNextButtonClickUtil(setActiveStepIndex, steps);
  const stepsCallback = {
    0: handleNextButtonClick,
    1: () => {
      setNextButtonClicked(true);
    },
    2: handleNextButtonClick,
  };
  const resetForm = () => {
    setPassword("");
    setRepeatedPassword("");
    setClue("");
    setIsFormVisible(false);
    setActiveStepIndex(0);
  };



  return (
    <div className="App">
      <main className="App-content">
        <div className="modal-container">
          <div className="modal">
            {isFormVisible ? (
              <Stepper {...{ activeStepIndex, steps }}>
                <div className="content">
                  <h2>Crea tu Password Manager</h2>
                  <div className="title-divider"></div>
                  <div className="form">
                    {activeStepIndex === 0 ? <ProductInformation /> : null}
                    {activeStepIndex === 1 ? (
                      <FormPassword
                        {...{
                          password,
                          setPassword,
                          repeatedPassword,
                          setRepeatedPassword,
                          clue,
                          setClue,
                          nextButtonClicked,
                          setNextButtonClicked,
                          handleNextButtonClick,
                        }}
                      />
                    ) : null}
                    {activeStepIndex === 2 ? (
                      <Feedback
                        {...{
                          password,
                          repeatedPassword,
                          clue,
                          setIsFormVisible,
                          resetForm,
                        }}
                      />
                    ) : null}
                  </div>
                  <div className="bottom-control-buttons-divider divider"></div>
                  <div className="bottom-control-buttons">
                    <button className="secondary" onClick={resetForm}>
                      Cancelar
                    </button>
                    <button
                      id="next-button"
                      className="primary"
                      onClick={stepsCallback[activeStepIndex]}
                    >
                      Siguiente
                      <div style={{ fontSize: "2em", marginLeft: "10px" }}>
                        &rsaquo;
                      </div>
                    </button>
                  </div>
                </div>
              </Stepper>
            ) : (
              <CenteredAlert>
                <button
                  className="primary start-password-manger-wizard"
                  onClick={() => setIsFormVisible(true)}
                >
                  Comenzar el proceso de creación del Password Manager
                </button>
              </CenteredAlert>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
