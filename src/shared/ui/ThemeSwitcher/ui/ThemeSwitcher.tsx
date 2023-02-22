import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import IconLight from 'shared/assets/icons/theme_light.png';
import IconDark from 'shared/assets/icons/theme_dark.png';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button 
            className={classNames(cls.themeSwitcher, {}, [className])}
            theme={ThemeButton.TEXT}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <img src={IconDark} /> : <img src={IconLight} />}
        </Button>
    );
}