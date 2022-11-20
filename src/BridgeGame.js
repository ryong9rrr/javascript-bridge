const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #position;
  #totalTrial;

  constructor(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate,
    );
    this.#position = 0;
    this.#totalTrial = 1;
  }

  isFinished() {
    return this.#position >= this.#bridge.length;
  }

  isMatchCommand(command) {
    return command === this.#bridge[this.#position];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    if (this.isFinished()) {
      return;
    }
    if (this.isMatchCommand(command)) {
      this.#position += 1;
      return;
    }
    return;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {}
}

new BridgeGame(3);

module.exports = BridgeGame;
