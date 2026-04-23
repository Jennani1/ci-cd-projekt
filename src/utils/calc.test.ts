import { describe, it, expect } from 'vitest'
import { add } from './calc'

describe('add', () => {
    it('adderar två tal', () => {
        expect(add(2, 3)).toBe(5)
    })
})