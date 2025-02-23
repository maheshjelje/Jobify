import styled from "styled-components"
import Wrapper from "../assets/wrappers/LandingPage"
import main from '../assets/images/main.svg'
import { Logo } from '../components'
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        job <span>tracking </span> app
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque itaque tempore quos, cupiditate laborum libero illum.
                        Facilis dignissimos commodi consectetur
                        voluptas enim necessitatibus, assumenda porro,
                        maiores culpa repellendus nobis numquam.
                    </p>
                    <Link to='/register' className='btn register-link'> Register
                    </Link>
                    <Link to='/login' className="btn">Login / Demo User
                    </Link>
                </div>
                <img src={main} alt="job hunt" srcset="img main-img" />
            </div>
        </Wrapper>
    )
}

export default Landing