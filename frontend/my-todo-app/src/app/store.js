import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
  tasks: [],
  error: null, // To store error messages
  loading: false, // To indicate loading state

  handleError: (error) => {
    const errorMessage = error.response
      ? error.response.data
      : 'An error occurred. Please try again later.';
    set({ error: errorMessage });
  },

  fetchTasks: async () => {
    set({ loading: true }); // Set loading to true
    try {
      const response = await axios.get('http://localhost:3000/tasks/');
      set({ tasks: response.data, error: null });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      useStore.getState().handleError(error); // Use the error handling helper
    } finally {
      set({ loading: false }); // Set loading to false
    }
  },

  addTask: async (task) => {
    set({ loading: true });
    try {
      const response = await axios.post('http://localhost:3000/tasks/', task);
      set((state) => ({ tasks: [...state.tasks, response.data], error: null }));
    } catch (error) {
      console.error('Error adding task:', error);
      useStore.getState().handleError(error);
    } finally {
      set({ loading: false });
    }
  },

  updateTask: async (task) => {
    set({ loading: true });
    try {
      await axios.put(`http://localhost:3000/tasks/${task.id}`, task);
      set((state) => ({
        tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
        error: null,
      }));
    } catch (error) {
      console.error('Error updating task:', error);
      useStore.getState().handleError(error);
    } finally {
      set({ loading: false });
    }
  },

  deleteTask: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
        error: null,
      }));
    } catch (error) {
      console.error('Error deleting task:', error);
      useStore.getState().handleError(error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useStore;
