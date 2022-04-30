import Styles from './App.module.css';
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Cube from "./components/Cube/Cube";

function App() {
  return (
    <div className={Styles.App}>
        <Container type="gradient">
            <Header/>
            <div className={Styles.content}>
                <div className={Styles.textBlock}>
                    <h1 className={Styles.title}>
                        Hi, my name is <span className={Styles.special}>Artem Tatevosyan</span>.
                        <br/>
                        I love coding and creating.
                    </h1>
                    <h2 className={Styles.subtitle}>
                        And there are a few reasons why you should hire me:
                    </h2>
                </div>
                <Cube
                    perspective="initial"
                    cubeBackgroundRGB="21, 35, 49"
                    width="270px"
                    height="270px"
                    size="200px"
                    modifier="appCube"
                />
            </div>
        </Container>
        <Container type="lightPink">
        
        </Container>
    </div>
  );
}

export default App;
