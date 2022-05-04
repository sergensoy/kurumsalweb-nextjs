import { MenuItems } from "./Menuitems";
import Link from "next/link";
import Dropdown from "../Dropdown/Dropdown"


function Navbar(){

	const navbarItems = MenuItems.map((item) => {
		if(item.isDropdown){
			return(
				<li key={item.Id} className="nav_item hasDropdown">
					<Link href={item.path}>
						<a className={item.cName}>
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
						<a className={item.cName}>
							{item.title}
						</a>
					</Link>
				</li>
			)
		}
	})

  return(
		<nav>
			<ul>
				{navbarItems}
			</ul>
		</nav>
  )
}

export default Navbar;