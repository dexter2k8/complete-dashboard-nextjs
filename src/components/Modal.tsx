import { memo, useRef, useState } from "react";

interface IModalProps {
  open: boolean;
  onClose: () => void;
}

function Modal({ open, onClose }: IModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={modalRef}
      className={`fixed top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-20 backdrop-blur-sm duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-2 pb-4 px-6 min-w-[40rem] rounded-xl bg-white shadow-md">
        <header className="flex items-center justify-between h-20">
          <h2 className="flex justify-center flex-1">User Details</h2>
          <span
            className="text-xs font-bold border border-gray-200 hover:border-gray-300 p-1 rounded hover:shadow cursor-pointer"
            onClick={onClose}
          >
            ESC
          </span>
        </header>
      </div>
    </div>
  );
}

export default memo(Modal);
