import React from 'react'

export default ({ t, i18n }) => {

    const handleLanguage = _ => i18n.changeLanguage(i18n.language === 'ENG' ? 'KOR' : 'ENG')

    return (
        <div>

            <p> { t('Home') } </p>

            <p> { t('About') } </p>

            <p> { t('Faq') } </p>

            <p> { t('Notice') } </p>

            <button onClick={ handleLanguage }>

                { i18n.language }

            </button>

        </div>
    )

}