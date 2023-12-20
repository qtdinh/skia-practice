import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './practice/hello-world';
import { ItsFine } from './practice/its-fine/its-fine';
import { PathDemo } from './practice/path-object';
import { SVGNotation } from './practice/trim';
import { FillType } from './practice/filltype';
import { PatchDemo } from './practice/patchdemo';
import { GlyphDemo } from './practice/glyphs';
import { TextPathDemo } from './practice/textpath';
import { TextBlobDemo } from './practice/textblob';
import { SimpleShader } from './practice/shader';
import { UniformShader } from './practice/uniformshader';
import { NestedShader } from './practice/nestedshaders';
import { ImageShaderDemo } from './practice/image-shader';
import { LinearGradientDemo } from './practice/lineargradient';
import { RadialGradientDemo } from './practice/radialgradient';
import { TwoPointConicalGradientDemo } from './practice/twopointconicalgradient';
import { SweepGradientDemo } from './practice/assets/sweepgradient';

export default function App() {
  return (
    <SweepGradientDemo />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
