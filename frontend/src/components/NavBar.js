import { Link } from 'react-router-dom';


const navbarItems = [
	{ path: '/', name: 'Home' },
	{ path: '/shop-list', name: 'ShopList' },
];

const Navbar = () => {
	return (
		<nav className='block haver: text-cyan-800 mb-3'>
			{navbarItems.map(value => (
				<Link className='m-2 text-xl font-bold' key={value.name} to={value.path}>
					{value.name}
				</Link>
			))}
		</nav>
	);
};

export default Navbar;
