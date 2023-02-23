import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LogoIcon from 'shared/assets/logo.png';
import { RoutePath } from 'app/providers/routeProvider/model/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Logo.module.scss';

interface LogoProps {
    className?: string;
}

export const Logo: FC<LogoProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <AppLink to={RoutePath.main} className={classNames(cls.Logo, {}, [className])}>
            <img src={LogoIcon} alt="logo" className={cls.icon} />
            pomodoro_box
        </AppLink>
    );
};
