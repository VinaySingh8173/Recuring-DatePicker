import React, { useState, useEffect } from 'react';
import FrequencySelector from './FrequencySelector';
import WeeklySelector from './WeeklySelector';
import MonthlyPattern from './MonthlyPattern';
import EndCondition from './EndCondition';
import MiniCalendar from './MiniCalendar';
import SummaryPreview from './SummaryPreview';

const index = () => {
  const [frequency, setFrequency] = useState('daily');
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [monthlyPattern, setMonthlyPattern] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endType, setEndType] = useState('never');
  const [endValue, setEndValue] = useState('');

  const [log, setLog] = useState('');

  useEffect(() => {
    setLog(`Frequency changed to: ${frequency}`);
    console.log(`Frequency changed to: ${frequency}`);
  }, [frequency]);

  const recurrenceProps = {
    frequency,
    setFrequency,
    daysOfWeek,
    setDaysOfWeek,
    monthlyPattern,
    setMonthlyPattern,
    startDate,
    setStartDate,
    endType,
    setEndType,
    endValue,
    setEndValue,
  };

  return (
    <div className="space-y-4 border p-4 rounded-xl shadow-md">
      <FrequencySelector {...recurrenceProps} />
      <WeeklySelector {...recurrenceProps} />
      <MonthlyPattern {...recurrenceProps} />
      <EndCondition {...recurrenceProps} />
      <MiniCalendar {...recurrenceProps} />
      <SummaryPreview {...recurrenceProps} />
      {log && <p className="text-sm text-gray-500 italic">{log}</p>}
    </div>
  )
}

export default index
