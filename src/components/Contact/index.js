import "./index.scss"
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";

const Contact = () => {
    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            letterClass={letterClass}
                            idx={15} />
                    </h1>
                    <p>
                        Am Ready to connect and explore exciting opportunities,
                        Let's collaborate on your next project.
                        Reach out to me, and let's create some digital magic together!
                    </p>
                </div>

            </div>
            <Loader type="pacman" active={true}/>
        </>
    )


}

export default Contact