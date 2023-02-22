import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container/Container';
import cls from './SettingsPage.module.scss';

interface SettingsPageProps {
    className?: string;
}

export const SettingsPage: FC<SettingsPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <Container className={classNames(cls.SettingsPage, {}, [className])}>
            Settings page
        </Container>
    );
};
