import {Canvas, Group, TextPath, Skia, useFont, vec, Fill} from "@shopify/react-native-skia";
 
const size = 128;
const path = Skia.Path.Make();
path.addCircle(size, size, size/2);
 
export const TextPathDemo = () => {
  const font = useFont(require("./my-font.ttf"), 24);
  return (
    <Canvas style={{ flex: 1 }}>
      <Fill color="white" />
      <Group transform={[{ rotate: Math.PI }]} origin={vec(size, size)}>
        <TextPath font={font} path={path} text="Hello World!" />
      </Group>
    </Canvas>
  );
};