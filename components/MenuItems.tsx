"use client";
interface MenuItemProps {
  onClick: () => void;
  label: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-3 py-4 font-semibold text-right text-white transition cursor-pointer hover:rounded-full hover:text-blue-500"
    >
      {label}
    </div>
  );
};

export default MenuItem;
