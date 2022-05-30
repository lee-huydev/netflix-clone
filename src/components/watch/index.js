import { Container } from './styles/styles'
export default function Player({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}