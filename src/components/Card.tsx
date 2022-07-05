import React, {FC, useState} from "react";

export enum CardVariantType {
  outline = "outline",
  primary = 'primary'
}

interface CardProps {
  width?: string; 
  height: string;
  backgroundColor?: string;
  children?: any[];
  variant: CardVariantType;
  onClick: (num: number) => void;
}

export const Card: FC<CardProps> = 
({
  width, 
  height, 
  children,
  variant,
  onClick,
}) => {
  const [state] = useState(0)
  return (
    <div style={{width, height, 
    border: variant === CardVariantType.outline ? '1px solid gray' : 'none',
    background: variant === CardVariantType.primary ? 'lightgray' : ''
    }} 
    onClick={() => onClick(state)}
    >
      {children}
    </div>
  )
} 