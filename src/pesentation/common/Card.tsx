import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return <div className={className}>{children}</div>;
};

export default Card;
