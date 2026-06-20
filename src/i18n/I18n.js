import { createI18n } from "vue-i18n";
import fr from "@/i18n/fr.json";
import en from "@/i18n/en.json";
import ar from "@/i18n/ar.json";

const i18n = createI18n({
  legacy: false,
  locale: "fr",
  fallbackLocale: "fr",
  messages: {
    fr,
    en,
    ar,
  },
});

export default i18n;
