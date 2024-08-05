import { createContext, useContext } from "react";
//production aproach / context/provide dono one file me bana sakate hai jo ki hai

export const ThemeContext = createContext({
  // Default value bhi diya ja sakata hai / Different tarike hai
  themeMode: "light", //variable/object bhi de sakate ho
  darkTheme: () => {}, //methods bhi de sakate ho
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  //custem hook bhi bana sakate hai
  return useContext(ThemeContext);
}
