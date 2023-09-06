import { useEffect, useState } from "react";
import Modal from "@/app/components/ui/modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
interface OverViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  title: string;
  imageUrl: string;
  subtitle: string;
}
const OverViewModal: React.FC<OverViewModalProps> = ({
  isOpen,
  onClose,
  loading,
  title,
  imageUrl,
  subtitle,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Modal
      title={title}
      description={subtitle}
      onClose={onClose}
      isOpen={isOpen}
    >
      <div className="flex items-center justify-end w-full pt-6 space-x-2">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
      </div>
      <div className="items-center justify-center p-6 ">
        <Image
          src={`${imageUrl}`}
          alt="screenShot"
          width={100}
          height={100}
          className="h-auto max-w-[100%]"
        />
      </div>
    </Modal>
  );
};

export default OverViewModal;
