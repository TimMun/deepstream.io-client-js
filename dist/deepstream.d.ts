import { Client } from './client';
import * as C from './constants';
import { Options } from './client-options';
declare const _default: ((url: string, options?: Partial<Options> | undefined) => Client) & {
    CONNECTION_STATE: typeof C.CONNECTION_STATE;
    C: typeof C;
    EVENT: typeof C.EVENT;
    deepstream: (url: string, options?: Partial<Options> | undefined) => Client;
};
export = _default;
