import React, { useState, useEffect } from 'react';

const SummaryPreview = ({ frequency, daysOfWeek, endType, endValue }) => {
  const [log, setLog] = useState('');

  useEffect(() => {
    setLog(`Summary updated`);
  }, [frequency, endType, endValue]);

  return (
       <div className="mt-4 p-3 bg-gray-100 rounded">
      <strong>Summary :</strong>
      <p>
        Repeats {frequency}
        {frequency === 'weekly' && daysOfWeek.length > 0 && ` on ${daysOfWeek.join(', ')}`}
        {endType === 'after' && `, ending after ${endValue} times`}
        {endType === 'onDate' && `, ending on ${endValue}`}
        {endType === 'never' && `, with no end date`}
      </p>
    </div>
  )
}

export default SummaryPreview
