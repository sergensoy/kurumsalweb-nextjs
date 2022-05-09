import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function SidebarButton({showSidebar}) {
  return (
    <div class="sidebar_menuButton">
        <FontAwesomeIcon icon={faBars} onClick={showSidebar}/>
    </div>
  )
}

export default SidebarButton