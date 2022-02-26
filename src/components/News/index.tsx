import { Container } from './styles'

import Banner from '../Banner'

import Image from '../../assets/image3.png'

type Day = {
    day: number,
    month: number,
    year: number,
}

type Props = {
    description?: string,
    text?: string,
    date?: Day,
    image?: string,
    onClick?: any,
}

export default function ({
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    date = {
        day: 10,
        month: 10,
        year: 1000
    },
    image = Image,
    onClick
    }: Props) {
    return (
        <Container onClick={onClick}>
            <Banner
                width={200}
                height={151}
                image={Image}
                description={""}
                titleSize={{
                    width: 60,
                    height: 15,
                    fontSize: 10,
                }}
            />
            <div className={"__description"} >
                <h3>{description}</h3>
                <p>{text}</p>
                <span>{date.day}/{date.month}/{date.year}</span>
                <button onClick={onClick} >Ler noticia</button>
            </div>
        </Container>
    )
}