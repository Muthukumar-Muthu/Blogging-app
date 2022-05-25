const Header = () => {
  function navigateTo() {
    const target = document.querySelector("#login");
    window.scrollTo({
      top: Math.ceil(
        target.getBoundingClientRect().top -
          30 +
          document.documentElement.scrollTop
      ),
      behavior: "smooth",
    });
  }
  return (
    <nav className="navbar" onClick={navigateTo}>
      <button>Click here to Login</button>
    </nav>
  );
};
export default Header;
