import React from 'react';
import { ThemeProvider } from './Wrap';
import ThemeSwitcher from './setTheme';

const Maincomponent=()=>{
    return(
    <ThemeProvider>
        <ThemeSwitcher/>
    </ThemeProvider>
    );
}
export default Maincomponent;
