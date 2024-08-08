import { useNavigate } from "react-router-dom";
import natureImage from '../../assets/images/nature.jpg'
import avatarImage from '../../assets/images/avatar.jpeg'

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <header className="bg-black text-white border-b border-gray-700">
                <nav className="flex justify-around items-center h-16">
                    <svg width="120" heigth="44" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 30" alt="Tiktok">
                        <path fill="#25F4EE" d="M9.875 11.842v-1.119A9 9 0 0 0 8.7 10.64c-4.797-.006-8.7 3.9-8.7 8.708a8.7 8.7 0 0 0 3.718 7.134A8.68 8.68 0 0 1 1.38 20.55c0-4.737 3.794-8.598 8.495-8.707"></path><path fill="#25F4EE" d="M10.087 24.526c2.14 0 3.89-1.707 3.966-3.83l.007-18.968h3.462a7 7 0 0 1-.109-1.202h-4.727l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83 3.9 3.9 0 0 1-1.846-.46 3.95 3.95 0 0 0 3.22 1.662m13.905-16.36V7.111a6.5 6.5 0 0 1-3.584-1.067 6.57 6.57 0 0 0 3.584 2.122"></path><path fill="#ff3b5d" d="M20.41 6.044a6.54 6.54 0 0 1-1.617-4.316h-1.265a6.56 6.56 0 0 0 2.881 4.316M8.707 15.365a3.98 3.98 0 0 0-3.974 3.976c0 1.528.87 2.858 2.134 3.523a3.94 3.94 0 0 1-.754-2.321 3.98 3.98 0 0 1 3.973-3.976c.41 0 .805.07 1.176.185v-4.833a9 9 0 0 0-1.176-.083c-.07 0-.134.006-.204.006v3.708a4 4 0 0 0-1.175-.185"></path><path fill="#ff3b5d" d="M23.992 8.166v3.676a11.25 11.25 0 0 1-6.579-2.116v9.622c0 4.8-3.903 8.713-8.706 8.713a8.67 8.67 0 0 1-4.99-1.579 8.7 8.7 0 0 0 6.37 2.781c4.797 0 8.706-3.906 8.706-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73q-.718-.002-1.38-.148"></path><path fill="white" d="M17.413 19.348V9.726a11.25 11.25 0 0 0 6.58 2.116V8.166a6.57 6.57 0 0 1-3.584-2.122 6.6 6.6 0 0 1-2.887-4.316h-3.463l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83 3.99 3.99 0 0 1-3.225-1.656 3.99 3.99 0 0 1-2.134-3.523A3.98 3.98 0 0 1 8.7 15.372c.409 0 .805.07 1.176.185v-3.708c-4.702.103-8.496 3.964-8.496 8.701 0 2.29.888 4.373 2.338 5.933a8.67 8.67 0 0 0 4.989 1.58c4.797 0 8.706-3.913 8.706-8.715M30.048 8.179h14.775l-1.355 4.232h-3.832v15.644h-4.778V12.41l-4.804.006zm38.984 0h15.12l-1.354 4.232h-4.172v15.644h-4.784V12.41l-4.803.006zM45.73 14.502h4.733v13.553h-4.708zm6.617-6.374h4.733v9.257l4.689-4.61h5.647l-5.934 5.76 6.643 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236h-4.733V8.128zm50.143 0h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734zm-54.396 4.826a2.384 2.384 0 1 0-.002-4.771 2.384 2.384 0 0 0 .002 4.771"></path><path fill="#25F4EE" d="M83.545 19.942a8.11 8.11 0 0 1 7.473-8.087 9 9 0 0 0-.709-.026c-4.478 0-8.106 3.631-8.106 8.113s3.628 8.113 8.106 8.113c.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087"></path><path fill="#ff3b5d" d="M92.858 11.83c-.217 0-.505.012-.715.025a8.11 8.11 0 0 1 7.467 8.087 8.11 8.11 0 0 1-7.467 8.087c.21.02.498.026.715.026 4.478 0 8.106-3.631 8.106-8.113s-3.628-8.113-8.106-8.113"></path><path fill="white" d="M91.58 23.887a3.94 3.94 0 0 1-3.94-3.945 3.94 3.94 0 1 1 7.882 0c0 2.18-1.77 3.945-3.941 3.945m0-12.058c-4.477 0-8.105 3.631-8.105 8.113s3.628 8.113 8.106 8.113 8.106-3.631 8.106-8.113-3.629-8.113-8.106-8.113"></path>
                    </svg>
                    <div className="flex">
                        <input
                            type="text"
                            className="bg-[#363636] h-[3rem]"
                            style={{ outline: 'none', border: 'none', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', width: '17rem', textIndent: '20px', fontSize: '15px' }}
                            placeholder="Search"
                        />
                        <button
                            className="relative bg-[#363636] h-[3rem]"
                            style={{ borderTopRightRadius: '50px', borderBottomRightRadius: '50px', width: '5rem' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center w-60 gap-3">
                        <button className="flex flex-row items-center justify-center px-4 h-9 text-white bg-[#363636] border-none rounded-md gap-1">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"></path></svg>
                            <span>Upload</span>
                        </button>
                        <button className="h-9 text-white bg-[#ff3b5d] border-none rounded-md leading-3">
                            Log in
                        </button>
                        <div className="relative bg-transparent border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path></svg>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex w-screen bg-black text-white">
                <div className="flex-[0.35] h-[90vh] overflow-y-hidden overflow-x-hidden gap-8">
                    <div className="flex flex-col pl-4 pt-4 md:ml-10  lg:ml-20 xl:ml-28 w-[45%] gap-4">
                        <div className="flex flex-col">
                            <a href="#" className="flex gap-2 pt-4 rounded-md text-[#ff3b5d]"
                                style={{ textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}
                            >
                                <span className="w-8 h-8">
                                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"></path></svg>
                                </span>
                                <span>Home</span>
                            </a>
                            <a href="#" className="flex gap-2 pt-4 rounded-md"
                                style={{ textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}
                            >
                                <span className="w-8 h-8">
                                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M18.99 4a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 4a6 6 0 1 0 0 12.00A6 6 0 0 0 19 8ZM18.99 27c2.96 0 5.6.58 7.87 1.65l-3.07 3.06a15.38 15.38 0 0 0-4.8-.71C10.9 31 6.3 36.16 6 44c-.02.55-.46 1-1.02 1h-2c-.55 0-1-.45-.98-1C2.33 33.99 8.7 27 19 27ZM35.7 42.88 31.82 39H45a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H31.82l3.88-3.88a1 1 0 0 0 0-1.41l-1.41-1.42a1 1 0 0 0-1.42 0l-7.3 7.3a2 2 0 0 0 0 2.82l7.3 7.3a1 1 0 0 0 1.42 0l1.41-1.42a1 1 0 0 0 0-1.41Z"></path></svg>
                                </span>
                                <span>Following</span>
                            </a>
                            <a href="#" className="flex gap-2 pt-4 rounded-md"
                                style={{ textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}
                            >
                                <span className="w-8 h-8">
                                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 12.5C15.5897 12.5 13.5849 14.5018 13.5849 17.0345C13.5849 19.5672 15.5897 21.569 18 21.569C20.4103 21.569 22.4151 19.5672 22.4151 17.0345C22.4151 14.5018 20.4103 12.5 18 12.5ZM10.5849 17.0345C10.5849 12.9017 13.8766 9.5 18 9.5C22.1234 9.5 25.4151 12.9017 25.4151 17.0345C25.4151 21.1673 22.1234 24.569 18 24.569C13.8766 24.569 10.5849 21.1673 10.5849 17.0345ZM18 29.8793C14.0801 29.8793 10.7403 32.5616 9.69697 36.2673C9.5473 36.7989 9.03833 37.1708 8.49337 37.0811L7.50662 36.9189C6.96166 36.8292 6.58837 36.3131 6.72325 35.7776C8.00732 30.6788 12.5509 26.8793 18 26.8793C23.449 26.8793 27.9927 30.6788 29.2767 35.7776C29.4116 36.3131 29.0383 36.8292 28.4934 36.9189L27.5066 37.0811C26.9617 37.1708 26.4527 36.7989 26.303 36.2673C25.2597 32.5616 21.9199 29.8793 18 29.8793Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33 31.5371C32.2445 31.5371 31.5198 31.668 30.8447 31.9093C30.3246 32.0951 29.7189 31.9243 29.4549 31.4392L28.9769 30.5608C28.713 30.0757 28.8907 29.463 29.4009 29.2516C30.513 28.791 31.7285 28.5371 33 28.5371C37.4554 28.5371 41.1594 31.6303 42.2706 35.7812C42.4135 36.3147 42.0386 36.8308 41.4935 36.9196L40.5065 37.0804C39.9614 37.1692 39.4546 36.7956 39.2894 36.2686C38.4217 33.5 35.91 31.5371 33 31.5371Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33 18.5C31.6193 18.5 30.5 19.6193 30.5 21C30.5 22.3807 31.6193 23.5 33 23.5C34.3807 23.5 35.5 22.3807 35.5 21C35.5 19.6193 34.3807 18.5 33 18.5ZM27.5 21C27.5 17.9624 29.9624 15.5 33 15.5C36.0376 15.5 38.5 17.9624 38.5 21C38.5 24.0376 36.0376 26.5 33 26.5C29.9624 26.5 27.5 24.0376 27.5 21Z"></path></svg>
                                </span>
                                <span>Friends</span>
                            </a>
                            <a href="#" className="flex gap-2 pt-4 rounded-md"
                                style={{ textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}
                            >
                                <span className="w-8 h-8">
                                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37.4a13.4 13.4 0 1 0 0-26.8 13.4 13.4 0 0 0 0 26.8ZM40.5 24a16.5 16.5 0 1 1-33 0 16.5 16.5 0 0 1 33 0Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27.13 27.18a2 2 0 0 0 .93-1.32l1.84-9.33a.6.6 0 0 0-.9-.63l-8.14 4.92a2 2 0 0 0-.92 1.32l-1.84 9.33c-.1.52.45.9.9.63l8.13-4.92Zm-5.04-.45 3.11-1.89.7-3.57-3.1 1.89-.7 3.57Z"></path></svg>
                                </span>
                                <span>Explore</span>
                            </a>
                            <a href="#" className="flex gap-2 pt-4 rounded-md"
                                style={{ textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}
                            >
                                <span className="w-8 h-8">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.78511 10.3334C6.95518 10.3334 6.33301 10.9792 6.33301 11.7143V20.2858C6.33301 21.0209 6.95518 21.6667 7.78511 21.6667H18.5744C19.4043 21.6667 20.0265 21.0209 20.0265 20.2858V17.5602C20.0265 17.1826 20.2392 16.8372 20.5763 16.6672C20.9135 16.4973 21.3177 16.5317 21.6212 16.7563L25.6663 19.7488V12.2513L21.6212 15.2439C21.3177 15.4684 20.9135 15.5029 20.5763 15.3329C20.2392 15.1629 20.0265 14.8175 20.0265 14.4399V11.7143C20.0265 10.9792 19.4043 10.3334 18.5744 10.3334H7.78511ZM25.6855 12.2371C25.6831 12.2388 25.6839 12.2383 25.6839 12.2383L25.6855 12.2371ZM25.6716 12.2177C25.673 12.2212 25.6746 12.2243 25.6763 12.2269C25.6798 12.2324 25.6834 12.2355 25.6855 12.2371L25.6874 12.2383C25.6874 12.2383 25.6865 12.238 25.6839 12.2383M4.33301 11.7143C4.33301 9.81952 5.90653 8.33337 7.78511 8.33337H18.5744C20.453 8.33337 22.0265 9.81953 22.0265 11.7143V12.4562L24.4963 10.629C25.0929 10.1877 25.8879 10.1155 26.5542 10.4359C27.224 10.758 27.6663 11.4325 27.6663 12.1905V19.8096C27.6663 20.5676 27.224 21.2421 26.5542 21.5642C25.888 21.8846 25.0929 21.8124 24.4963 21.371L22.0265 19.5439V20.2858C22.0265 22.1806 20.453 23.6667 18.5744 23.6667H7.78511C5.90653 23.6667 4.33301 22.1806 4.33301 20.2858V11.7143Z"></path><path d="M15 15.134C15.6667 15.5189 15.6667 16.4811 15 16.866L12 18.5981C11.3333 18.983 10.5 18.5019 10.5 17.7321L10.5 14.2679C10.5 13.4981 11.3333 13.017 12 13.4019L15 15.134Z"></path></svg>
                                </span>
                                <span>Live</span>
                            </a>
                            <a href="#" className="flex gap-2 pt-4 rounded-md"
                                style={{ textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}
                            >
                                <span className="w-8 h-8">
                                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"></path></svg>
                                </span>
                                <span>Profile</span>
                            </a>
                        </div>
                        <p className="text-[#363636] mt-6 mb-4">Log in to follow creators, like videos, and view comments.</p>
                        <button type="button" className="inline-block px-4 py-3 border border-[#ff3b5c] text-[#ff3b5c] font-medium rounded focus:ring-0">
                            Log in
                        </button>
                    </div>
                </div>
                <div className="flex-[0.65] height-[90vh] overflow-y-scroll">
                    <div className="flex flex-col pb-6">
                        <div>
                            <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded ">
                                <div className="md:w-16 md:h-16 w-10 h-10">
                                    <img className=" rounded-full w-14" src={avatarImage} alt="user-profile" layout="responsive" />
                                </div>
                                <div className="w-full max-w-[600px]">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex flex-row items-center gap-2">
                                            <p className="flex gap-2 items-center md:text-md font-bold text-primary">
                                                deehcan <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><g clip-path="url(#Icon_Color-Verified_Badge_svg__a)"><path d="M0 24a24 24 0 1 1 48 0 24 24 0 0 1-48 0Z" fill="#20D5EC"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M37.12 15.88a3 3 0 0 1 0 4.24l-13.5 13.5a3 3 0 0 1-4.24 0l-8.5-8.5a3 3 0 1 1 4.24-4.24l6.38 6.38 11.38-11.38a3 3 0 0 1 4.24 0Z" fill="#fff"></path></g><defs><clipPath id="Icon_Color-Verified_Badge_svg__a"><path fill="#fff" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
                                            </p>
                                            <p className="font-medium text-xs">
                                                André Canuto
                                            </p>
                                        </div>
                                        <div className="flex ml-56">
                                            <button type="button" className="inline-block px-4 py-1.5 border border-[#ff3b5c] text-[#ff3b5c] font-medium rounded focus:outline-none focus:ring-0">
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                    <p className="mt-2 font-normal">mint</p>
                                    <p className="font-semibold">#development</p>
                                    <div className="flex flex-1 gap-4 py-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"></path></svg>
                                        <p className="font-semibold text-sm">som original - André Canuto</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:ml-20 flex gap-4 relative">
                            <div className="rounded-3xl">
                                <div>
                                    <img src={natureImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal */}
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black"
                >
                    <div className="p-4 rounded-lg max-w-xs mx-auto text-center" style={{ background: 'rgb(226,68,102)' }}>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <h1 className="text-2xl font-bold mb-2">Sales Promotion</h1>
                            <p className="text-lg font-medium mb-4">Redeem Free Voucher</p>
                            <p className="text-2xl font-bold mb-4">$100</p>
                            <p className="text-sm text-gray-600 mb-4">Get coupon bundle after checkout</p>
                            <button className="text-white py-2 px-4 rounded-full" style={{ background: 'rgb(231,51,103)' }} onClick={() => navigate('/voucher')}>
                                Shop now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </main >
        </>
    );
};


export default HomePage