import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlines, FundOutlined, MenuOutlined, } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link ro='/'>Crytoverse</Link>
            </Typography.Title>
            <Button className='menu-control-container'></Button>
        </div>
    </div>
  )
}

export default Navbar