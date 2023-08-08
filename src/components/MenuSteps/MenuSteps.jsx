import { useState } from "react";
import "./MenuSteps.css";

export const MenuSteps = () => {

    const [selectedStep, setSelectedStep] = useState(null);

    const handleStepClick = (step) => {
        setSelectedStep(step);
    };

  return (
    <div className="MenuSteps_container">

        {/* Title Menu */}
        <div className="MenuSteps_container-title">
            <h1 className="MenuSteps_container-title-h1">Selecciona un tipo de SelectHotspot</h1>
        </div>

        {/* Start Types of SelectHotspot */}
        <div className="MenuSteps_container-step">
            <button 
                className="MenuSteps_container-step-button"
                onClick={() => handleStepClick("Map")}
            >
                SelectHotspot Map
            </button>
        </div>
        <div className="MenuSteps_container-step">
            <button 
                className="MenuSteps_container-step-button"
                onClick={() => handleStepClick("Image")}
            >
                SelectHotspot Image
            </button>
        </div>
        <div className="MenuSteps_container-step">
            <button 
                className="MenuSteps_container-step-button"
                onClick={() => handleStepClick("Targets")}
            >
                SelectHotspot Targets
            </button>
        </div>
        <div className="MenuSteps_container-step">
            <button 
                className="MenuSteps_container-step-button"
                onClick={() => handleStepClick("IconText")}
            >
                SelectHotspot IconText
            </button>
        </div>
        <div className="MenuSteps_container-step">
            <button 
                className="MenuSteps_container-step-button"
                onClick={() => handleStepClick("Order")}
            >
                SelectHotspot Order
            </button>
        </div>
        {/* End Types of SelectHotspot */}

        {/* Display selected step */}
        {selectedStep && (
          <div className="MenuSteps_container-selected">
            <h2 className="MenuSteps_container-selected-title">
              {`Step seleccionado: ${selectedStep}`}
            </h2>
          </div>
        )}
        

    </div>
  )
}
