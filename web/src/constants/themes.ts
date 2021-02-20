
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const THEME_LIGHT = {
    name: 'THEME_LIGHT',
    icon: faSun,
    background: '#FEFEFE',
    headerBorder: '#EEE',
    title: {
        default: '#24292E',
        inverse: '#FEFEFE',
    },
    text: '#525252',
    wavyContainer: 'linear-gradient(135deg, rgba(90,81,250,0.5) 0%, rgba(179,204,210,0.5) 100%)',
    themeSwitcherShadow: '0px 0px 25px 0px rgba(0,0,0,0.15)',
    inputBackground: '#F5F5F5',
    inputForeground: '#212121',
    colorPrimary: '#6961FB',
}

const THEME_DARK = {
    name: 'THEME_DARK',
    icon: faMoon,
    background: '#212121',
    headerBorder: '#2f2f2f',
    title: {
        default: '#B5B7FB',
        inverse: '#212121',
    },
    text: '#B1B2CC',
    wavyContainer: 'linear-gradient(135deg, rgba(90,81,250,0.75) 0%, rgba(179,204,210,0.75) 100%)',
    themeSwitcherShadow: '0px 0px 25px 0px #b5b7fb47',
    inputBackground: '#2B2B2B',
    inputForeground: '#FEFEFE',
    colorPrimary: '#B5B7FB',
}

export const THEMES = {
    'THEME_LIGHT': THEME_LIGHT,
    'THEME_DARK': THEME_DARK,
}