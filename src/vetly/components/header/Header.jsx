import { BottomHeader } from "./BottomHeader";
import { MiddleHeader } from "./MiddleHeader";
import { TopHeader } from "./TopHeader";
export const Header = () => {
  return (
    <header className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </header>
  );
};
