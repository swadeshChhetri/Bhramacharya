export default function MobileContainer({ children }) {
  return (
    <div className="max-w-[430px] mx-auto bg-white min-h-screen relative">
      {children}
    </div>
  );
}
