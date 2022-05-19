import React, { forwardRef } from "react"
import { Container, Frame, Title, Error, Input, Submit, Text, TextSmall, Link, Wrapper, Label, Option} from './style/form'

export default function Form ({children, ...restProps}) {
    return <Container {...restProps}>{ children }</Container>;
}

export const InputPassword = forwardRef(({...restProps}, ref) => <Input {...restProps} ref={ref}/>)

Form.Frame = ({children, ...restProps}) => <Frame {...restProps}>{children}</Frame>

Form.Title = ({children}) => <Title >{children}</Title>

Form.Error = ({children}) => <Error >{children}</Error>

Form.Input = ({...restProps}) => <Input {...restProps} />

Form.Submit = ({children, ...restProps}) => <Submit {...restProps}>{children}</Submit>

Form.Text = ({children}) => <Text >{children}</Text>

Form.TextSmall = ({children}) => <TextSmall >{children}</TextSmall>

Form.Link = ({children, ...restProps}) => <Link {...restProps}>{children}</Link>

Form.Wrapper = ({children}) => <Wrapper>{children}</Wrapper>

Form.Label = ({children, ...restProps}) => <Label {...restProps}>{children}</Label>

Form.Option = ({children, ...restProps}) => <Option {...restProps}>{children}</Option>
