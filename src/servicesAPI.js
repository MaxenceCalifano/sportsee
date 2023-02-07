const url = "http://localhost:3000"

export const getUser = async (id) => {
    const response = await fetch(`${url}/user/${id}`)
    if(!response.ok) {
        const errorMessage = `Une erreur est survenue: ${response.status}`
        throw new Error(errorMessage)
    }
    const user = response.json()
    return user
}
export const getUserActivity = async (id) => {
    const response = await fetch(`${url}/user/${id}/activity`)
    if(!response.ok) {
        const errorMessage = `Une erreur est survenue: ${response.status}`
        throw new Error(errorMessage)
    }
    const activity = response.json()
    return activity
}
export const getUserSessions = async (id) => {
    const response = await fetch(`${url}/user/${id}/average-sessions`)
    if(!response.ok) {
        const errorMessage = `Une erreur est survenue: ${response.status}`
        throw new Error(errorMessage)
    }
    const sessions = response.json()
    return sessions
}
export const getUserPerformance = async (id) => {
    const response = await fetch(`${url}/user/${id}/performance`)
    if(!response.ok) {
        const errorMessage = `Une erreur est survenue: ${response.status}`
        throw new Error(errorMessage)
    }
    const performance = response.json()
    return performance
}