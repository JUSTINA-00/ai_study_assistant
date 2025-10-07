import React, { useState, useEffect } from "react";
import AssignmentSorter from "./AssignmentSorter";

function TimetableReader() {
  const [timetable, setTimetable] = useState([]);
  const [todaySubjects, setTodaySubjects] = useState([]);

  useEffect(() => {
    // Sample timetable (can be replaced with Google API)
    const mockTimetable = [
      { day: "Monday", subject: "Mathematics", time: "9:00 AM" },
      { day: "Monday", subject: "Physics", time: "11:00 AM" },
      { day: "Tuesday", subject: "Chemistry", time: "9:00 AM" },
    ];

    setTimetable(mockTimetable);

    const today = new Date().toLocaleString("en-US", { weekday: "long" });
    const filtered = mockTimetable.filter(item => item.day === today);
    setTodaySubjects(filtered);
  }, []);

  return (
    <div>
      <h2>Today's Classes</h2>
      <ul>
        {todaySubjects.map((item, i) => (
          <li key={i}>
            {item.subject} — {item.time}
          </li>
        ))}
      </ul>

      <AssignmentSorter subjects={todaySubjects.map(s => s.subject)} />
    </div>
  );
}

export default TimetableReader;
