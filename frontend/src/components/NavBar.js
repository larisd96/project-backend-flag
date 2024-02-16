import { Link } from 'react-router-dom';


const navbarItems = [
	{ path: '/', name: 'Home' },
	{ path: '/shop-list', name: 'ShopList' },
];

const Navbar = () => {
	return (
		<nav class='block haver: text-gray-300'>
			{navbarItems.map(value => (
				<Link className='nav-bar-item' key={value.name} to={value.path}>
					{value.name}
				</Link>
			))}
		</nav>
	);
};

export default Navbar;
