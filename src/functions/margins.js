function getMargin() {
  const leftBarWidth =
    document.querySelector(".leftsidebar")?.getBoundingClientRect().width || 0;
  const rightBarWidth =
    document.querySelector(".right-side-bar-wrapper")?.getBoundingClientRect()
      .width || 0;
  return {
    leftMargin: leftBarWidth,
    rightMargin: rightBarWidth,
  };
}
export default getMargin;
