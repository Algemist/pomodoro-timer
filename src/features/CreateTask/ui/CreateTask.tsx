import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './CreateTask.module.scss';

interface CreateTaskProps {
    className?: string;
}

export const CreateTask: FC<CreateTaskProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.CreateTask, {}, [className])}>
            <Input
                className={cls.input}
                theme={InputTheme.PRIMARY}
                placeholder="Название задачи"
            />
            <Button
                theme={ButtonTheme.PRIMARY}
            >
                Добавить
            </Button>
        </div>
    );
};
