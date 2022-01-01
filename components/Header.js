import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline';
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='home' Icon={HomeIcon} />
                <HeaderItem title='home' Icon={LightningBoltIcon} />
                <HeaderItem title='home' Icon={BadgeCheckIcon} />
                <HeaderItem title='home' Icon={CollectionIcon} />
                <HeaderItem title='home' Icon={SearchIcon} />
                <HeaderItem title='home' Icon={UserIcon} />
            </div>
            <Image
                className="object-contain2"
                src="https://links.papareact.com/ua6" width={200} height={100} alt=''/>
        </header>
    )
}

export default Header
