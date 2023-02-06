export const getUser = async () => {
    const response = await fetch("http://localhost:3000/user/18")
    const user = response.json()
    return user
}
export const getUserActivity = async () => {
    const response = await fetch("http://localhost:3000/user/18/activity")
    const activity = response.json()
    return activity
}
export const getUserSessions = async () => {
    const response = await fetch("http://localhost:3000/user/18/average-sessions")
    const sessions = response.json()
    return sessions
}
export const getUserPerformance = async () => {
    const response = await fetch("http://localhost:3000/user/18/performance")
    const performance = response.json()
    return performance
}