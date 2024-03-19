import Team from '../team';

test('should', () => {
  const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const char2 = {
    name: 'Демон',
    type: 'Deamon',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const team = new Team(char, char2);
  expect([...team]).toEqual([char, char2]);
});
