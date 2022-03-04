import { render } from "@testing-library/react"
import Card from "../components/Card"

describe('Test du composant Card', () => {
    it('Card is rendered', () => {
        render(<Card />)
    })
})