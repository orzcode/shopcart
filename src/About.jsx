import aboutStyles from './About.module.css'
import appStyles from './App.module.css'
import { Outlet, Link } from 'react-router-dom'

function About() {
	return (
		<div className={aboutStyles.aboutBox}>
		<h1 className={aboutStyles.fuck}>The Techwood Store</h1>
		<p>This is the about page</p>
		<p>This is actually just a mockup for a react project to test some functionality.
		The items are processed by 'fakestore API' and don't exist!</p>
		<p>Happy 'shopping'!</p>

		<Link className={appStyles.navLink} to="shop">Hit up the goods!</Link>

		</div>
	)
}
export default About