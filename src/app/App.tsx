import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './style/index.scss'

const Loading = () => {
    return(
        <h2>Loading...</h2>
    )
}

const App = () => {
    const {theme, toggleTheme} = useTheme();

    
    return(
       <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={'/'} element={< MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
       </div>
    )
}

export default App;