export default function Timeline(){
    
    //https://venngage.com/templates/infographics/8-week-sprint-be77bc0b-f744-4a9f-883e-01ba40a5f880

return <>
        <section className="parallax-module parallax parallax-2">
            <h1>journey</h1>
        </section>
    <section className="timeline">
        <div className="timeline__items">
            <div className="timeline-item">
                <div className="timeline-item__dot"></div>
                <div className="timeline-item__date">
                    <div className="circle-wrapper auto-left">
                    <span>APR</span> 
                    <span>2022</span>
                </div>
                    </div>
                <div className="timeline-item__content">
                    <h3 className='medium-title'>Start</h3>
                    <p className='text__p'>
                    I started reading Jon Duckett's <strong>HTML and CSS</strong> book.
                    </p>
                </div>

            </div>
            <div className="timeline-item">
                <div className="timeline-item__dot"></div>
                <div className="timeline-item__date">
                <div className="circle-wrapper auto-right">
                    <span>MAR</span> 
                    <span>2022</span>
                <div className="timeline-item__circle">
                </div>
                </div>
                </div>
                <div className="timeline-item__content">
                    <h3 className='medium-title'>The Odin Project</h3>
                    <p className='text__p'>
                    I enrolled in this course and relied heavily on Mozilla documentation to learn <strong>Javascript</strong>. The foundation level also comprehensively covered essential topics such as <strong>Git, Grid, and Flexbox.</strong>
                    </p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-item__dot"></div>
                <div className="timeline-item__date">
                <div className="circle-wrapper auto-left">
                    <span>SEP</span> 
                    <span>2022</span>
                <div className="timeline-item__circle  timeline-item__circle--2">
                </div>
                </div>
                </div>
                <div className="timeline-item__content">
                    <h3 className='medium-title'>practice</h3>
                    <p className='text__p'>
                    After completing the <strong>Javascript</strong> course, I set a goal to solve every beginner algorithm on Leetcode. I also started attempting to clone the <a href='https://spacex-uiclone.netlify.app/'>SpaceX website</a>, which required <strong>advanced CSS</strong> techniques.
                    </p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-item__dot"></div>
                <div className="timeline-item__date">
                <div className="circle-wrapper auto-right">
                    <span>OCT</span> 
                    <span>2022</span>
                    <div className="timeline-item__circle  timeline-item__circle--2"></div>
                <div className='timeline-item__circle timeline-item__circle--2 rotate-45deg'></div>
                </div>
                </div>
                <div className="timeline-item__content">
                    <h3 className='medium-title'>Clean code</h3>
                    <p className='text__p'>
                    To enhance my coding readability and speed, I immersed myself in <strong>Clean Code, Design Patterns, and OOP</strong> while working on the <a href='https://animated-trifle-db85d1.netlify.app/'>Explosive Chess Game</a>.
                    </p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-item__dot"></div>
                <div className="timeline-item__date">
                <div className="circle-wrapper auto-left">
                    <span>MAR</span> 
                    <span>2023</span>
                <div className="timeline-item__circle timeline-item__circle--3">
                </div>
                </div>
                </div>
                <div className="timeline-item__content">
                    <h3 className='medium-title'>ReactJS</h3>
                    <p className='text__p'>
                    Upon completing the <strong>React</strong> course offered by Ziroll, I was eager to further explore the framework's capabilities. As a result, I took on the challenge of replicating a <a href='https://nft-ecommerce-clone.netlify.app/'>renowned e-commerce website</a> while integrating key <strong>API</strong> features such as login and user-generated content.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <div className='arrow'></div>
             <div className='timeline-item__content timeline-item--end'>
                <h3 className='medium-title'>Improving as a Front-End developer</h3>
                <p className='text__p'>Currently mastering SASS for cleaner CSS.</p>
            </div> 
        </div>
    </section>

    </>
}