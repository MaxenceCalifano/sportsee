const url = "http://localhost:3000"

/**
 * @param {Number} id of the user
 */
export class serviceAPI {
    constructor(id) {
        this.id = id
    }
    
    getUser = async () => {
        const response = await fetch(`${url}/user/${this.id}`)
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

    getUserActivity = async () => {
        const response = await fetch(`${url}/user/${this.id}/activity`)
        if(!response.ok) {
            const errorMessage = `Une erreur est survenue: ${response.status}`
            throw new Error(errorMessage)
        }
        const activity = response.json()
        return activity
    }
    getUserSessions = async () => {
        const response = await fetch(`${url}/user/${this.id}/average-sessions`)
        if(!response.ok) {
            const errorMessage = `Une erreur est survenue: ${response.status}`
            throw new Error(errorMessage)
        }
        const sessions = response.json()
        return sessions
    }
    getUserPerformance = async () => {
        const response = await fetch(`${url}/user/${this.id}/performance`)
        if(!response.ok) {
            const errorMessage = `Une erreur est survenue: ${response.status}`
            throw new Error(errorMessage)
        }
        const performance = response.json()
        return performance
    }
}


