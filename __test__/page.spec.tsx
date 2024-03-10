import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
it('Page', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
