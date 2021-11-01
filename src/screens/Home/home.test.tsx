import 'dotenv/config'
import { screen, render } from '@testing-library/react'
import { Home } from '.'

describe('<Home />', () => {
  it('should render home screen', async () => {
    render( <Home /> )
    expect(screen.getByRole('heading', {name: /title content/i})).toBeInTheDocument()
  })
})
