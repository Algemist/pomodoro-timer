import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container/Container';
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
            <Container>
                header
            </Container>
        </header>
    );
};
