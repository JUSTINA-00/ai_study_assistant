import React, { useState, useEffect } from "react";

function AssignmentSorter({ subjects }) {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Example data; in real use, fetch from Google Classroom
    const mockAssignments = [
      { title: "Math Worksheet", subject: "Mathematics", due: "2025-10-08" },
      { title: "Lab Report", subject: "Physics", due: "2025-10-09" },
    ];

    const filtered = mockAssignments.filter(a =>
      subjects.includes(a.subject)
    );
    setAssignments(filtered);
  }, [subjects]);

  return (
    <div>
      <h3>Assignments for Tomorrow</h3>
      <ul>
        {assignments.map((a, i) => (
          <li key={i}>
            <strong>{a.title}</strong> — {a.subject} (Due: {a.due})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssignmentSorter;
