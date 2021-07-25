import { Connection } from 'typeorm'
import { join } from 'path'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'

import { AvailabilityModule } from './availability/availability.module'
import { ExperienceModule } from './experience/experience.module'
import { TechnologyModule } from './technology/technology.module'
import { UserModule } from './user/user.module'
import { JourneyModule } from './journey/journey.module'
import { EmailModule } from './email/email.module'
import { AppController } from './app.controller'
import { Config } from './config'

@Module({
    imports: [
        EmailModule,
        AvailabilityModule,
        ExperienceModule,
        TechnologyModule,
        UserModule,
        JourneyModule,

        TypeOrmModule.forRoot(Config.getInstance().typeOrmConfig),
        GraphQLModule.forRoot({
            debug: true,
            playground: true,
            include: [
                AvailabilityModule,
                ExperienceModule,
                TechnologyModule,
                UserModule,
                JourneyModule,
            ],
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            context: ({ req }) => ({ headers: req.headers }),
        }),
    ],
    controllers: [AppController],
    providers: [],
})
export class ApplicationModule {
    constructor(private readonly connection: Connection) {}
}
