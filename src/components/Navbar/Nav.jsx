// 'use client'
// import React, { useEffect } from 'react';

// const Nav = () => {
//     useEffect(() => {
//         var addScript = document.createElement('script');
//         addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
//         document.body.appendChild(addScript);
//         window.googleTranslateElementInit = googleTranslateElementInit;
//     }, [])
    
//     const googleTranslateElementInit = () => {
    
//         new window.google.translate.TranslateElement({
//             pageLanguage: 'en',
//             includedLanguages : "en,ms,ta,zh-CN,es,fr,de,bn,hi,ar",
//             layout: google.translate.TranslateElement.InlineLayout.SIMPLE
          
//         },
//         'google_translate_element');
    
//     }



//     return (
//         <div id="google_translate_element">
       
//         </div>
//     );
// };

// export default Nav;

'use client'
import React, { useEffect } from 'react';

const Nav = () => {
    useEffect(() => {
        const addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, [])
    
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            autoDisplay: false, // Disable automatic display
        }, 'google_translate_element');
    }

    // Function to open the language dropdown
    const openTranslateDropdown = () => {
        const widget = window.google.translate.TranslateElement.getInstance();
        if (widget) {
            widget.showBanner();
            widget.show();
        }
    }

    https://github.com/Monirul-Jim/online-donation-save-humanity/tree/development

    return (
        <div className='flex justify-end mt-24' id="google_translate_element">
            {/* <button className='text-xl bg-slate-400'>Translate</button> */}
            {/* Trigger the language dropdown */}
            <button onClick={openTranslateDropdown}></button>
        </div>
    );
};

export default Nav;


