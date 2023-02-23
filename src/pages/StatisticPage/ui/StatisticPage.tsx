import { FC } from 'react';
import { Container } from 'shared/ui/Container/Container';

interface StatisticPageProps {
    className?: string;
}

export const StatisticPage: FC<StatisticPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <Container>
            Statistic page
        </Container>
    );
};
