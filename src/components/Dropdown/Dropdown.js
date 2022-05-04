import { useState } from 'react'
import style from './dropdown.module.css'

const Dropdown = (props) => {

    const [dropdownList,setDropdownList] = useState(props.DropdownItems);

    const dropdownMenu= dropdownList.map((item,index) =>{
        return(
            <li key={index}>
                <a href="#">{item.title}</a>
            </li>
        )
    });

    return(
        <ul>
            {dropdownMenu}
        </ul>
    )
}

export default Dropdown;