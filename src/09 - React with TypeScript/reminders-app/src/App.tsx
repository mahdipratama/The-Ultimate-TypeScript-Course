import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
