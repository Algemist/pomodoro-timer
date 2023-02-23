import { FC } from 'react';
import { Container } from 'shared/ui/Container/Container';

interface SettingsPageProps {
    className?: string;
}

export const SettingsPage: FC<SettingsPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <Container>
            Settings page
        </Container>
    );
};
