import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container/Container';
import { Logo } from 'shared/ui/Logo/Logo';
import StatisticIcon from 'shared/assets/icons/equalizer.svg';
import { RoutePath } from 'app/providers/routeProvider/model/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Container className={cls.wrapper}>
                <Logo />
                <div className={cls.links}>
                    <AppLink
                        to={RoutePath.statistic}
                        className={cls.statistic}
                    >
                        <StatisticIcon />
                        Статистика
                    </AppLink>
                    <AppLink to={RoutePath.settings}>
                        настройки
                    </AppLink>
                </div>
            </Container>
        </header>
    );
};
