import { MenuItems } from "./Menuitems";
import Link from "next/link";
import { useRouter } from 'next/router';
import Dropdown from "../Dropdown/Dropdown";

function Navbar(){

	const router = useRouter();

	const mouseEventHandler = (heightValue) => {
		let height = heightValue;
		const mainContet_element = document.querySelector('#mainContent');

		mainContet_element.style.marginTop = height;
		mainContet_element.style.transition = '0.4s';
	}

	const navbarItems = MenuItems.map((item) => {
		const styles = `${item.cName} ${router.pathname.includes(item.path) ? "active" : ""}`;

		if(item.isDropdown){
			return(
				<li key={item.Id} className="nav_item hasDropdown" onMouseOver={() => {mouseEventHandler('240px')}} onMouseLeave={()=>{mouseEventHandler('0')}}>
					<Link href={item.path}>
						<a className={styles}>
							{item.title}
						</a>
					</Link>
					<Dropdown DropdownItems={item.dropdownItems} />
				</li>
			)
		}
		else{
			return(
				<li key={item.Id} className="nav_item">
					<Link href={item.path}>
						<a className={styles}>
							{item.title}
						</a>
					</Link>
				</li>
			)
		}
	})

  return(
		<nav id="kurumsal_content_navbar">
			<ul className="navigation">
				{navbarItems}
			</ul>
		</nav>
  )
}

export default Navbar;