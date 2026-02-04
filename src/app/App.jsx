import AppRouter from "./router";
import MobileContainer from "../shared/layout/MobileContainer";
import BottomNav from "../features/navigation/BottonNav";
// import BottomNav from "../features/navigation/BottomNav";

export default function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <MobileContainer>
        <AppRouter />
        <BottomNav />
      </MobileContainer>
    </div>
  );
}
