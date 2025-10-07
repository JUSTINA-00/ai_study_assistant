import React from "react";

function Sidebar({ onSelect }) {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => onSelect("dashboard")}>Dashboard</li>
        <li onClick={() => onSelect("timetable")}>Timetable</li>
        <li onClick={() => onSelect("reminders")}>Reminders</li>
        <li onClick={() => onSelect("chatbot")}>Chatbot</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
