import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <nav  className={classNames(cls.navbar, {}, [className])}>
            <div>
                <ThemeSwitcher />
            </div>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'}>Main</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>About</AppLink>
            </div>
        </nav >
    );
}