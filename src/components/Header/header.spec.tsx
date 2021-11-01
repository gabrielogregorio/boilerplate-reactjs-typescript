import { render, screen } from "@testing-library/react"
import { Header } from '.'

describe('<Header />', () => {
  it('should render header', () => {
    render(<Header />)
    expect(screen.getByText('LOGO')).toBeInTheDocument()
    expect(screen.getByRole('link', {name: 'go to homescreen'})).toBeInTheDocument()
    expect(screen.getByRole('link', {name: 'news of tech'})).toBeInTheDocument()
    expect(screen.getByRole('link', {name: 'make contact'})).toBeInTheDocument()
  })
})
