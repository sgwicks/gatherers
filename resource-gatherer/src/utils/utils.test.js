import { checkAdjacency } from './utils';

describe('checkAdjacency', () => {
  test('Returns false if no adjacency is found', () => {
    const currentSquare = { column: 3, row: 3 };
    const lookupObj = {
      '3:3': true,
      '2:3': false,
      '4:3': false,
      '3:2': false,
      '3:4': false
    };

    expect(checkAdjacency(currentSquare, lookupObj)).toBe(false);
  });
  test('Returns true if column adjacency is found', () => {
    const currentSquare = { column: 3, row: 3 };
    const lookupObj = { '4:3': true };

    expect(checkAdjacency(currentSquare, lookupObj)).toBe(true);

    const lookupObj2 = { '2:3': true };

    expect(checkAdjacency(currentSquare, lookupObj2)).toBe(true);
  });
  test('Returns true if row adjacency is found', () => {
    const currentSquare = { column: 3, row: 3 };
    const lookupObj = { '3:4': true };

    expect(checkAdjacency(currentSquare, lookupObj)).toBe(true);

    const lookupObj2 = { '3:2': true };

    expect(checkAdjacency(currentSquare, lookupObj2)).toBe(true);
  });
  test('Works at edge of grid', () => {
    const currentSquare = { column: 1, row: 1 };
    const lookupObj = { '1:2': false, '2:1': false };
    const lookupObj2 = { '1:2': true, '2:1': false };
    const lookupObj3 = { '1:2': false, '2:1': true };

    expect(checkAdjacency(currentSquare, lookupObj)).toBe(false);
    expect(checkAdjacency(currentSquare, lookupObj2)).toBe(true);
    expect(checkAdjacency(currentSquare, lookupObj3)).toBe(true);
  });
});
