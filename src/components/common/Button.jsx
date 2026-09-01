import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'accent', 'ghost', 'outline', 'glow'
  size = 'md',        // 'sm', 'md', 'lg'
  icon: Icon,
  iconRight: IconRight,
  className = '',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const variantClass = `btn-${variant}`;
  const sizeClass = size !== 'md' ? `btn-${size}` : '';

  return (
    <button
      type={type}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
      ) : Icon ? (
        <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      ) : null}
      <span>{children}</span>
      {!loading && IconRight && (
        <IconRight size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      )}
    </button>
  );
};
