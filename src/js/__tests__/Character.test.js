// import Character from '../Character';
import Bowman from '../Characters/Bowman';

test('name1', () => {
  const bowman = new Bowman();
  expect(bowman.defence).toBe(25);
});
