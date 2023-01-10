const Layout = ({ children, className, noLayout }) => {
  return (
    <div className={`${className} ${!noLayout ? 'layout' : ''}`}>
      {children}
    </div>
  );
};

export default Layout;
