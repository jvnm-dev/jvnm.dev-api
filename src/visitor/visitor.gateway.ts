import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Logger } from '@nestjs/common'
import { Socket, Server } from 'socket.io'
import {
    uniqueNamesGenerator,
    adjectives,
    colors,
    animals,
} from 'unique-names-generator'

const randomColor = (() => {
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
        origin: 'http://localhost',
    },
})
export class VisitorGateway
    implements OnGatewayConnection, OnGatewayDisconnect
{
    getSockets() {
        return Array.from(this.server.sockets.sockets.values())
    }

    @WebSocketServer() server: Server
    private logger: Logger = new Logger('VisitorGateway')

    handleConnection(client: Socket) {
        this.logger.log(`Client connected: ${client.id}`)

        client.data = {
            color: randomColor(),
            name: uniqueNamesGenerator({
                dictionaries: [adjectives, colors, animals],
            }),
        }

        this.server.emit('joined', {
            id: client.id,
            x: 0,
            y: 0,
            ...client.data,
        })
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`)

        const everyoneExceptClient = this.getSockets()
            .filter(({ id }) => id !== client.id)
            .map(({ id }) => id)

        this.server.to(everyoneExceptClient).emit('leaved', {
            id: client.id,
            ...client.data,
        })
    }

    @SubscribeMessage('update')
    handleUpdate(
        client: Socket,
        payload: {
            id: number
            x: number
            y: number
            color: string
            name: string
            location: string
        }
    ): void {
        this.logger.log(`Client ${client.data.name} updated`)

        this.server.emit('update', {
            id: client.id,
            ...payload,
            ...client.data,
        })
    }
}
