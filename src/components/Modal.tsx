import { MenuContext } from "@/hook/menuContext";
import { formatCurrency } from "@/utils/lib";
import { memo, useCallback, useContext, useEffect, useRef, useState } from "react";

export interface IMemberProps {
  id: number;
  register?: number;
  name?: string;
  email?: string;
  age?: number;
  phone?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  billed: number | 0;
  paid: number | 0;
  date?: string;
  access?: string;
}

interface IModalProps {
  open: boolean;
  onClose: () => void;
  member: IMemberProps;
}

function Modal({ open, onClose, member }: IModalProps) {
  const { isDark } = useContext(MenuContext);
  const modalRef = useRef<HTMLDivElement>(null);

  // hide calendar on ESC press
  const hideOnEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Hide on outside click
  const hideOnClickOutside = useCallback(
    (e: MouseEvent) => {
      if (e.target === modalRef.current) onClose();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // event listeners
  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={modalRef}
      className={`fixed top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-20 backdrop-blur-sm duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-2 pb-4 px-6 min-w-[48rem] rounded-xl shadow-md ${
          isDark ? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-700"
        }`}
      >
        <header className="flex items-center justify-between h-20 mb-4">
          <h2 className={`flex justify-center flex-1 font-bold ${isDark ? "text-indigo-300" : "text-indigo-900"}`}>
            Member Details
          </h2>
          <span
            className={`text-xs font-extrabold border p-1 rounded hover:shadow cursor-pointer duration-300 ${
              isDark ? "border-gray-500 hover:border-gray-400" : "border-gray-300 hover:border-gray-400"
            }`}
            onClick={onClose}
          >
            ESC
          </span>
        </header>

        <ul className="grid grid-cols-[1fr,1fr] mb-6">
          <li>
            <h4>Register</h4>
            <p>{member.register}</p>
          </li>
          <li>
            <h4>Access Level</h4>
            <p>{member.access}</p>
          </li>
        </ul>
        <ul className="grid grid-cols-[2fr,1fr,1fr] gap-6 mb-6">
          <li>
            <h4>Name</h4>
            <p>{member.name}</p>
          </li>
          <li>
            <h4>Age</h4>
            <p>{member.age}</p>
          </li>
          <li>
            <h4>Phone</h4>
            <p>{member.phone}</p>
          </li>
          <li>
            <h4>Address</h4>
            <p>{member.address}</p>
          </li>
          <li>
            <h4>City</h4>
            <p>{member.city}</p>
          </li>
          <li>
            <h4>Zip Code</h4>
            <p>{member.zipCode}</p>
          </li>
        </ul>
        <div className="mb-6">
          <h4>Date of Submission</h4>
          <p>{member.date}</p>
        </div>
        <ul className="flex justify-center gap-48">
          <li>
            <h4>Total Billed</h4>
            <h2 className="font-extrabold">{formatCurrency(member.billed)}</h2>
          </li>
          <li>
            <h4>Total Paid</h4>
            <span className={`flex items-baseline gap-2 ${isDark ? "text-teal-400" : "text-teal-700"}`}>
              <h2 className="font-extrabold">{formatCurrency(member.paid)}</h2>
              <h4>{((100 * member.paid) / member.billed).toFixed(2)}%</h4>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(Modal);
