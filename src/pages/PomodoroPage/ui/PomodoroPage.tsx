import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container/Container';
import cls from './PomodoroPage.module.scss';

interface PomodoroPageProps {
    className?: string;
}

export const PomodoroPage: FC<PomodoroPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <Container className={classNames(cls.PomodoroPage, {}, [className])}>
            PomodoroPage
        </Container>
    );
};
