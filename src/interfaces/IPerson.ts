interface IPet{
    name: string; legs: number;
}

export default interface IPerson {
  name: string;
  age?: number;
  pets: IPet[];
}
