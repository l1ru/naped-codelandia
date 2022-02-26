import { Container } from './styles'

import NavBar from "../../components/NavBar";
import GlobalStyles from "../../styles/global";

import PostImage from '../../assets/postImage.png'
import PostImage2 from '../../assets/postImage2.png'
import MostRecent from "../../components/MostRecent";
import Footer from "../../components/Footer";

export default function() {
    return (
        <Container>
            <GlobalStyles />
            <NavBar />
            <div className={"__title"} >
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis neque sed odio.</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <p>00 de Julho de 2021</p>
            </div>
            <img src={PostImage} className={"post__banner"} />
            <div>
                <p className={"p-1"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. </p>
                <p className={"p-1"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.</p>
            </div>
            <img src={PostImage2} className={"post__banner second"} />
            <p className={"p-1"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.</p>
            <MostRecent />
            <Footer />
        </Container>
    )
}