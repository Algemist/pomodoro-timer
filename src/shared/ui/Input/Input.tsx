import { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum InputTheme {
    PRIMARY = 'primary',
    CLEAR = 'clear'
}

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    placeholder?: string;
    theme?: InputTheme;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        type,
        onChange,
        theme = InputTheme.CLEAR,
        placeholder,
        ...others
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChangeHandler}
                className={classNames(cls.Input, { [cls[theme]]: true }, [className])}
                {...others}
            />
        </div>
    );
};
