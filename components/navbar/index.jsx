import Link from 'next/link';
import React from 'react';
import { session, signIn, signOut, useSession } from 'next-auth/client'
import LoginComponent from '../LoginComponent'
import Dropdown from '../dropdown'
import { Activity, Search } from 'iconoir-react';


export class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.toggleNavMenu = this.toggleNavMenu.bind(this);
	}

	toggleNavMenu() {
		this.setState({ isOpen: !this.state.isOpen });
	}


	render() {

		let menuIcon;

		if (this.state.isOpen) {
			menuIcon = (
				<path
                    fillRule="evenodd"
					d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
				/>
			);
		} else {
			menuIcon = (
				<path
                    fillRule="evenodd"
					d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
				/>
			);
		}
		return (
			<header className="bg-gray-800 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
				<header className="flex items-center justify-between px-4 py-3 sm:p-0">
					<div>
						<Link href="/">
							<a>
								<div>
									<img className="h-16 inline-block" src="/img/new_logo.png" alt="logo" />
									<span className="inline-block text-xl text-white font-bold subpixel-antialiased">Epic Games Data</span>
								</div>
							</a>
						</Link>
					</div>
					<div className="sm:hidden">
						<button
							onClick={this.toggleNavMenu}
							type="button"
							className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
						>
							<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
								{menuIcon}
							</svg>
						</button>
					</div>
				</header>

				<div className={this.state.isOpen ? 'px-2 pt-2 pb-4 block justify-items-center' : 'px-2 py-2 hidden items-center sm:flex'}>
				<Link href="/search">
					<a className="py-1 text-white font-semibold rounded px-24 justify-center info-banner hover:bg-gray-500 inline-flex w-auto md:w-54">
						<Search height={27} width={27}/> Search
					</a>
					</Link>
					<Link href="/trending">
					<a className="py-1 text-white font-semibold rounded px-2 hover:bg-gray-500 inline-flex">
						<Activity height={27} width={27}/> Trending
					</a>
					</Link>

					<LoginComponent />
					<Dropdown/>
				</div>
			</header>
		);
	}
}