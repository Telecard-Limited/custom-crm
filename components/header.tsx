import { MainNav } from "@/components/main-nav-links";

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex items-center px-4 h-30">
        <MainNav className="mx-6" />
      </div>
    </div>
  );
};

export default Header;
