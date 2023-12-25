import { useState, useEffect } from "react";
import { Switch, Slider, H5, DarkModeContainer } from "components/Settings/DarkModeSlider.style";

const DarkModeSlider = ({ toggleTheme, theme }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchState = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (theme === "light") {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }, [theme]);

  return (
    <DarkModeContainer>
      <H5>Dark mode</H5>
      <Switch>
        <input
          type="checkbox"
          onClick={handleSwitchState}
          onChange={toggleTheme}
          checked={isChecked}
        />
        <Slider checked={isChecked}></Slider>
      </Switch>
    </DarkModeContainer>
  );
};

export default DarkModeSlider;
