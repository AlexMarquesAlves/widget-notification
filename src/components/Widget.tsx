import { ReactNode } from 'react';

interface WidgetProps {
  children: ReactNode;
}

export function Widget({ children }: WidgetProps) {
  return (
    <>
      <h1>Widget</h1>
      {children}
    </>
  );
}
