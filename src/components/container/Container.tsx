const Container = ({ children, addClass }: ContainerProps) => {
  return <div className={`w-full px-[5%] ${addClass}`}>{children}</div>;
};

interface ContainerProps {
  children?: any;
  addClass?: string; // additonal class names
}

export default Container;
