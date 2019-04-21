import { RecordOfflineStore, offlineStoreWriteResponse } from '../client'
import {RecordData} from '../../binary-protocol/src/message-constants'

export class NoopStorage implements RecordOfflineStore {
  public get (recordName: string, callback: ((recordName: string, version: number, data: RecordData) => void)) {
    setTimeout(callback.bind(this, recordName, -1, null), 0)
  }

  public set (recordName: string, version: number, data: RecordData, callback: offlineStoreWriteResponse) {
    setTimeout(callback, 0)
  }

  public delete (recordName: string, callback: offlineStoreWriteResponse) {
    setTimeout(callback, 0)
  }
}
