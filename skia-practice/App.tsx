import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './practice/hello-world';
import { ItsFine } from './practice/its-fine/its-fine';
import { PathDemo } from './practice/path-object';
import { SVGNotation } from './practice/trim';
import { FillType } from './practice/filltype';
import { PatchDemo } from './practice/patchdemo';

export default function App() {
  return (
    <PatchDemo />
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
