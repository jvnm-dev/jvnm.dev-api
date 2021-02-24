import { App } from './app.ts'
import { logLevels, ServerLogger } from './utils/ServerLogger.ts'
import { appName } from './constants/ascii.ts'

const app = new App(5000)
try {
    ServerLogger.log(appName, 0)
    await app.initialize()

    if (app.initialized) {
        await app.run()
    }
} catch (e) {
    ServerLogger.log(e.message, logLevels.ERR)
}
