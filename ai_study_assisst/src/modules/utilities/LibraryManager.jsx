import React, { useState } from "react";

export default function LibraryManager() {
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    const uploaded = Array.from(e.target.files).map(f => ({
      name: f.name,
      url: URL.createObjectURL(f)
    }));
    setFiles(prev => [...prev, ...uploaded]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Student Library</h2>
      <input type="file" multiple onChange={handleUpload} />
      <ul className="mt-2">
        {files.map((f, i) => (
          <li key={i}>
            <a href={f.url} target="_blank" rel="noreferrer" className="text-indigo-600 underline">
              {f.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

