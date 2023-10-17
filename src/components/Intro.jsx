import responsive from '../assets/style/image/responsive-design.svg'

export default function Intro (){
    return(
        <section id="intro">
            <div className="info-wrapper">
                <div>
                    <h1>Front-End Developer</h1>
                    <div className="description">
                        Hi, my name is Thiago, and I'm a Front-End Developer.
                        I have experience in creating intuitive and interactive user experiences by using <b>HTML, CSS, Javascript and ReactJS. </b>
                        I have code and animation skills. 
                    </div>
                </div>
                <div className='responsive-div'>
                    <img src={responsive} />
                </div>
            </div>
        </section>
    )
}