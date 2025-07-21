import React, { useState, useEffect } from 'react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeeklySelector = ({ frequency, daysOfWeek, setDaysOfWeek }) => {
  const [log, setLog] = useState('');

  useEffect(() => {
    setLog(`WeeklySelector mounted`);
  }, []);

  if (frequency !== 'weekly') return null;

  const toggleDay = (day) => {
    if (daysOfWeek.includes(day)) {
      setDaysOfWeek(daysOfWeek.filter((d) => d !== day));
    } else {
      setDaysOfWeek([...daysOfWeek, day]);
    }
  };
  return (
    <div>
      <label className="block font-medium mb-1">Select Days :</label>
      <div className="flex gap-2 flex-wrap">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`px-3 py-1 rounded border ${
              daysOfWeek.includes(day) ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  )
}

export default WeeklySelector
