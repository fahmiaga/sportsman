import React from "react";
import LeafletMap from "../../components/LeafletMap";
import Navbar from "../../components/Navbar2";

export default function ContactUs() {
	return (
		<div className="Contact">
			<Navbar />
			<div className="Contact__hello-drop">
				<h1>Say hello</h1>
				<p>drop us a line or ask anything you want</p>
			</div>

			<LeafletMap />

			<div className="Contact__i">
				<div className="Contact__i__msg">
					<h3>Drop us a message</h3>
				</div>
				<div className="Contact__i__input-email">
					<input placeholder="email" />
				</div>
				<div className="Contact__i__textarea-msg">
					<textarea placeholder="How can we help?" />
				</div>
				<div className="Contact__i__btn-send">
					<button>Send</button>
				</div>
			</div>
		</div>
	);
}
