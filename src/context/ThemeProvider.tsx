// import { useMemo, useState, type ReactNode } from "react";
// import { ThemeContext } from "./ThemeContext";
// import type { Theme } from "./ThemeContext";

// export function ThemeProvider({ children }: { children: ReactNode }) {
//   const [theme, setTheme] = useState<Theme>("light");

//   const value = useMemo(
//     () => ({
//       theme,
//       toggleTheme: () =>
//         setTheme((curr) => (curr === "light" ? "dark" : "light")),
//     }),
//     [theme],
//   );
//   return <ThemeContext value={value}>{children}</ThemeContext>;
// }
