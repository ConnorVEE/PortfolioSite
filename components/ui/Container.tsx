type ContainerProps = {
    children: React.ReactNode;
  };
  
  export default function Container({ children }: ContainerProps) {
    return (
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {children}
      </div>
    );
  }