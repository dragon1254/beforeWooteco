import controller from "./domain/controller/controller";

class App {
  async play() {
    const control = new controller();
    await control.start()
  }
}

export default App;
