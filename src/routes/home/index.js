import { h } from 'preact';
import style from './style.css';
import State from '../../preact-submod/src/components/state-component'

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<State />
	</div>
);

export default Home;
