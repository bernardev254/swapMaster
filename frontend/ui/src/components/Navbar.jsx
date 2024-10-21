import {Link} from 'react-router-dom'
import LaunchButton from './LaunchButton'
import BackArrow from './BackArrow'
const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 
        bg-white/75 backdrop-blur-lg transition-all
    ">
        <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20'">
            <div className="flex h-14 items-center justify-between 
            border-zinc-200">
                <Link to={'/'} className='flex z-40 font-semibold px-1'>
                  TokenSwap<span className='font-bold text-pink-600'>Arbitrum</span>
                </Link>


                <div className='h-full flex items-center space-x-4'>
                  <LaunchButton/>
                  <BackArrow/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

