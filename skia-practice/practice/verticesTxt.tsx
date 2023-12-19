import { Canvas, Group, ImageShader, Vertices, vec, useImage } from "@shopify/react-native-skia";
 
export const VerticesDemo = () => {
  const image = useImage(require("./assets/squares.png")); //use an image asset
  const vertices = [vec(64, 0), vec(128, 256), vec(0, 256)]; //draws these vertices
  const colors = ["#61dafb", "#fb61da", "#dafb61"]; //colors
  const textures = [vec(0, 0), vec(0, 128), vec(64, 256)]; //map these textures

  if (!image) {
    return null;
  }
  return (
    <Canvas style={{ flex: 1 }}>
      {/* This is our texture */}
      <Group>
        <ImageShader
          image={image}
          tx="repeat"
          ty="repeat"
        />
        {/* Here we specified colors, the default blendMode is dstOver */}
        <Vertices vertices={vertices} colors={colors} />
        <Group transform={[{ translateX: 128 }]}>
          {/* Here we didn't specify colors, the default blendMode is srcOver */}
          <Vertices vertices={vertices} textures={textures} />
        </Group>
      </Group>
    </Canvas>
  );
};