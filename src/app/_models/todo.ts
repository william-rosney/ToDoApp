export class Todo {
  text: string;
  isCompleted: boolean = false;
  // priority: number;

  constructor(text: string) {
    this.text = text;
  }
}
