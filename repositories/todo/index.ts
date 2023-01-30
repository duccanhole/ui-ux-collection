import { ITask } from "../../mock-data/todo/task";

export default class TodoRepo {
  data: ITask[];
  constructor() {
    this.data = [];
  }
}
