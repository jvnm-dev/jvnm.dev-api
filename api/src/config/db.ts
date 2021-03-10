import { config } from 'https://deno.land/x/dotenv/mod.ts'
import { Client } from 'https://deno.land/x/postgres/mod.ts'
import {logLevels, ServerLogger} from '../utils/ServerLogger.ts'

export class Repository {
    private readonly table: string

    constructor(table: string) {
        this.table = table
    }

    async findAll(
        where?: string,
        fields = '*'
        // deno-lint-ignore no-explicit-any
    ): Promise<any[] | undefined> {
        let query = `SELECT ${fields} FROM ${this.table}`

        if (where) {
            query = `${query} WHERE ${where}`
        }

        query += ';'

        const result = await Database.instance.runQuery(query)

        return result?.rows
    }

    async findFirst(
        where?: string,
        fields = '*'
        // deno-lint-ignore no-explicit-any
    ): Promise<any | undefined> {
        let query = `SELECT ${fields} FROM ${this.table}`

        if (where) {
            query = `${query} WHERE ${where}`
        }

        query += ' LIMIT 1;'

        const result = await Database.instance.runQuery(query)

        return result?.rows?.[0]
    }

    async update(
        fields: any,
        where?: string,
    ): Promise<boolean> {
        const fieldsQuery = Object.entries(fields).map(([k,v]) => `${k} = '${v}'`)
            .join(', ')

        let query = `UPDATE ${this.table} SET ${fieldsQuery}`

        if (where) {
            query = `${query} WHERE ${where}`
        }

        query += ';'

        const result = await Database.instance.runQuery(query)

        return result?._done ?? false
    }
}

class Database {
    private static instanceDatabase?: Database
    private readonly client?: Client
    private connected = false

    constructor() {
        if (!this.connected) {
            const env = config()

            this.client = new Client({
                database: env.DB_NAME,
                hostname: env.DB_HOST,
                password: env.DB_PASSWORD,
                port: env.DB_PORT,
                user: env.DB_USER,
                tls: {
                    enforce: false,
                },
            })
        }
    }

    static get instance() {
        if (!this.instanceDatabase) {
            this.instanceDatabase = new this()
        }

        return this.instanceDatabase
    }

    async connect() {
        ServerLogger.log('Connecting to database...')
        if (this.client) {
            try {
                await this.client?.connect()
                ServerLogger.log('Connected!')
                this.connected = true
                return
            } catch (e) {
                throw e
            }
        }

        throw new Error('Database: no client')
    }

    getClient(): Client | undefined {
        return this.client
    }

    async runQuery(query: string): Promise<any> {
        if (!this.client) {
            ServerLogger.log('Database client not initialized', logLevels.WARN)
        }

        ServerLogger.log(`PSQL: ${query}`, logLevels.DB)
        return await this.client?.queryObject(query)
    }
}

export const db = Database
