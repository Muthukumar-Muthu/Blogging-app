import { useState, useEffect } from "react";
export const Margin = (rendered) => {
  console.log(rendered);

  const [leftMargin, setLeftMargin] = useState(getWidth("leftsidebar") || 0);
  const [rightMargin, setRightMargin] = useState(getWidth("rightsidebar") || 0);
  console.log(leftMargin, rightMargin, rendered, "Margin");
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setLeftMargin(getWidth("leftsidebar"));
      setRightMargin(getWidth("rightsidebar"));
    });
  }, []);
  useEffect(() => {
    if (rendered) {
      setLeftMargin(getWidth("leftsidebar"));
      setRightMargin(getWidth("rightsidebar"));
    }
  }, [rendered]);

  return {
    leftMargin,
    rightMargin,
  };
};
function getWidth(className) {
  return document.querySelector(`.${className}`)?.getBoundingClientRect()
    ?.width;
}
