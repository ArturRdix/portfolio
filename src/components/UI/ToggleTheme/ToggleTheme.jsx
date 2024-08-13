import React, { useEffect, useState } from 'react'
import './ToggleTheme.css'

export default function ToggleTheme() {
    const [darktheme, setDarkTheme] = useState(false);
    const getDarkTheme = localStorage.getItem('DarkTheme');

    useEffect(() => {
        darktheme
            ? localStorage.setItem('DarkTheme', 'true')
            : localStorage.setItem('DarkTheme', null);
    }, [darktheme]);

    useEffect(() => {
        getDarkTheme === 'true' && setDarkTheme(true)
    }, [])


    return (
        <label className="switch">
            <input checked={darktheme}
                onClick={() => { setDarkTheme(darktheme => !darktheme) }}
                type="checkbox"
                id="toggle" />
            <span className="slider"></span>
        </label>
    )
}
