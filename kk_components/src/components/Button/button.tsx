import React from 'react';

import classnames from 'classnames';
// 默认尺寸为中，所以就不列到枚举里面了。
export enum ButtonSize {
    Large = 'lg', // 大
    Small = 'sm' // 小
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;	// className
    disabled?: boolean;	// 是否可点击
    size?: ButtonSize;	// 尺寸大小
    type?: ButtonType;	// 按钮类型
    children?: React.ReactNode;	// 传入的children元素
    href?: string;	// Link类型按钮的href
}

const Button: React.FC<BaseButtonProps> = (props: BaseButtonProps) => {
    const {
        type,
        disabled,
        size,
        children,
        className,
        href
    } = props;
    
     // btn, btn-lg, btn-primary
     const classes = classnames(className, 'btn', {
        [`btn-${type}`]: type,
        [`btn-${size}`]: size,
        'disabled': type === ButtonType.Link && disabled
    })

    if (type === ButtonType.Link && href) {
        return (
            <a href={href} className={classes}>{children}</a>
        )
    } else {
        return (
            <button className={classes} disabled={disabled}>{children}</button>
        )
    } 
}

Button.defaultProps = {
    disabled: false,
    type: ButtonType.Default
}

export default Button;


