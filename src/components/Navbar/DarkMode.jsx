import React from 'react'
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState("light");

  return (
   <div>
    <img src={LightButton} alt="" className= {'w-12 cursor-pointer'} />
  </div>
  )
}

export default DarkMode