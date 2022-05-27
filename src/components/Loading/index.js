import { Img, Spinner, Picture } from './styles/styles'
export default function Loading({children,...restProps}) {
    return <Spinner {...restProps}>{children}</Spinner>
}

Loading.Picture = ({...restProps}) => <Picture {...restProps}/>

Loading.Img = ({...restProps}) => <Img {...restProps}/>