import { useState } from "react";

const ToolTip = ({ Children, text }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <div className="icon">
      <Children
        onMouseEnter={() => {
          setShowToolTip(true);
        }}
        onMouseLeave={() => {
          setShowToolTip(false);
        }}
      />
      {showToolTip && <div className="tooltip">{text}</div>}
    </div>
  );
};
export default ToolTip;
