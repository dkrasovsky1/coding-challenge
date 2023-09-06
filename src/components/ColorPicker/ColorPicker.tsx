import React from 'react';
import clsx from 'clsx';

import styles from './ColorPicker.module.scss';

interface ColorPickerProps {
  className?: string;
  currentColor: string;
  colors: string[];
  onChange: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  className,
  currentColor,
  colors,
  onChange,
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      {colors.map((color) => (
        <button
          key={color}
          className={clsx(styles.color, {
            [styles.active]: color === currentColor,
          })}
          style={{ backgroundColor: color }}
          aria-label="color"
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  );
};
