import * as bcrypt from 'https://deno.land/x/bcrypt/mod.ts'
import { Repository } from '../config/db.ts'
import { config } from 'https://deno.land/x/dotenv/mod.ts'
import { create as createToken } from 'https://deno.land/x/djwt/mod.ts'

export interface IUserLoginInput {
    email: string
    password: string
}

const usersRepository = new Repository('users')

export const UserMutations = {
    login: async (
        _: any,
        { email, password }: IUserLoginInput
    ): Promise<string> => {
        const env = config()

        const candidateUser = await usersRepository.findFirst(
            `email = '${email}'`
        )
        const candidatePassword = (candidateUser ?? {}).password ?? ''

        const isPasswordCorrect = await bcrypt.compare(
            password,
            candidatePassword
        )

        if (!isPasswordCorrect) {
            throw new Error('Email or password incorrect')
        }

        const token = await createToken(
            { alg: 'HS512', typ: 'JWT' },
            { email: candidateUser.email },
            env.JWT_SECRET
        )

        await usersRepository.update({ token }, `email = '${email}'`)

        return JSON.stringify(token)
    },
}
