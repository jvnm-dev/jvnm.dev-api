import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Logger } from '@nestjs/common'
import { Socket, Server } from 'socket.io'

const randomColor = (() => {
    'use strict'

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    return () => {
        var h = randomInt(0, 360)
        var s = randomInt(42, 98)
        var l = randomInt(40, 90)
        return `hsl(${h},${s}%,${l}%)`
    }
})()

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class VisitorGateway
    implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server
    private logger: Logger = new Logger('VisitorGateway')

    @SubscribeMessage('positionChangedServer')
    handlePositionChanged(
        client: Socket,
        payload: { id: number; x: number; y: number }
    ): void {
        this.logger.log(
            `Client ${client.id} moved to ${payload.x}, ${payload.y}`
        )
        this.server.emit('positionChangedClient', {
            id: client.id,
            color: client.data.color,
            ...payload,
        })
    }

    @SubscribeMessage('disconnectToServer')
    disconnectToServer(client: Socket) {
        this.server.emit('disconnectToClient', {
            id: client.id,
        })
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`)
    }

    handleConnection(client: Socket) {
        this.logger.log(`Client connected: ${client.id}`)
        client.data = {
            color: randomColor(),
        }

        this.server.emit('connected', {
            id: client.id,
            color: client.data.color,
            x: 0,
            y: 0,
        })
    }
}
