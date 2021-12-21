import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './app.module'

async function bootstrap() {
    const appOptions = {
        cors: true,
    }

    const app = await NestFactory.create(ApplicationModule, appOptions)

    await app.listen(3000)
}

bootstrap()
