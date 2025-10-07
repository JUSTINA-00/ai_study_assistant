import React from "react";

function OverviewCards() {
  const data = [
    { title: "Assignments Due", count: 3 },
    { title: "Hours Studied", count: 5 },
    { title: "Upcoming Tests", count: 2 },
  ];

  return (
    <div className="overview-cards">
      {data.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.title}</h3>
          <p>{item.count}</p>
        </div>
      ))}
    </div>
  );
}

export default OverviewCards;
