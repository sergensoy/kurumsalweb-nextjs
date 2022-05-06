import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import style from './dropdown.module.css'

const Dropdown = (props) => {

    const [dropdownList,setDropdownList] = useState(props.DropdownItems);
    const router = useRouter();

    const dropdownMenu= dropdownList.map((item,index) =>{
        return(
            <li key={index} className="dropdown_item">
                <Link href={item.path}>
                    <a className={`${item.cName} ${router.pathname == item.path ? "active" : ""}`}>{item.title}</a>
                </Link>
            </li>
        )
    });

    return(
        <ul className='dropdown_menu'>
            {dropdownMenu}
        </ul>
    )
}

export default Dropdown;