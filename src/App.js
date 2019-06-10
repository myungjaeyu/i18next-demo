import React from 'react'

import Header from './components/Header'

import { useTranslation } from 'react-i18next'

function App() {

    const { t, i18n } = useTranslation()

    const changeLanguage = lng => {

        i18n.changeLanguage(lng)

    }

    return (
        <Header changeLanguage={ changeLanguage } i18n={ i18n} t={ t }/>
    )

}

export default App