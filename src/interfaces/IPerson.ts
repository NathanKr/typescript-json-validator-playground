interface IPet {
  name: string;
  /**
   * @minimum 1
   * @maximum 100
   */
  legs: number;
}

export default interface IPerson {
  name: string;
  age?: number;
  pets: IPet[];
}
