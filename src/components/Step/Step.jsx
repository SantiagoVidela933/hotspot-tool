import { useState } from "react";
import "./Step.css";

// eslint-disable-next-line react/prop-types
export const Step = ({ selectedStep }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {

    //Porción de código a copiar
    const jsonContent = {
      id: selectedStep,
      subTitle: "",
      audio: "",
      backgroundImg: {
        src: ""
      },
      comeback: true,
      hasTargets: true,
      noShowCircle: true,
      hotspots: [
        {
          id: "1",
          src: "",
          text: "Primer Escenario",
          marginLeft: "-25vw",
          marginTop: "-5vw",
          width: "12vw",
          transform: "scale(0.75)"
        },
        {
          id: "2",
          src: "",
          text: "Segundo Escenario",
          marginLeft: "25vw",
          marginTop: "-5vw",
          width: "12vw",
          transform: "scale(0.75)"
        }
      ],
      next: [
        {
          key: "1",
          next: "next_step"
        },
        {
          key: "2",
          next: "next_step"
        }
      ]
    };

    const jsonString = JSON.stringify(jsonContent, null, 2);

    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = jsonString;

    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);

    setCopied(true);
  };

  return (
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
  );
};
