export default function Container({ children, className }: { children: any, className?: string}) {
  return (
    <div className={`container h-screen mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}