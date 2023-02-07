export const getUser = async () => {
    const response = await fetch("http://localhost:3000/user/18")
    if(!response.ok) {
        const errorMessage = `Une erreur est survenue: ${response.status}`
        throw new Error(errorMessage)
    }
    const user = response.json()
    return user
}
export const getUserActivity = async () => {
    const response = await fetch("http://localhost:3000/user/18/activity")
    if(!response.ok) {
        const errorMessage = `Une erreur est survenue: ${response.status}`
        throw new Error(errorMessage)
    }
    const activity = response.json()
    return activity
}
export const getUserSessions = async () => {
    const response = await fetch("http://localhost:3000/user/18/average-sessions")
    if(!response.ok) {
        const errorMessage = `Une erreur est survenue: ${response.status}`
        throw new Error(errorMessage)
    }
    const sessions = response.json()
    return sessions
}
export const getUserPerformance = async () => {
    const response = await fetch("http://localhost:3000/user/18/performance")
    if(!response.ok) {
        const errorMessage = `Une erreur est survenue: ${response.status}`
        throw new Error(errorMessage)
    }
    const performance = response.json()
    return performance
}