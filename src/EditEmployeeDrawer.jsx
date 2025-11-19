import React, { useEffect, useState } from "react";
import Drawer from "./Drawer";

const EditEmployeeDrawer = ({ open, onClose, employee, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    department: "",
    role: "",
  });

  useEffect(() => {
    if (employee) setForm(employee);
  }, [employee]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <div className="p-6 flex flex-col gap-4 h-full">
        <h2 className="text-xl font-semibold">Edit Employee</h2>

        <input
          className="border p-2 rounded"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
        />

        <button
          className="mt-auto bg-blue-600 text-white py-2 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </Drawer>
  );
};

export default EditEmployeeDrawer;
