import "./intro.css";
import profile from "../../img/profile photo.jpg"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-bg"></div>
                <img src={profile} alt="" className="i-img" />
            </div>
            <div className="i-right">
                <div className="i-right-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h2 className="i-name">Simran Dung</h2>
                </div>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Software Developer</div>
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI Designer</div>
                        <div className="i-title-item">React Developer</div>
                        <div className="i-title-item">Java Developer</div>
                    </div>
                </div>

                <div className="i-desc">

                I bring a comprehensive skill set in back-end technologies like Java, SQL, Node.js, and MongoDB, complemented by front-end expertise in HTML, CSS, JavaScript, and Bootstrap. Proficient in building scalable Java applications and managing databases with SQL, I excel in Node.js for high-performance server-side solutions. Leveraging MongoDB's NoSQL capabilities, I craft flexible database solutions. My front-end proficiency allows me to create dynamic, visually appealing interfaces. Previous intern experience fuels my commitment to innovation, ensuring high-quality software solutions. I merge back-end and front-end expertise for holistic development, prioritizing seamless integration and user-centric design in crafting innovative solutions
                </div>
                <a href="https://drive.google.com/file/d/1cEHnNiGK7FgYAegZlMfsqSkuGYEm2NoI/view?usp=sharing" download>
                    <button className="btn-view btn-c">View CV</button>
                </a>

            </div>

        </div>
    )
}

export default Intro;