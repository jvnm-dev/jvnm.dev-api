import { Module } from '@nestjs/common'
import { VisitorGateway } from './visitor.gateway'

@Module({
    imports: [],
    controllers: [],
    providers: [VisitorGateway],
})
export class VisitorModule {}
