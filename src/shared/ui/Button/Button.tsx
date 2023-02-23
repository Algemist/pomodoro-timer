import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface ButtonProps {
    className?: string;
    theme?: ButtonTheme;
    children: ReactNode;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonTheme.PRIMARY,
        children,
        disabled = false,
    } = props;

    const mods = {
        [cls[theme]]: true,
        [cls.hover]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button type="button" className={classNames(cls.Button, mods, [className])}>
            {children}
        </button>
    );
};
