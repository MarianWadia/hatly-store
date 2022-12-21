import React from 'react'
import AccountSidebar from '../../componants/Account/AccountSidebar/AccountSidebar'

import style from './Account.module.css'
import { useSelector } from 'react-redux'
import { sidebarState } from '../../redux/features/user/sidebarSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const AccountLayout = ({ children }) => {
  const {isOpened : sidebarIsOpened  } = useSelector(sidebarState);
  
  return (
    <div className={`${style.page_container} container ${sidebarIsOpened ? style.isOpened : ''}`}>
      <AccountSidebar />
      <FontAwesomeIcon className={style.gear} icon={faGear}/>
      {children}
    </div>
  )
}

export default AccountLayout