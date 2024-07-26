import Image from 'next/image'
import logo from "../src/logo.png"

export default function Footer() {
    return (
        <footer className='max-w-[1200px] p-6 mx-auto mb-24 font-light text-lg w-full'>
            <article className='flex w-full'>
                <div className='flex flex-col gap-8 w-2/5'>
                    <div>
                        <h3 className='text-white text-2xl font-medium pb-4'>Contact</h3>
                        <ul>
                            <li>Work inquires: work@vaultflow.com</li>
                            <li>PR and speaking: press@vaultflow.com</li>
                            <li>New business: newbusiness@vaultflow.com</li></ul>
                    </div>
                    <div>
                        <h3 className='text-white text-2xl font-medium pb-4'>Careers</h3>
                        <p>Careers@vaultflow.com</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8 w-2/5 pl-6'>
                    <div>
                        <h3 className='text-white text-2xl font-medium pb-4'>Address</h3>
                        <p>398 11th Street, Floor 2 <br />
                            San Francisco, CA 94103</p>
                    </div>
                    <div>
                        <h3 className='text-white text-2xl font-medium pb-4'>Social</h3>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Tik Tok</a></li>
                        </ul>
                    </div>
                </div>
            </article>
            <div className='flex justify-between mt-[18px]'>
                <p className='text-[#939393] text-base'>© 2023 Vaultflow. All Rights Reserved.</p>
                <div className='flex items-center text-white font-bold gap-2 flex text-2xl'>
                    <Image src={logo} alt="logo" className='size-6' />
                    Vaultflow
                </div>
            </div>
        </footer>
    )
}