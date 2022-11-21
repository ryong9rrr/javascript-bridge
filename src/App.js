const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");

class App {
  play() {
    try {
      this.run();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  run() {
    this.showGreeting();
  }

  showGreeting() {
    OutputView.printGreeting();
    this.showInputBridgeNumber();
  }

  showInputBridgeNumber() {
    InputView.readBridgeSize((bridgeSize) => {
      this.bridgeGame = new BridgeGame(parseInt(bridgeSize, 10));
      this.showInputMoveCommand();
    });
  }

  showInputMoveCommand() {
    if (this.bridgeGame.isFinished()) {
      this.showResult(true);
      return;
    }

    InputView.readMoving((command) => {
      const next = this.bridgeGame.move(command);
      OutputView.printMap(this.bridgeGame.progress.desc());
      next ? this.showInputMoveCommand() : this.showInputRetry();
    });
  }

  showInputRetry() {
    InputView.readGameCommand((command) => {
      if (command === "R") {
        this.bridgeGame.retry(command);
        this.showInputMoveCommand();
        return;
      }
      this.showResult(false);
    });
  }

  showResult(isSuccess) {
    OutputView.printResult(isSuccess, this.bridgeGame);
  }
}

module.exports = App;
