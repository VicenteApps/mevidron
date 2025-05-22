import React, { useState, useEffect } from 'react';

const Captcha = ({ onVerify }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [inputText, setInputText] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  // Generar un captcha simple al cargar el componente
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < 6; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaText(text);
    setInputText('');
    setIsVerified(false);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const verifyCaptcha = () => {
    if (inputText === captchaText) {
      setIsVerified(true);
      onVerify(true);
    } else {
      setIsVerified(false);
      onVerify(false);
      generateCaptcha(); // Regenerar si falla
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-semibold mb-2">Verificación:</label>
      <div className="flex items-center space-x-4">
        <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-800 font-bold text-xl select-none">
          {captchaText}
        </div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="w-32 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          placeholder="Escribe el texto"
        />
        <button
          type="button"
          onClick={verifyCaptcha}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
        >
          Verificar
        </button>
      </div>
      {isVerified && <p className="text-green-600 text-sm mt-2">Verificado correctamente.</p>}
    </div>
  );
};

export default Captcha;