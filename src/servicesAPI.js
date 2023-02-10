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

export class serviceAPIMock {
    constructor(id) {
        this.id = id
    }
    
    getUser = async () => {
        const user = {
            "data": {
                "id": 18,
                "userInfos": {
                    "firstName": "Cecilia",
                    "lastName": "Ratorez",
                    "age": 34
                },
                "score": 0.3,
                "keyData": {
                    "calorieCount": 2500,
                    "proteinCount": 90,
                    "carbohydrateCount": 150,
                    "lipidCount": 120
                }
            }
        }
        return new Promise((resolve, reject) => {
            resolve(user)
         }) 
    }

    getUserActivity = async () => {
        const activity = {
            "data": {
                "userId": 18,
                "sessions": [
                    {
                        "day": "2020-07-01",
                        "kilogram": 70,
                        "calories": 240
                    },
                    {
                        "day": "2020-07-02",
                        "kilogram": 69,
                        "calories": 220
                    },
                    {
                        "day": "2020-07-03",
                        "kilogram": 70,
                        "calories": 280
                    },
                    {
                        "day": "2020-07-04",
                        "kilogram": 70,
                        "calories": 500
                    },
                    {
                        "day": "2020-07-05",
                        "kilogram": 69,
                        "calories": 160
                    },
                    {
                        "day": "2020-07-06",
                        "kilogram": 69,
                        "calories": 162
                    },
                    {
                        "day": "2020-07-07",
                        "kilogram": 69,
                        "calories": 390
                    }
                ]
            }
        }
        return new Promise((resolve, reject) => {
            resolve(activity)
         }) 
    }
    getUserSessions = async () => {
        const sessions = {
            "data": {
                "userId": 18,
                "sessions": [
                    {
                        "day": 1,
                        "sessionLength": 30
                    },
                    {
                        "day": 2,
                        "sessionLength": 40
                    },
                    {
                        "day": 3,
                        "sessionLength": 50
                    },
                    {
                        "day": 4,
                        "sessionLength": 30
                    },
                    {
                        "day": 5,
                        "sessionLength": 30
                    },
                    {
                        "day": 6,
                        "sessionLength": 50
                    },
                    {
                        "day": 7,
                        "sessionLength": 50
                    }
                ]
            }
        }
        return new Promise((resolve, reject) => {
            resolve(sessions)
         }) 
    }
    getUserPerformance = async () => {
        const performance = {
            "data": {
                "userId": 18,
                "kind": {
                    "1": "cardio",
                    "2": "energy",
                    "3": "endurance",
                    "4": "strength",
                    "5": "speed",
                    "6": "intensity"
                },
                "data": [
                    {
                        "value": 200,
                        "kind": 1
                    },
                    {
                        "value": 240,
                        "kind": 2
                    },
                    {
                        "value": 80,
                        "kind": 3
                    },
                    {
                        "value": 80,
                        "kind": 4
                    },
                    {
                        "value": 220,
                        "kind": 5
                    },
                    {
                        "value": 110,
                        "kind": 6
                    }
                ]
            }
        }
        return new Promise((resolve, reject) => {
            resolve(performance)
        })
    }
}
