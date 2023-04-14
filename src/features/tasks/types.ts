export interface Task {
  id: number | string;
  content: string;
  done: boolean;
};

export interface InitialState {
  tasks: Task[] ;
  hideDone: boolean;
  loading: boolean;
};
export interface IndexSignature {
  [index: string]: string;
}