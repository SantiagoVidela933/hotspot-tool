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
