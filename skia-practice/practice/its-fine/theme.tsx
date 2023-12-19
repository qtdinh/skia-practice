import type { ReactNode } from "react";
import React, { useContext, createContext } from "react";
 
interface Theme {
  primary: string;
}
 
export const ThemeContext = createContext<Theme | null>(null); //Create context to share values
 
export const ThemeProvider = ({
  primary,
  children,
}: {
  primary: string; // primary color
  children: ReactNode; // props
}) => ( // wrap children with the provided color theme
  <ThemeContext.Provider value={{ primary }}>
    {children}
  </ThemeContext.Provider>
);
 
export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === null) {
    throw new Error("Theme provider not found");
  }
  return theme;
};