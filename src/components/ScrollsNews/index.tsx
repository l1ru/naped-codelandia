import { Container } from './styles'
import News from '../News'
import Banner from "../Banner";

import Image4 from '../../assets/image4.png'
import {useNavigate} from "react-router-dom";



export default function () {
    const navigate = useNavigate()
    return (
        <Container>
            <div className={"__scrollnews"}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => {
                    return (
                        <News key={index} />
                    )
                })}
            </div>
            <div className={"__highlights__day"} >
                <h2>Lorem ipsum dolor</h2>
                <div>
                    {[1,2,3].map((value, index) =>
                        <Banner
                            width={338}
                            height={250}
                            image={Image4}
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
                    )}
                </div>
            </div>
        </Container>
    )
}