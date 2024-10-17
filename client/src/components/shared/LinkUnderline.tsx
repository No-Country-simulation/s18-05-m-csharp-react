import Link, { LinkProps } from 'next/link';
import React, { FC, ReactNode } from 'react';

interface LinkUnderlineProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const LinkUnderline: FC<LinkUnderlineProps> = ({ href, children, className, ...props }) => {
  return (
    <Link href={href} {...props} className={`font-semibold text-secondary underline-offset-2 hover:underline ${className}`}>
      {children}
    </Link>
  );
};

export default LinkUnderline;
