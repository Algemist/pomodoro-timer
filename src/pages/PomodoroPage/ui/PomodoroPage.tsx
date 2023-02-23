import { FC } from 'react';
import { Container } from 'shared/ui/Container/Container';
import { TasksSection } from 'widgets/TasksSection';

interface PomodoroPageProps {
    className?: string;
}

export const PomodoroPage: FC<PomodoroPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <Container>
            <TasksSection />
        </Container>
    );
};
