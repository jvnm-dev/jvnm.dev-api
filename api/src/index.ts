import { App } from './app.ts'
import {logLevels, ServerLogger} from './utils/ServerLogger.ts'

const app = new App(5000)
try {
    await app.initialize()

    if (app.initialized) {
        await app.run()
    }
} catch (e) {
    ServerLogger.log(e.message, logLevels.ERR)
}