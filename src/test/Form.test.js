import { render } from "@testing-library/react"
import Form from "../components/Form"

describe('Test unitaire composant Form', () => {
    it('Form is rendered', () => {
        render(<Form cardNumberId="FakeId" cardNumberInput="555" cardNameId="fakename"  cardExpiryMonthId="FakeMM" cardExpiryYearId="YY" />)
    })
})