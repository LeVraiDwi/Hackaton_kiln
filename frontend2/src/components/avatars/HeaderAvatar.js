import avatar_image from '@/img/jpg/avatar.jpg';
import Image from 'next/image';
export const HeaderAvatar = () => {
    return (
        <>
            <div className="rounded-full overflow-hidden h-10 w-10 m-2 mr-4">
                <Image src={avatar_image} alt='Avatar User' height={40} width={40}/>
            </div>
        </>
    )
}