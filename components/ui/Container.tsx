type ContainerProps = {
    children: React.ReactNode;
  };
  
  export default function Container({ children }: ContainerProps) {
    return (
      <div className="mx-auto w-full max-w-300 px-6">
        {children}
      </div>
    );
  }