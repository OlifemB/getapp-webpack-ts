import React from 'react';

interface LayoutProps {
  children: JSX.Element | JSX.Element[] | string | string[]
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
      <div className={'app'}>
        {children}
      </div>
  );
};

export default Layout;