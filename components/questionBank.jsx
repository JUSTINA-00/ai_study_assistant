import { useState } from 'react';
import questionBank from '../data/questionBank.json';

const QuestionBank = () => {
  const [search, setSearch] = useState('');

  // Filter modules based on course, module, or question text
  const filtered = questionBank.filter(module =>
    module.course.toLowerCase().includes(search.toLowerCase()) ||
    module.module.toString().toLowerCase().includes(search.toLowerCase()) ||
    module.questions.some(q => q.question.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-4">
      <input
        type="text"
        className="border rounded p-2 w-full mb-4"
        placeholder="Search course, module, or question..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((moduleItem, i) => (
        <div key={i} className="mb-4 border p-3 rounded">
          <h2 className="font-bold">
            {moduleItem.course} - Module {moduleItem.module}
          </h2>
          <p className="text-sm">Mark Weightage: {moduleItem.markWeightage}</p>
          <ul className="list-disc ml-5 mt-2">
            {moduleItem.questions.map((q, index) => (
              <li key={index}>{q.question}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionBank;
