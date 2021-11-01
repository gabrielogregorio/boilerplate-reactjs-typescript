import { render, screen } from "@testing-library/react"
import { Footer } from '.'

describe('<Footer />', () => {
  it('should render footer', () => {
    render(<Footer />)
    expect(screen.getByText('@mail')).toBeInTheDocument()
  })
})
