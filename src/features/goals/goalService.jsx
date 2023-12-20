import axios from 'axios'

const API_URL = `${import.meta.env.VITE_API_URL}/api/goals/`

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, goalData, config)
  return response.data
}

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URL + goalId, config)
  return response.data
}

// ==================== TASKS ================== //

// CREATE NEW TASK
const createTask = async (goalId, taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(`${API_URL}${goalId}/tasks`, taskData, config)
  return response.data
}

// GET TASKS
const getTasks = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(`${API_URL}${goalId}/tasks`, config)
  return response.data
}

// DELETE USER TASK
const deleteTask = async (goalId, taskId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL}${goalId}/tasks/${taskId}`, config)
  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  getTasks,
  createTask,
  deleteTask
}

export default goalService
