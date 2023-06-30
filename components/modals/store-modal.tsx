"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create Store"
      description="Add New Store To Manage Products and Categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Feature Create Store Form
    </Modal>
  );
};
