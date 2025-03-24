import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next'; // Make sure to import useTranslation

const Partners = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
    <div className={`w-full py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
        <div className="text-center">
          <h1 className={`md:text-4xl sm:text-3xl text-2xl font-bold py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            {t("partners.title")}
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
            {t("partners.description")}
          </p>
        </div>
        // ... rest of the component ...
      </div>
    </div>
  );
};

export default Partners;