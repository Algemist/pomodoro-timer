import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container/Container';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <Container className={classNames(cls.NotFoundPage, {}, [className])}>
            Not Found Page
        </Container>
    );
};
