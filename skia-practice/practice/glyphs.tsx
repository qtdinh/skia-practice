import {Canvas, Glyphs, vec, useFont} from "@shopify/react-native-skia";
 
export const GlyphDemo = () => {
  const fontSize = 32;
  const font = useFont(require("./my-font.ttf"), fontSize);
  if (font === null) {
    return null;
  }
  const glyphs = font
    .getGlyphIDs("Hello World!")
    .map((id, i) => ({ id, pos: vec(50, (i + 1) * fontSize) })); // vec(x, y)
  return (
    <Canvas style={{ flex:  1 }}>
      <Glyphs
        font={font}
        glyphs={glyphs}
      />
    </Canvas>
  );
}