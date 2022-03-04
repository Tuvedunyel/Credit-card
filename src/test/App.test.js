import { render } from "@testing-library/react"
import App from "../App"

describe('Unit test on App', () => {
    it('App is rendered', () => {
        render(<App />);
    })
})