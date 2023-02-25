import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch } from 'react-redux';
import { taskActions } from 'entities/task';
import cls from './CreateTask.module.scss';

interface CreateTaskProps {
    className?: string;
}

export const CreateTask: FC<CreateTaskProps> = (props) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();
    const [taskTitle, setTaskTitle] = useState('');

    const onChangeTaskTitle = useCallback((value: string) => {
        setTaskTitle(value);
    }, []);

    const onSubmit = () => {
        dispatch(taskActions.createTask({
            title: taskTitle,
            pomodoro: 1,
        }));
    };

    return (
        <div className={classNames(cls.CreateTask, {}, [className])}>
            <Input
                className={cls.input}
                theme={InputTheme.PRIMARY}
                placeholder="Название задачи"
                onChange={onChangeTaskTitle}
                value={taskTitle}
            />
            <Button
                theme={ButtonTheme.PRIMARY}
                onClick={onSubmit}
            >
                Добавить
            </Button>
        </div>
    );
};
