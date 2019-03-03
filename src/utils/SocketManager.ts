// @ts-ignore
import * as io from "socket.io-client";
import Configuration from "./Configuration";

class SocketManager {
  private socket = io(Configuration.socketHost);

  public on(eventName: SocketTypes, cb: any) {
    this.socket.on(eventName, cb);
  }

  public emit(eventName: SocketTypes, data: any = null) {
    this.socket.emit(eventName, data);
  }

  public off(eventName: SocketTypes, cb: any) {
    this.socket.off(eventName, cb);
  }
}

export default new SocketManager();

export enum SocketTypes {
  HAND_MOVE = "HAND:MOVE"
}
