import { RecordCore, WriteAckCallback } from './record-core';
import { Emitter } from '../util/emitter';
export declare class List extends Emitter {
    private record;
    debugId: string | null;
    private wrappedFunctions;
    private originalApplyUpdate;
    private beforeStructure;
    private hasAddListener;
    private hasRemoveListener;
    private hasMoveListener;
    private subscriptions;
    constructor(record: RecordCore<List>);
    get name(): string;
    get isReady(): boolean;
    get version(): number;
    whenReady(): Promise<List>;
    whenReady(callback: ((list: List) => void)): void;
    discard(): void;
    delete(callback: (error: string | null) => void): void;
    delete(): Promise<void>;
    /**
     * Returns the array of list entries or an
     * empty array if the list hasn't been populated yet.
     */
    getEntries(): string[];
    /**
   * Returns true if the list is empty
   */
    isEmpty(): boolean;
    /**
    * Updates the list with a new set of entries
    */
    setEntriesWithAck(entries: string[]): Promise<void>;
    setEntriesWithAck(entries: string[], callback: WriteAckCallback): void;
    /**
    * Updates the list with a new set of entries
    */
    setEntries(entries: string[], callback?: WriteAckCallback): void;
    /**
     * Removes an entry from the list
     *
     * @param {String} entry
     * @param {Number} [index]
     */
    removeEntry(entry: string, index?: number, callback?: WriteAckCallback): void;
    /**
   * Adds an entry to the list
   *
   * @param {String} entry
   * @param {Number} [index]
   */
    addEntry(entry: string, index?: number, callback?: WriteAckCallback): void;
    /**
   * Proxies the underlying Record's subscribe method. Makes sure
   * that no path is provided
   */
    subscribe(callback: (entries: string[]) => void): void;
    /**
   * Proxies the underlying Record's unsubscribe method. Makes sure
   * that no path is provided
   */
    unsubscribe(callback: (entries: string[]) => void): void;
    /**
     * Proxies the underlying Record's _update method. Set's
     * data to an empty array if no data is provided.
     */
    private applyUpdate;
    /**
     * Validates that the index provided is within the current set of entries.
     */
    private hasIndex;
    /**
     * Establishes the current structure of the list, provided the client has attached any
     * add / move / remove listener
     *
     * This will be called before any change to the list, regardsless if the change was triggered
     * by an incoming message from the server or by the client
     */
    private beforeChange;
    /**
     * Compares the structure of the list after a change to its previous structure and notifies
     * any add / move / remove listener. Won't do anything if no listeners are attached.
     */
    private afterChange;
    /**
     * Iterates through the list and creates a map with the entry as a key
     * and an array of its position(s) within the list as a value, e.g.
     *
     * {
     *   'recordA': [ 0, 3 ],
     *   'recordB': [ 1 ],
     *   'recordC': [ 2 ]
     * }
     */
    private getStructure;
    private destroy;
}
