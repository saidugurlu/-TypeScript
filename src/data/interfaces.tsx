export interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  isMember: boolean;
  scores: number[];
  status: PersonStatus;
}

export enum PersonStatus {
  Customer,
  Employee,
  Unknown,
}
