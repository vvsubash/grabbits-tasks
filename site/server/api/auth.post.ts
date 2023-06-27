const users = [
    {
        userName: 'root',
        password: 'pass'
    }
]

export default defineEventHandler(async (event) => {
    const body: {
        userName: string
        password: string
    } = await readBody(event)

    const userExists = users.findIndex((user) => {
        return user.userName === body.userName
    })

    if (userExists == -1) {
        return { message: 'user not found' }
    }

    const user = users.find((user) => {
        return user.userName === body.userName
    })

    if (user?.password !== body.password) {
        return {
            message: 'wrong password',
        }
    }
    return {
        message: 'ok'
    }

})