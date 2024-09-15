import React from "react";
import worksStyle from "./styles/works.module.scss";
import Cube from "./cub/Cube";
import Navigation from "./navigation/Navigation";
import Data from "../data/Data";
import { Element } from "react-scroll";
import { mobile, width } from "../common/constants";
import List from "./list/List";

const Works = () => {
  //-----------------------------------
  const [rotateX, setRotateX] = React.useState(-10);
  const [rotateY, setRotateY] = React.useState(-70);

  //-----------------------------------

  return (
    <Element name="works" className={worksStyle.works}>
      {width >= mobile ? (
        <div className={worksStyle.wrapper}>
          <div className={worksStyle.container}>
            <Cube rotateX={rotateX} rotateY={rotateY} />
            <Navigation setRotateY={setRotateY} setRotateX={setRotateX} />
          </div>
          <Data rotateX={rotateX} rotateY={rotateY} />
        </div>
      ) : (
        <List />
      )}
    </Element>
  );
};

export default Works;
