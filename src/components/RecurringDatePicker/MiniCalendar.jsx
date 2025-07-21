import React, { useState, useEffect } from 'react';

const MiniCalendar = ({ startDate, setStartDate }) => {
  const [log, setLog] = useState('');

  useEffect(() => {
    setLog(`MiniCalendar initialized`);
  }, []);

  return (
     <div>
      <label className="block font-medium">Start Date :</label>
      <input
        type="date"
        className="mt-1 p-2 border rounded w-full"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <p className="mt-2 text-sm text-gray-500">Upcoming dates will be shown here...</p>
    </div>
  )
}

export default MiniCalendar
