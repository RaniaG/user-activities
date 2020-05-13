import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class ActivitiesGateway implements OnGatewayConnection {

    @WebSocketServer() server: Server;

    emitEvent(event: string, payload: any) {
        this.server.emit(event, payload);
    }

    handleConnection(client: Socket, ...args: any[]) {
        console.log(`client connected: ${JSON.stringify(client.id)}`);
    }
}