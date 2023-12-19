import React from "react";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
 
const HelloWorld = () => {
  const width = 256; //width of Canvas
  const height = 256; //height of Canvas
  const r = width * 0.33; //calculate the radius
  //Group applies a set of properties to its children, in this case blend mode
  //blendMode combines a source color to the dest color
  //cx = start point, cy = end point, r = radius
  //radius = 84.48, sets the size of the circle
  //simply put, think of x as x-pos and y as y-pos inside the Canvas

  return (
    <Canvas style={{ width, height }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
};
 
export default HelloWorld;