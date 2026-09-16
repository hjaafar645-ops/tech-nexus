import Hero from '../../Components/Hero/Hero'
import './Home.css'

function Home() {

    const homeParticles = [
        'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10',
        'p11', 'p12', 'p13', 'p14', 'p15'
    ];

    return (
        <>
            <main>
                <div className="background-glow-container">
                    {homeParticles.map((p, index) => (
                        <div key={`home-p-${index}`} className={`particle ${p}`}></div>
                    ))}
                </div>
                <Hero />
            </main>
        </>
    )
}

export default Home
