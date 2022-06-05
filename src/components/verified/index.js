import { Frame, Title, Button, SubTitle, Redirect, OptionGr } from './styles/styles'
export default function Verified({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Verified.Title = function VerifiedTitle({children}) {
    return <Title>{children}</Title>
}
Verified.SubTitle = function VerifiedSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Verified.Button = function VerifiedButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}
Verified.Redirect = function VerifiedRedirect({children, ...restProps}) {
    return <Redirect {...restProps}>{children}</Redirect>
}
Verified.OptionGr = function VerifiedOptionGr({children, ...restProps}) {
    return <OptionGr {...restProps}>{children}</OptionGr>
}



