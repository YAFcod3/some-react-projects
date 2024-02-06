import React from "react";
import useLocalStorage from "./useLocalstorage";
import './style.css'





const LightDarkMode = () => {


  // const [theme, setTheme] = useState('light');

  // const handleToggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));


  // };
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      {/*  <div className="light-dark-mode" style={{ background: theme === 'dark' ? 'black' : 'white' ,color: theme === 'dark' ? 'white' : 'black' }}>  */}
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>LightDarkMode</p>
          <button onClick={handleToggleTheme}>Change theme</button>
        </div>
      </div>
    </>
  );
};

export default LightDarkMode;
