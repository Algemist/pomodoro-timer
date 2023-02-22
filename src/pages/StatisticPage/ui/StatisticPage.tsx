import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container/Container';
import cls from './StatisticPage.module.scss';

interface StatisticPageProps {
    className?: string;
}

export const StatisticPage: FC<StatisticPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <Container className={classNames(cls.StatisticPage, {}, [className])}>
            Statistic page
        </Container>
    );
};
