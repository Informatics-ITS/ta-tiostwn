import clsx from 'clsx';

const UnstyledLink = ({ children, className, href, ...rest }) => {
  return (
    <a
      href={href}
      className={clsx(
        'text-primary-500 hover:text-primary-700 focus:ring-primary-500 focus:ring focus:outline-none',
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};
UnstyledLink.displayName = 'UnstyledLink';
export default UnstyledLink;
