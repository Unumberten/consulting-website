import { useContext } from "react";
import { LanguageContext, LanguageContextValue } from "../contexts/LanguageContext";

export function useLanguageContext(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}