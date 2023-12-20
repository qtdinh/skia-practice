import { useMemo } from "react";
import { Paragraph, Skia, useFonts } from "@shopify/react-native-skia";
 
const MyParagraph = () => {
  const customFontMgr = useFonts({
    Roboto: [
      require("path/to/Roboto-Regular.ttf"),
      require("path/to/Roboto-Medium.ttf")
    ]
  });
 
  const paragraph = useMemo(() => {
    // Are the font loaded already?
    if (!customFontMgr) {
      return null;
    }
    const textStyle = {
      color: Skia.Color("black"),
      fontFamilies: ["Roboto"],
      fontSize: 50,
    };
    return Skia.ParagraphBuilder.Make({}, customFontMgr)
      .pushStyle(textStyle)
      .addText("Say Hello to ")
      .pushStyle({ ...textStyle, fontStyle: { weight: 500 } })
      .addText("Skia 🎨")
      .pop()
      .build();
  }, [customFontMgr]);
 
  // Render the paragraph
  return <Paragraph paragraph={paragraph} x={0} y={0} width={300} />;
};