import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Description.module.scss';

interface DescriptionProps {
    className?: string;
}

export const Description: FC<DescriptionProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Description, {}, [className])}>
            <h2 className={cls.title}>Ура! Теперь можно начать работать:</h2>
            <ul className={cls.list}>
                <li className={cls.item}>Выберите категорию и напишите название текущей задачи</li>
                <li className={cls.item}>Запустите таймер («помидор»)</li>
                <li className={cls.item}>Работайте пока «помидор» не прозвонит</li>
                <li className={cls.item}>Сделайте короткий перерыв (3-5 минут)</li>
                <li className={cls.item}>
                    Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена.
                    Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).
                </li>
            </ul>
        </div>
    );
};
