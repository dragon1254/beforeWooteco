import constroller from "./domain/controller/controller";

class App {
  async run() {
    const control = new constroller();
    control.start();
  }
}

export default App;
