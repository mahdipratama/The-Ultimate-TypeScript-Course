import axios from 'axios';
import Reminder from '../models/reminder';

class ReminderService {
  http = axios.create({
    // CTRL + SPACE
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

  // fetch reminders list
  async getReminders() {
    const response = await this.http.get<Reminder[]>('/todos');
    return response.data;
  }

  // add reminders list
  async addReminder(title: string) {
    const response = await this.http.post<Reminder>('/todos', { title });
    return response.data;
  }

  // remove reminders list
  async removeReminder(id: number) {
    const response = await this.http.delete('/todos/' + id);
    return response.data;
  }
}

// exporting the class as an instance With this, consumers of this module do not need to create a 'new' instance of this service every time.
export default new ReminderService();
