import { Container } from './styles'
import Image from "../../assets/image.png";
import Image2 from '../../assets/image2.png'

import Banner from "../Banner";
import {useNavigate} from "react-router-dom";

export default function() {
    const navigate = useNavigate()


    return (
        <Container>
            <Banner
                width={761}
                height={350}
                image={Image}
                className={"principal"}
                onClick={() => navigate("/post")}
            />

            <div className={"__secondary"} >
                <Banner
                    width={338}
                    height={165}
                    descriptionSize={{
                        width: 303,
                        height: 60,
                        fontSize: 13
                    }}
                    image={Image2}
                    onClick={() => navigate("/post")}
                />

                <Banner
                    width={338}
                    height={165}
                    descriptionSize={{
                        width: 303,
                        height: 60,
                        fontSize: 13
                    }}
                    image={Image2}
                    onClick={() => navigate("/post")}
                />
            </div>
        </Container>
    )
}