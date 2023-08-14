import { useState } from "react";
import "./MenuSteps.css";

export const MenuSteps = () => {
    // Estado para almacenar el paso seleccionado y el estado de copiado
    const [selectedStep, setSelectedStep] = useState(null);
    const [copied, setCopied] = useState(false);

    // Estado para almacenar el índice del objeto hotspotsMod correspondiente al botón seleccionado
    const [hotspotModIndex, setHotspotModIndex] = useState(null);

    // Manejar el clic en un botón de paso
    const handleStepClick = (step, index) => {
        setSelectedStep(step);
        setHotspotModIndex(index);
        setCopied(false); // Reiniciar el estado de copiado al cambiar el paso
    };

    // Manejar el clic en el botón de copia
    const handleCopyClick = () => {
        if (selectedStep !== null && hotspotModIndex !== null) {
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
                    },
                    {
                        key: "3",
                        next: "next_step"
                    }
                ],
                type: "selecthotspot"
            };

            // Obtener el objeto hotspotMod según el índice
            const hotspotModContent = hotspotsMod[hotspotModIndex];

            // Combinar propiedades de jsonContent y hotspotModContent
            const combinedContent = {
                ...jsonContent,
                ...hotspotModContent
            };

            const jsonString = JSON.stringify(combinedContent, null, 2);

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
        { id: "Order", label: "SelectHotspot Order" },
        { id: "Icon", label: "SelectHotspot Icon" }
    ];

    const hotspotsMod = [
        {
            comeBack: true,
            hasTargets: true,
            noShowCircle: true,
            hotspots: [
                {
                    id: "hotspot_01",
                    text: "Hotspot 1",
                    marginLeft: "-25vw",
                    marginTop: "-5vh",
                    width: "12vw",
                    transform: "scale(0.75)",
                    visited: true
                },
                {
                    id: "hotspot_02",
                    text: "Hotspot 2",
                    marginLeft: "25vw",
                    marginTop: "-5vh",
                    width: "12vw",
                    transform: "scale(0.75)",
                    visited: true
                },
                {
                    id: "hotspot_03",
                    text: "Hotspot 3",
                    marginLeft: "-25vw",
                    marginTop: "15vh",
                    width: "12vw",
                    transform: "scale(0.75)",
                    visited: true
                },
                {
                    id: "hotspot_04",
                    text: "Hotspot 4",
                    marginLeft: "25vw",
                    marginTop: "15vh",
                    width: "12vw",
                    transform: "scale(0.75)",
                    visited: true
                }
            ]
        },
        {
            hasImages: true,
            noShowCircle: true,
            hotspots: [
                {
                    id: "hotspot_01",
                    text: "Hotspot 1",
                    src: "./assets/customers/example/example/images/",
                    marginLeft: "-25vw",
                    marginTop: "-5vh",
                    width: "12vw",
                    transform: "scale(1)",
                    visited: true
                },
                {
                    id: "hotspot_02",
                    text: "Hotspot 2",
                    src: "./assets/customers/example/example/images/",
                    marginLeft: "25vw",
                    marginTop: "-5vh",
                    width: "12vw",
                    transform: "scale(1)",
                    visited: true
                },
                {
                    id: "hotspot_03",
                    text: "Hotspot 3",
                    src: "./assets/customers/example/example/images/",
                    marginLeft: "-25vw",
                    marginTop: "15vh",
                    width: "12vw",
                    transform: "scale(1)",
                    visited: true
                },
                {
                    id: "hotspot_04",
                    text: "Hotspot 4",
                    src: "./assets/customers/example/example/images/",
                    marginLeft: "25vw",
                    marginTop: "15vh",
                    width: "12vw",
                    transform: "scale(1)",
                    visited: true
                }
            ]
        },
        {
            hasTargets: true,
            noShowCircle: true,
            hotspots: [
                {
                    id: "1",
                    text: "Hotspot 1",
                    marginLeft: "40vw",
                    marginTop: "-25vh",
                    width: "12vw"
                },
                {
                    id: "2",
                    text: "Hotspot 2",
                    marginLeft: "40vw",
                    marginTop: "0vh",
                    width: "12vw",
                },
                {
                    id: "3",
                    text: "Hotspot 3",
                    marginLeft: "40vw",
                    marginTop: "25vh",
                    width: "12vw",
                }
            ]
        },
        {
            hasIcons: true,
            feedbackTrue: "Muy bien",
            feedbackFalse: "Incorrecto",
            feedbackAudioTrue: "./assets/customers/example/example/audios/",
            feedbackAudioFalse: "./assets/customers/example/example/audios/",
            hotspots: [
                {
                    id: "hotspot_01",
                    text: "Hotspot 1",
                    icon: "fas fa-hard-hat fa-4x",
                    marginLeft: "-25vw",
                    marginTop: "-5vh",
                    width: "12vw",
                    transform: "scale(1)",
                },
                {
                    id: "hotspot_02",
                    text: "Hotspot 2",
                    icon: "fas fa-hard-hat fa-4x",
                    marginLeft: "25vw",
                    marginTop: "-5vh",
                    width: "12vw",
                    transform: "scale(1)",
                },
                {
                    id: "hotspot_03",
                    text: "Hotspot 3",
                    icon: "fas fa-hard-hat fa-4x",
                    marginLeft: "-25vw",
                    marginTop: "15vh",
                    width: "12vw",
                    transform: "scale(1)",
                },
                {
                    id: "hotspot_04",
                    text: "Hotspot 4",
                    icon: "fas fa-hard-hat fa-4x",
                    marginLeft: "25vw",
                    marginTop: "15vh",
                    width: "12vw",
                    transform: "scale(1)",
                }
            ]
        },
        {
            hasIcons: true,
            hotspots: [
                {
                    id: "hotspot_01",
                    text: "Hotspot 1",
                    icon: "fas fa-hard-hat fa-4x",
                    marginLeft: "-25vw",
                    marginTop: "-5vh",
                    width: "12vw",
                    transform: "scale(1)",
                },
                {
                    id: "hotspot_02",
                    text: "Hotspot 2",
                    icon: "fas fa-hard-hat fa-4x",
                    marginLeft: "25vw",
                    marginTop: "-5vh",
                    width: "12vw",
                    transform: "scale(1)",
                },
                {
                    id: "hotspot_03",
                    text: "Hotspot 3",
                    icon: "fas fa-hard-hat fa-4x",
                    marginLeft: "-25vw",
                    marginTop: "15vh",
                    width: "12vw",
                    transform: "scale(1)",
                },
                {
                    id: "hotspot_04",
                    text: "Hotspot 4",
                    icon: "fas fa-hard-hat fa-4x",
                    marginLeft: "25vw",
                    marginTop: "15vh",
                    width: "12vw",
                    transform: "scale(1)",
                }
            ]
        }
    ]

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
                {selectHotspotTypes.map((type, index) => (
                    <div key={type.id} className="MenuSteps_container-step">
                        <button 
                            className="MenuSteps_container-step-button"
                            onClick={() => handleStepClick(type.id, index)}
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
