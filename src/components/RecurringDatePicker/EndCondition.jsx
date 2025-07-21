import React, { useState, useEffect } from 'react';

const EndCondition = ({ endType, endValue, setEndType, setEndValue }) => {
  const [log, setLog] = useState('');

  useEffect(() => {
    setLog(`EndCondition loaded`);
  }, []);

  return (
     <div>
      <label className="block font-medium">Ends :</label>
      <select
        value={endType}
        onChange={(e) => setEndType(e.target.value)}
        className="mt-1 p-2 border rounded w-full"
      >
        <option value="never">Never</option>
        <option value="after">After N Occurrences</option>
        <option value="onDate">On a Specific Date</option>
      </select>

      {endType === 'after' && (
        <input
          type="number"
          className="mt-2 p-2 border rounded w-full"
          placeholder="Enter number of occurrences"
          value={endValue}
          onChange={(e) => setEndValue(e.target.value)}
        />
      )}

      {endType === 'onDate' && (
        <input
          type="date"
          className="mt-2 p-2 border rounded w-full"
          value={endValue}
          onChange={(e) => setEndValue(e.target.value)}
        />
      )}
    </div>
  )
}

export default EndCondition
