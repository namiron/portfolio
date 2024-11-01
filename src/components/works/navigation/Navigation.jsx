import React from "react";
import navStyle from "./styles/navigation.module.scss";

const Navigation = ({ setRotateY, setRotateX }) => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const changeRotate = (x, y, index) => {
    setRotateX(x);
    setRotateY(y);
    setActiveIndex(index);
  };

  const getItemStyle = (index) => {
    return activeIndex === index
      ? { color: "#F79E1B", paddingBottom: "5px" }
      : {};
  };

  return (
    <nav className={navStyle.menu}>
      <h3 className={navStyle.title}>my works</h3>
      <ul className={navStyle.list}>
        <li
          className={navStyle.item}
          style={getItemStyle(2)}
          onClick={() => changeRotate(-10, -70, 2)}
        >
          Online Chat
        </li>
        <li
          className={navStyle.item}
          style={getItemStyle(3)}
          onClick={() => changeRotate(-5, 100, 3)}
        >
          Staff
        </li>
        <li
          className={navStyle.item}
          style={getItemStyle(1)}
          onClick={() => changeRotate(-100, 20, 1)}
        >
          Cloud Store
        </li>
        <li
          className={navStyle.item}
          style={getItemStyle(0)}
          onClick={() => changeRotate(85, 10, 0)}
        >
          Safari
        </li>
        <li
          className={navStyle.item}
          style={getItemStyle(4)}
          onClick={() => changeRotate(-5, 10, 4)}
        >
          Chrome Extension
        </li>
        <li
          className={navStyle.item}
          style={getItemStyle(5)}
          onClick={() => changeRotate(170, 20, 5)}
        >
          Quiz
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
