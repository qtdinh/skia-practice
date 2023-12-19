import React from "react";
import { Canvas, Fill } from "@shopify/react-native-skia";
import {useTheme, ThemeProvider, ThemeContext} from "./theme"
import { useContextBridge, FiberProvider } from "its-fine";
 
const MyDrawing = () => {
  const { primary } = useTheme(); //useTheme uses the context and returns it
  return <Fill color={primary} />; //fill primary color
};
 
export const Layer = () => {
  const ContextBridge = useContextBridge(); //contexts cannot be passed through renderers, creates a bridge between providers
  return (
    <Canvas style={{ flex: 1 }}>
      <ContextBridge>
        <Fill color="black" />
        <MyDrawing />
      </ContextBridge>
    </Canvas>
  );
};
 
export const ItsFine = () => {
  //theme provider with the primary color red
  //fiber provider binds React children to the React Fiber tree
  //Fiber is basically a special helper for React that helps organize things super fast
  //helps React to figure out what to show on the screen and when, makes sure it's smooth
  //FiberProvider basically sets a space for the Fiber to work with
  return (
    <FiberProvider>
      <ThemeProvider primary="red">
        <Layer />
      </ThemeProvider>
    </FiberProvider>
  );
};