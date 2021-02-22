import {config} from 'https://deno.land/x/dotenv/mod.ts'
import {Client} from 'https://deno.land/x/postgres/mod.ts'
import { ServerLogger } from '../utils/ServerLogger.ts'

class Database {
    private static instanceDatabase?: Database
    private readonly client?: Client
    private connected: boolean = false

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
                this.connected = true
                return
            } catch (e) {
                throw e
            }
        }

        throw new Error('Database: no client')
    }
}

export const db = Database
db.instance