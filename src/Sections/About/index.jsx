import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
						I am from Lucknow Uttar Pradesh. I studied in Kendriya Vidyalaya R.D.S.O. 
						and now I am persuing my B.tech Computer Science degree in Lovely Professional University.
						I am a web developer and I love to work on frontend projects. 
					</p>
					<p className={styles.desc}>
						I am comfortable with the fundamentals of web development and I have also learnt frameworks 
						react and angular. I now want to master my backend skills and become a full stack developer.
						Apart from making projects I love to watch anime in my free time.
					</p>
				</div>
				<div className={styles.right}>
					<img
						src="./images/profile.jpg"
						alt="profile"
						className={styles.profile_img}
						
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;
