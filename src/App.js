import controller from "./domain/controller/controller";

class App {
  async run() {
    const control = new controller();
    await control.run()
  }
}

export default App;
