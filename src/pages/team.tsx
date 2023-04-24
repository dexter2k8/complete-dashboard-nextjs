import Header from "@/components/Header";
import { mockDataTeam } from "@/mock/mockData";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { memo, useContext, useState } from "react";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { MenuContext } from "@/hook/menuContext";
import Modal, { IMemberProps } from "@/components/Modal";

function Team() {
  const { isDark } = useContext(MenuContext);
  const [open, setOpen] = useState<boolean>(false); // Open/close modal
  const [member, setMember] = useState<IMemberProps>({} as IMemberProps);

  const columns: GridColDef[] = [
    { field: "register", headerName: "Register" },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "nameColumn" },
    { field: "age", headerName: "Age", flex: 0.5 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell({ row: { access } }) {
        return (
          <span
            className={`w-24 p-1 text-center rounded cursor-pointer ${
              access === "admin" ? (isDark ? "bg-teal-800" : "bg-teal-500") : isDark ? "bg-teal-600" : "bg-teal-400"
            }`}
            onClick={() => setOpen(true)}
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            {access}
          </span>
        );
      },
    },
  ];

  return (
    <>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <div
        className={`rounded overflow-hidden h-[calc(100vh-16.5rem)] [&_.MuiDataGrid-row]:cursor-default [&_.MuiDataGrid-root]:border-none [&_.MuiDataGrid-columnHeaders]:border-none [&_.MuiDataGrid-footerContainer]:border-none [&_.MuiDataGrid-cell:focus]:outline-none ${
          isDark
            ? "[&_.nameColumn]:text-cyan-300 [&_.MuiDataGrid-virtualScroller]:bg-slate-700 [&_.MuiDataGrid-row]:text-gray-200 [&_.MuiDataGrid-columnHeaders]:bg-indigo-900 [&_.MuiDataGrid-columnHeaders]:text-gray-200 [&_.MuiDataGrid-footerContainer]:bg-indigo-900 [&_.MuiDataGrid-footerContainer_*]:text-gray-200 [&_.MuiDataGrid-cell]:border-slate-900"
            : "[&_.nameColumn]:text-green-700 [&_.MuiDataGrid-virtualScroller]:bg-slate-300 [&_.MuiDataGrid-row]:text-gray-800 [&_.MuiDataGrid-columnHeaders]:bg-indigo-300 [&_.MuiDataGrid-columnHeaders]:text-gray-800 [&_.MuiDataGrid-footerContainer]:bg-indigo-300 [&_.MuiDataGrid-footerContainer_*]:text-gray-800 [&_.MuiDataGrid-cell]:border-slate-100"
        }`}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={(e) => setMember(e.row)}
        />
      </div>

      <Modal open={open} onClose={() => setOpen(false)} member={member} />
    </>
  );
}

export default memo(Team);
