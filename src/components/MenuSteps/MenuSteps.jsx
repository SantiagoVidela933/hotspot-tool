import { useState } from "react";
import "./MenuSteps.css";
import { Step } from "../Step/Step";

export const MenuSteps = () => {

    const [selectedStep, setSelectedStep] = useState(null);

    const handleStepClick = (step) => {
        setSelectedStep(step);
    };

  return (
    <div className="MenuSteps_container">

        {/* Title Menu */}
        <div className="box-title">
            <div className="MenuSteps_container-title">
                <h1 className="MenuSteps_container-title-h1">Selecciona un tipo de SelectHotspot</h1>
            </div>
        </div>
        
        
        {/* Start Types of SelectHotspot */}
        <div className="box-steps">
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
        </div>
        {/* End Types of SelectHotspot */}
        

        {/* Display selected step */}
        {selectedStep && <Step selectedStep={selectedStep} />}

    </div>
  )
}
