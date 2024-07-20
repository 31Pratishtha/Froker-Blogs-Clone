import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
	faTwitter,
	faLinkedin,
	faFacebook,
	faInstagram,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
	return (
		<footer>
			<div className="flex justify-evenly">
				<div>
					<img src="logo.png" alt="" className="" />
				</div>

				<div className="flex gap-20">
					<div>
						<h1 className="text-frk-orange font-bold text-2xl">Quicklink</h1>
						<ul className="flex flex-col gap-4 text-lg">
							<li>
								<a href="">Home</a>
							</li>
							<li>
								<a href="">About Us</a>
							</li>
							<li>
								<a href="">Privacy Policy</a>
							</li>
							<li>
								<a href="">Terms and conditions</a>
							</li>
						</ul>
					</div>

					<div>
						<h1 className="text-frk-orange font-bold text-2xl">Contacts</h1>
						<ul className="flex flex-col gap-4 text-lg">
							<li>
								<a href="">
									<FontAwesomeIcon
										icon={faLocationDot}
										className="text-frk-orange pr-4 text-lg"
									/>
									Whitefield, Bengaluru, 560066
								</a>
							</li>
							<li>
								<a href="">
									<FontAwesomeIcon
										icon={faEnvelope}
										className="text-frk-orange pr-4 text-lg"
									/>
									support@froker.in
								</a>
							</li>
						</ul>
						<ul className="flex gap-4 text-lg pt-4">
							<li>
								<a href="">
									<FontAwesomeIcon
										icon={faTwitter}
										className="text-frk-orange text-2xl"
									/>
								</a>
							</li>
							<li>
								<a href="">
									<FontAwesomeIcon
										icon={faLinkedin}
										className="text-frk-orange text-2xl"
									/>
								</a>
							</li>
							<li>
								<a href="">
									<FontAwesomeIcon
										icon={faFacebook}
										className="text-frk-orange text-2xl"
									/>
								</a>
							</li>
							<li>
								<a href="">
									<FontAwesomeIcon
										icon={faInstagram}
										className="text-frk-orange text-2xl"
									/>
								</a>
							</li>
							<li>
								<a href="">
									<FontAwesomeIcon
										icon={faYoutube}
										className="text-frk-orange text-2xl"
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="text-frk-orange font-bold text-2xl">
					Scan to Download
					<img src="qr.jpg" alt="" />
				</div>
			</div>
			<img src="waves.svg" alt="" />
		</footer>
	)
}
