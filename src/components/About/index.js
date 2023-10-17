import "./index.scss"
import AnimatedLetters from "../AnimatedLetters";

const About = () => {
    return(
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A','B','O','U','T', ' ', 'M', 'E']}
                        idx={15} />
                </h1>
                <p>A driven and skilled professional with a fervor for web and software development,
                    as well as data analysis. My goal is to secure a role in a reputable IT
                    company that allows me to work with state-of-the-art technologies while
                    participating in diverse and challenging projects.
                </p>
                <p>I exude confidence in my abilities,
                    tackling every challenge with a poised determination
                    that drives me to excel in every endeavor</p>
                <p>If I need to define myself in one sentence that would be a tech enthusiast
                and problem-solver, driven by the thrill of innovation and the pursuit</p>
            </div>
        </div>
    )

}

export default About