import Styles from './App.module.css';
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import Socials from "./components/Socials/Socials";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
//https://api.github.com/repos/temaqwest/youshouldhireme/commits

function App() {
  return (
    <div className={Styles.app}>
        <Socials/>
        <WelcomeSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectsSection/>
    </div>
  );
}

export default App;
