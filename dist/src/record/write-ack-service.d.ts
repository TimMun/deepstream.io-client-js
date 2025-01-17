import { Message } from '../constants';
import { Services } from '../deepstream-client';
import { WriteAckCallback } from './record-core';
export declare class WriteAcknowledgementService {
    private services;
    private responses;
    private count;
    constructor(services: Services);
    /**
     * Send message with write ack callback.
     */
    send(message: Message, callback: WriteAckCallback): void;
    recieve(message: Message): void;
    private onConnectionLost;
}
