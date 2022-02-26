import {
    Content,
    Container,
    Title,
    TextsContainer,
    Description
} from './style'

type Size = {
    width: number,
    height: number
}

type DescriptionSize = {
    width: number,
    height: number,
    fontSize: number
}

interface BannerProps {
    width: number
    height: number
    image: string
    title?: string
    titleSize?: DescriptionSize
    description?: string
    descriptionSize?: DescriptionSize
    className?: string
    onClick?: any;
}


export default function Banner({
    width,
    height,
    className,
    onClick,
    titleSize = {
        width: 80,
        height: 25,
        fontSize: 14,
    },
    descriptionSize = {
        width: 701,
        height: 102,
        fontSize: 24
    },
    image,
    title = "Lorem" ,
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
}: BannerProps) {
    return (
        <Container width={width} height={height} className={className} onClick={onClick} >
            <Content name={title} bg={image} >
                <TextsContainer>
                    <Title width={titleSize.width} height={titleSize.height} fontSize={titleSize.fontSize} className={"__banner__title"} >{title}</Title>
                    <Description width={descriptionSize.width} height={descriptionSize.height} fontSize={descriptionSize.fontSize} className={"__banner__description"} >{description}</Description>
                </TextsContainer>
            </Content>
        </Container>
    )
}