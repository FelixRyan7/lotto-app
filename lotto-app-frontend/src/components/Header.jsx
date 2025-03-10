
"use client"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { usePathname } from 'next/navigation';


const Header = () => {

    const pathname = usePathname();

    const isHome = pathname === "/"

  return (
    <header className={`flex justify-between items-center p-5 h-[100px] ${isHome ? "bg-dark" : "bg-dark"}`}>
      
      <h1 className='text-5xl uppercase text-background'>lottery</h1>
      <div className='flex gap-5 items-center'>
      <div className='text-background cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-150'><MenuOutlinedIcon/></div>

        <div className='flex items-center gap-2 uppercase outline outline-background p-2 rounded text-background hover:bg-background hover:text-dark cursor-pointer hover:outline-background hover:outline-4 transform transition-all duration-300 ease-in-out'>
          <h1><AccountCircleOutlinedIcon/></h1>
          <h1>login</h1>
        </div>
      </div>
    </header>
  )
}

export default Header