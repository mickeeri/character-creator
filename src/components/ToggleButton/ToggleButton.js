import React from 'react';

import styles from './ToggleButton.module.css';

const ToggleButton = ({
  label,
  color,
  children,
  isSelected,
  ...delegated
}) => {
  return (
    <button
      {...delegated}
      aria-pressed={isSelected}
      className={styles.toggleButton}
      style={{ backgroundColor: color }}
    >
      <span className="visually-hidden">{label}</span>
      <span aria-hidden>{children}</span>
    </button>
  );
};

export default ToggleButton;
