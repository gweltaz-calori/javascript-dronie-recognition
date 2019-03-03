import Webcam from "./core/Webcam";
import { Vector2 } from "./utils/Vector2";
import SocketManager, { SocketTypes } from "./utils/SocketManager";
import Posenet from "./core/Posenet";

let posenet = new Posenet();

function render() {
  posenet.getHand().then((hand: Vector2) => {
    SocketManager.emit(SocketTypes.HAND_MOVE, hand);
  });
  requestAnimationFrame(render);
}

async function main() {
  await Webcam.init();
  await posenet.init();

  render();
}

main();
