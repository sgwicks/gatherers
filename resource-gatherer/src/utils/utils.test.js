import { checkAdjacency } from './utils';

describe('checkAdjacency', () => {
    test('Returns false with no adjacency', () => {
        const currentSquare = { row: 1, column: 1 }
        const nextSquare = { row: 3, column: 3 }

        expect(checkAdjacency(currentSquare, nextSquare)).toBe(false)
    })
    test('Orthogonally adjacent square returns true', () => {
        const currentSquare = { row: 1, column: 1 }
        const nextSquare = { row: 1, column: 2 }

        expect(checkAdjacency(currentSquare, nextSquare)).toBe(true)
    })
    test('Returns false on ONLY row adjacency', () => {
        const currentSquare = { row: 1, column: 1 }
        const nextSquare = { row: 2, column: 3 }

        expect(checkAdjacency(currentSquare, nextSquare)).toBe(false)
    })
    test('Returns false on ONLY column adjacency', () => {
        const currentSquare = { row: 1, column: 1 }
        const nextSquare = { row: 3, column: 2 }

        expect(checkAdjacency(currentSquare, nextSquare)).toBe(false)
    })
    test('Returns false on EXACT SAME square', () => {
        const currentSquare = { row: 1, column: 1 }
        const nextSquare = { row: 1, column: 1 }

        expect(checkAdjacency(currentSquare, nextSquare)).toBe(false)
    })
    test('Check centre square in all directions', () => {
        const centre = {row: 3, column: 3};
        const centreLeft = {row: 3, column: 2};
        const centreRight = {row: 3, column: 4};
        const centreUp = {row: 2, column: 3};
        const centreDown = {row: 4, column: 3};
        const topLeft = {row: 1, column: 1};

        expect(checkAdjacency(centre, centreLeft)).toBe(true)
        expect(checkAdjacency(centre, centreRight)).toBe(true)
        expect(checkAdjacency(centre, centreUp)).toBe(true)
        expect(checkAdjacency(centre, centreDown)).toBe(true)
        expect(checkAdjacency(centre, centre)).toBe(false)
        expect(checkAdjacency(centre, topLeft)).toBe(false)
    })
})