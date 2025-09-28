import { useContext } from 'react';
import { LanguageContext } from '../contexts/languageContext.js';

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    console.log(context);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
