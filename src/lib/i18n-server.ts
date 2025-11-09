import i18n from "i18next";

import en from "../../locales/en.json";
import ko from "../../locales/ko.json";

export const createI18nInstance = (lng: string) => {
  const i18nInstance = i18n.createInstance();
  i18nInstance.init({
    lng,
    fallbackLng: "ko",
    resources: {
      en: { translation: en },
      ko: { translation: ko },
    },
    interpolation: { escapeValue: false },
  });
  return i18nInstance;
};
