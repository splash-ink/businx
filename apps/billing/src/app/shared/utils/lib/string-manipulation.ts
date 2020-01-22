
export class StringManipulation {
  constructor() {}

  private getFirstLetter(name: string): string {
    return typeof name === 'string' ? name.substr(0,1) : '*';
  }

  getAbbreviation(name: string): string {
    const _names = name.split(" ");
    return this.getFirstLetter(_names[0]) + this.getFirstLetter(_names[_names.length - 1]);
  }
}
