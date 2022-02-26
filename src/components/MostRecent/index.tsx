import { Container, Images } from './styles'

import Banner from "../Banner";
import Image2 from "../../assets/image2.png";
import Image4 from "../../assets/image4.png";
import {useNavigate} from "react-router-dom";

export default function () {
    return (
        <Container>
            <h1>Noticia mais recente</h1>
            <div className={"divider"} ></div>
            <Images>
                {[1,2,3,4,5,6].map((value, index) => {
                    return (
                        <Banner
                            width={338}
                            key={index}
                            height={250}
                            image={Image4}
                            className={"mostrecent__news"}
                            descriptionSize={{
                                width: 303,
                                height: 60,
                                fontSize: 13,
                            }}
                            titleSize={{
                                width: 70,
                                height: 20,
                                fontSize: 12,
                            }}
                        />
                    )
                })}
            </Images>
        </Container>
    )
}