export default class Team {
  constructor(...team) {
    this.team = [...team];
  }

  [Symbol.iterator]() {
    let index = -1;
    const data = this.team;
    return {
      next() {
        index += 1;
        return index < data.length ? { value: data[index], done: false } : { done: true };
      },
    };
  }
}

/// не нашел способ применить bind?
