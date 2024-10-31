import Link, { LinkProps } from 'next/link';
import React, { FC, ReactNode } from 'react';

interface LinkUnderlineProps extends LinkProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

const LinkUnderline: FC<LinkUnderlineProps> = ({ href, children, color, className, ...props }) => {
  return (
    <Link href={href}  {...props} className={`font-semibold ${color ?? "text-secondary"} underline-offset-2 hover:underline ${className}`}>
      {children}
    </Link>
  );
};

export default LinkUnderline;
