import * as Colors from 'https://deno.land/std/fmt/colors.ts'
import { Context } from 'https://deno.land/x/oak/mod.ts'
import { format } from 'https://deno.land/std@0.88.0/datetime/mod.ts'

/**
 * More explicit way to identify a log level
 */
export const logLevels = {
    MISC: 0,
    INFO: 1,
    WARN: 2,
    ERR: 3,
}

/**
 * Function who disable the no-console tslint rule
 * used to avoid doing it a lot
 *
 * @param message string
 */
const log = (message: string): void => {
    console.log(message)
}

/**
 * Class ServerLogger
 *
 * This class is used to display things
 * in the terminal
 */
export class ServerLogger {
    /**
     * Method who logs a given message with a given color in the terminal
     *
     * @param message string the message to log
     * @param level number will determine the color of the message
     */
    static log(message: string, level: number = logLevels.INFO): void {
        const datetime: string = format(new Date(), 'dd/MM/yyyy HH:mm:ss')

        switch (level) {
            case logLevels.MISC:
                log(message)
                break

            case logLevels.INFO:
                log(Colors.cyan(`[jvnm] @ [${datetime}] ${message}`))
                break

            case logLevels.WARN:
                log(Colors.yellow(`[jvnm] @ [${datetime}] ${message}`))
                break

            case logLevels.ERR:
                log(Colors.red(`[jvnm] @ [${datetime}] ${message}`))
                break

            default:
                throw new Error('Unknown log level')
        }
    }

    /**
     * Method who log a request into the terminal
     *
     * @returns Function a middleware
     */
    static newRequest() {
        return async (ctx: Context, next: () => Promise<void>) => {
            await next()
            ServerLogger.log(`${ctx.request.method} ${ctx.request.url}`)
        }
    }
}
