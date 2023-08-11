import { useState } from "react";
import "./MenuSteps.css";

export const MenuSteps = () => {
    // Estado para almacenar el paso seleccionado y el estado de copiado
    const [selectedStep, setSelectedStep] = useState(null);
    const [copied, setCopied] = useState(false);

    // Manejar el clic en un botón de paso
    const handleStepClick = (step) => {
        setSelectedStep(step);
        setCopied(false); // Reiniciar el estado de copiado al cambiar el paso
    };

    // Manejar el clic en el botón de copia
    const handleCopyClick = () => {
        if (selectedStep !== null) {
            // Generar el contenido JSON para copiar
            const jsonContent = {
                id: selectedStep,
                subTitle: "",
                audio: "",
                backgroundImg: {
                    src: ""
                },
                next: [
                    {
                        key: "1",
                        next: "next_step"
                    },
                    {
                        key: "2",
                        next: "next_step"
                    }
                ],
                type: "selecthotspot"
            };

            const jsonString = JSON.stringify(jsonContent, null, 2);

            // Crear un textarea temporal para copiar al portapapeles
            const tempTextarea = document.createElement("textarea");
            tempTextarea.value = jsonString;

            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand("copy");
            document.body.removeChild(tempTextarea);

            // Cambiar el estado de copiado
            setCopied(true);
        }
    };

    // Array de objetos para los tipos de SelectHotspot
    const selectHotspotTypes = [
        { id: "Map", label: "SelectHotspot Map" },
        { id: "Image", label: "SelectHotspot Image" },
        { id: "Targets", label: "SelectHotspot Targets" },
        { id: "IconText", label: "SelectHotspot IconText" },
        { id: "Order", label: "SelectHotspot Order" }
    ];

    return (
        <div className="MenuSteps_container">
            {/* Sección del título */}
            <div className="box-title">
                <div className="MenuSteps_container-title">
                    <h1 className="MenuSteps_container-title-h1">Selecciona un tipo de SelectHotspot</h1>
                </div>
            </div>
            
            {/* Sección de los botones de paso */}
            <div className="box-steps">
                {selectHotspotTypes.map((type) => (
                    <div key={type.id} className="MenuSteps_container-step">
                        <button 
                            className="MenuSteps_container-step-button"
                            onClick={() => handleStepClick(type.id)}
                        >
                            {type.label}
                        </button>
                    </div>
                ))}
            </div>

            {/* Mostrar el paso seleccionado y el botón de copia si hay un paso seleccionado */}
            {selectedStep && (
                <div className="Step_container">
                    <div className="Step_container-title">
                        <h2 className="Step_container-title-h2">{selectedStep}</h2>
                    </div>
                    <div className="Step_container-box">
                        <button
                            className="Step_container-box-button"
                            onClick={handleCopyClick}
                        >
                            {copied ? "Copiado" : "Copy JSON"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
