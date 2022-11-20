class Validator {
  static validateBridgeSize(inputBridgeSize) {
    const bridgeSize = parseInt(inputBridgeSize, 10);
    if (Number.isNaN(bridgeSize) || bridgeSize < 3 || bridgeSize > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  }

  static validateMoveCommand(inputMoveCommand) {
    const commands = ["U", "D"];
    if (!inputMoveCommand.includes(commands)) {
      throw new Error("[ERROR] 이동은 U나 D만 선택해주세요.");
    }
  }

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  static validateRetryCommand(inputRetryCommand) {
    const commands = ["R", "Q"];
    if (!inputRetryCommand.includes(commands)) {
      throw new Error(
        "[ERROR] 재시작 혹은 종료하기 위해서는 R이나 Q를 입력해주세요.",
      );
    }
  }
}

module.exports = Validator;
