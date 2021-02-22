import {Application, applyGraphQL, Router} from './config/deps.ts'
import {db} from './config/db.ts'
import {schemas} from './schemas/index.ts'
import {resolvers} from './resolvers/index.ts'
import {logLevels, ServerLogger} from './utils/ServerLogger.ts'

export class App {
    public app: Application
    public port: number
    public initialized: boolean = false

    constructor(port: number) {
        this.app = new Application()
        this.port = port
    }

    public async initialize(): Promise<void> {
        try {
            this.initializeMiddleware()
            await this.initializeRoutes()
            await db.instance.connect()
            this.initialized = true
        } catch (e) {
            ServerLogger.log(e.message, logLevels.ERR)
        }
    }

    public async run(): Promise<void> {
        try {
            ServerLogger.log(`Server start on port ${this.port}`)
            await this.app.listen({port: this.port})
        } catch (e) {
            ServerLogger.log('Failed to start server ' + e.message, logLevels.ERR)
        }
    }

    private initializeMiddleware() {
        this.app.use(ServerLogger.newRequest())
    }

    private async initializeRoutes() {
        const GraphQLService = await applyGraphQL({
            Router,
            path: '/graphql',
            typeDefs: schemas,
            resolvers: {},
        })

        this.app.use(GraphQLService.routes(), GraphQLService.allowedMethods())
    }
}