import { useState } from "react";

import "../tool-tip/style.css";
const ToolTip = ({ Children, text }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <div className="tooltip-parent">
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
