import { render } from "@testing-library/react"
import Card from "../components/Card"

describe('Test du composant Card', () => {
    it('Card is rendered', () => {
        render(<Card cardNumberId="fakeNumber" cardNumberInput="254885" focusIsActive="false" cardNameId="fakeName"  cardExpiryMonthId="fakeMonth" cardExpiryYearId="fakeYear" cardNameInput="fakeNameInput" />)
    })
})