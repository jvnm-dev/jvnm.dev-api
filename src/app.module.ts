import { join } from 'path'
import { Connection } from 'typeorm'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

import { Config } from './config'
import { AvailabilityModule } from './availability/availability.module'
import { ExperienceModule } from './experience/experience.module'
import { TechnologyModule } from './technology/technology.module'
import { UserModule } from './user/user.module'
import { JourneyModule } from './journey/journey.module'
import { EmailModule } from './email/email.module'
import { UrlModule } from './url/url.module'
import { AppController } from './app.controller'
import { HealthModule } from './health/health.module'
import { DevelopmentModule } from './development/development.module'
import { VisitorModule } from './visitor/visitor.module'

const modules = [
    EmailModule,
    AvailabilityModule,
    ExperienceModule,
    TechnologyModule,
    UserModule,
    JourneyModule,
    UrlModule,
    HealthModule,
    DevelopmentModule,
    VisitorModule,
]

@Module({
    imports: [
        ...modules,
        TypeOrmModule.forRoot(Config.getInstance().typeOrmConfig),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            debug: true,
            playground: true,
            include: modules,
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            context: ({ req: { headers } }) => ({ headers }),
        }),
    ],
    controllers: [AppController],
    providers: [],
})
export class ApplicationModule {
    constructor(private readonly connection: Connection) {}
}
