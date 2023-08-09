import { useState } from "react";
import { Step } from "../Step/Step";
import "./MenuSteps.css";

export const MenuSteps = () => {

    // Estado para almacenar el paso seleccionado
    const [selectedStep, setSelectedStep] = useState(null);

    // Función para manejar el clic en un botón
    const handleStepClick = (step) => {
        // Actualizamos el estado con el paso seleccionado
        setSelectedStep(step); 
    };

  return (
    <div className="MenuSteps_container">

        {/* Título del Menu */}
        <div className="box-title">
            <div className="MenuSteps_container-title">
                <h1 className="MenuSteps_container-title-h1">Selecciona un tipo de SelectHotspot</h1>
            </div>
        </div>
        
        
        {/* Tipo de SelectHotspot */}
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
