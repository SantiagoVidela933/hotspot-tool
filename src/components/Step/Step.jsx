import "./Step.css";

// eslint-disable-next-line react/prop-types
export const Step = ({selectedStep}) => {
  return (
    <div className="Step_container">
        <div className="Step_container-title">
            <h2 className="Step_container-title-h2">{selectedStep}</h2>
        </div>
        <div className="Step_container-box">
            <button className="Step_container-box-button">Copy JSON</button>
        </div>
    </div>
  )
}
