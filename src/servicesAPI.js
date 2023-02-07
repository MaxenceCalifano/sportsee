const url = "http://localhost:3000"


/**
 * @param {Number} id of the user
 */
export const getUser = async (id) => {
    const response = await fetch(`${url}/user/${id}`)
    if(!response.ok) {
        const errorMessage = `Une erreur est survenue: ${response.status}`
        throw new Error(errorMessage)
    }
    let user = await response.json()
    if(Object.hasOwn(user.data,"todayScore")) {
       const todayScore = user.data.todayScore
       user.data['score'] = todayScore 
    } 
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