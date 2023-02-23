import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CreateTask } from 'features/CreateTask';
import { Description } from '../Description/Description';
import cls from './TasksSection.module.scss';

interface TasksSectionProps {
    className?: string;
}

export const TasksSection: FC<TasksSectionProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.TasksSection, {}, [className])}>
            <Description />
            <CreateTask />
        </div>
    );
};
