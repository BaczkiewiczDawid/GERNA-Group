import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
    const [textInput, setTextInput] = useState('');
    const [translationResult, setTranslationResult] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Domyślnie ustawiony na angielski (EN)

    useEffect(() => {
        translate();
    }, [textInput, selectedLanguage]);

    const languagesList = [
        {code: 'en', name: 'Angielski'},
        {code: 'es', name: 'Hiszpański'},
        {code: 'fr', name: 'Francuski'},
        {code: 'de', name: 'Niemiecki'},
        {code: 'zh', name: 'Chiński'},
        {code: 'ja', name: 'Japoński'},
        {code: 'ko', name: 'Koreański'},
        {code: 'ru', name: 'Rosyjski'},
        {code: 'ar', name: 'Arabski'},
        {code: 'pt', name: 'Portugalski'},
        {code: 'it', name: 'Włoski'},
        {code: 'hi', name: 'Hinduski'},
        {code: 'tr', name: 'Turecki'},
        {code: 'nl', name: 'Holenderski'},
        {code: 'pl', name: 'Polski'},
        // Dodaj więcej języków według potrzeb
        // ...
    ];

    const translate = async () => {
        try {
            const response = await axios.post('http://localhost:3000/translate', {
                text: textInput,
                targetLanguage: selectedLanguage,
            });

            const result =
                response.data[0]?.translations[0]?.text || '';
            setTranslationResult(result);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const newText = e.target.value;
        setTextInput(newText);
    };

    const handleLanguageChange = (e) => {
        const newLanguage = e.target.value;
        setSelectedLanguage(newLanguage);
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-4xl font-bold mb-6">Marco - Twój wirtualny tłumacz</h1>

            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Wpisz tekst aby przetłumaczyć"
                    value={textInput}
                    onChange={handleInputChange}
                    className="border-2 border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded-md w-96 transition duration-300 ease-in-out"
                />
                    <select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        className="border-2 border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded-md"
                    >
                        {languagesList.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                </div>
            <div className="mt-4">
                <strong>Wynik:</strong> {translationResult}
            </div>
        </div>
    );
}

export default App;
