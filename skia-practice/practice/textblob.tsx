import { Canvas, TextBlob, Skia, useFont } from "@shopify/react-native-skia";
 
 
export const TextBlobDemo = () => {
  const font = useFont(require("./my-font.ttf"), 24);
  if (font === null) {
    return null;
  }
  const blob = Skia.TextBlob.MakeFromText("Hello World!", font);
  return (
      <Canvas style={{ flex: 1 }}>
        <TextBlob
          blob={blob}
          color="blue"
        />
      </Canvas>
  );
};