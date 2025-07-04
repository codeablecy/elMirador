// 'use client'

// import * as React from 'react'
// import {
//   ThemeProvider as NextThemesProvider,
//   type ThemeProviderProps,
// } from 'next-themes'

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// }


"use client";

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

/**
 * ThemeProvider wraps the app with next-themes ThemeProvider for dark/light/system theme support.
 * @param children - The content to be themed
 * @param props - ThemeProviderProps from next-themes
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props} enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}
