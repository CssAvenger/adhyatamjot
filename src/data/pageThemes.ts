export interface PageTheme {
  accent: string;
  accentSoft: string;
  accentGlow: string;
  onAccent: string; // readable text color to sit on top of `accent`
}

export const pageThemes: Record<string, PageTheme> = {
  "/": {
    accent: "#2fe6c9",
    accentSoft: "rgba(47, 230, 201, 0.14)",
    accentGlow: "rgba(47, 230, 201, 0.38)",
    onAccent: "#04211d",
  },
  "/dance": {
    accent: "#ff5d3a",
    accentSoft: "rgba(255, 93, 58, 0.14)",
    accentGlow: "rgba(255, 93, 58, 0.4)",
    onAccent: "#2b0a06",
  },
  "/emcee": {
    accent: "#e7b25c",
    accentSoft: "rgba(231, 178, 92, 0.14)",
    accentGlow: "rgba(231, 178, 92, 0.38)",
    onAccent: "#2b1706",
  },
};

export function getPageTheme(path: string): PageTheme {
  return pageThemes[path] ?? pageThemes["/"];
}
