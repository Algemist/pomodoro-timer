import { FC } from 'react';
import { Container } from 'shared/ui/Container/Container';

interface PomodoroPageProps {
    className?: string;
}

export const PomodoroPage: FC<PomodoroPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <Container>
            PomodoroPage
        </Container>
    );
};
