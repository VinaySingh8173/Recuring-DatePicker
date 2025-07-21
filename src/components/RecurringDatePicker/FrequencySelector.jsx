import React, { useState, useEffect } from 'react';

const FrequencySelector = ({ frequency, setFrequency }) => {
  const [log, setLog] = useState('');

  useEffect(() => {
    setLog(`FrequencySelector loaded`);
  }, []);

  return (
       <div>
      <label className="block font-medium">Recurrence Pattern :</label>
      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        className="mt-1 p-2 border rounded w-full"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  )
}

export default FrequencySelector
