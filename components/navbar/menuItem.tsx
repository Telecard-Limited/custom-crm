"use client";
interface MenuItemProps {
  onClick: () => void;
  label: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 font-semibold transition hover:bg-rose-500 hover:rounded-full hover:text-white"
    >
      {label}
    </div>
  );
};

export default MenuItem;
