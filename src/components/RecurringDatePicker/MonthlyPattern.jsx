import React, { useState, useEffect } from 'react';

const MonthlyPattern = ({ frequency, monthlyPattern, setMonthlyPattern }) => {
  const [log, setLog] = useState('');

  useEffect(() => {
    setLog(`MonthlyPattern rendered`);
  }, []);

  if (frequency !== 'monthly') return null;

  return (
     <div>
      <label className="block font-medium">Monthly Pattern (e.g. 2nd Tuesday) :</label>
      <input
        type="text"
        placeholder="2nd Tuesday"
        value={monthlyPattern}
        onChange={(e) => setMonthlyPattern(e.target.value)}
        className="mt-1 p-2 border rounded w-full"
      />
    </div>
  )
}

export default MonthlyPattern
