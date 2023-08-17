import React from "react";
import Card from "react-bootstrap/Card";
import "../Styles/Projects.css";

export default function Projects() {
	return (
		<div className="Projects">
			<div className="Projects-Card">
				<Card
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						width: "20rem",
						height: "17rem",
					}}
				>
					<Card.Body
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "space-between",
						}}
					>
						<Card.Title>LightsOut!</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							React app
						</Card.Subtitle>
						<Card.Text>
							A simple and familliar puzzle game implemented as a
							react application. Turn out all the lights to win!
						</Card.Text>
						<div style={{ marginTop: "auto" }}>
							<Card.Link href="https://pokemonpower92.github.io/lightsOut/">
								Demo
							</Card.Link>
							<Card.Link href="https://github.com/Pokemonpower92/lightsOut">
								Github
							</Card.Link>
						</div>
					</Card.Body>
				</Card>
			</div>
			<div className="Projects-Card">
				<Card
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						width: "20rem",
						height: "17rem",
					}}
				>
					<Card.Body
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "space-between",
						}}
					>
						<Card.Title>Todo</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							React app
						</Card.Subtitle>
						<Card.Text>
							The canonical todo application implemented as a
							React Application.
						</Card.Text>
						<div style={{ marginTop: "auto" }}>
							<Card.Link href="https://pokemonpower92.github.io/todo/">
								Demo
							</Card.Link>
							<Card.Link href="https://github.com/Pokemonpower92/todo">
								Github
							</Card.Link>
						</div>
					</Card.Body>
				</Card>
			</div>
			<div className="Projects-Card">
				<Card
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						width: "20rem",
						height: "17rem",
					}}
				>
					<Card.Body
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "space-between",
						}}
					>
						<Card.Title>Radio-Controlled Car</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							Arduino / C++
						</Card.Subtitle>
						<Card.Text>
							A radio-controlled robot built with Arduino nano
							microcontrollers. The car can be controlled by both
							a wireless controller and a command-line python
							program on a Raspberry Pi.
						</Card.Text>
						<div style={{ marginTop: "auto" }}>
							<Card.Link href="https://github.com/Pokemonpower92/RCCar">
								Github
							</Card.Link>
						</div>
					</Card.Body>
				</Card>
			</div>
			<div className="Projects-Card">
				<Card
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						width: "20rem",
						height: "17rem",
					}}
				>
					<Card.Body
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "space-between",
						}}
					>
						<Card.Title>data_ingester</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							Python / Flask / Celery / Docker
						</Card.Subtitle>
						<Card.Text>
							A microservice that consumes data from public APIs
							and stores it in a MySQL container. Asynchronous
							tasks managed by python's celery library. Redis
							cache used to store responses and reduce load on
							APIs.
						</Card.Text>
						<div style={{ marginTop: "auto" }}>
							<Card.Link href="https://github.com/Pokemonpower92/data_ingester">
								Github
							</Card.Link>
						</div>
					</Card.Body>
				</Card>
			</div>
			<div className="Projects-Card">
				<Card
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						width: "20rem",
						height: "17rem",
					}}
				>
					<Card.Body
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "space-between",
						}}
					>
						<Card.Title>PiDration</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							Electronics / Python
						</Card.Subtitle>
						<Card.Text>
							A soil analytics application built on the arduino
							and Raspberry Pi platforms. My plants kept dying :(
						</Card.Text>
						<div style={{ marginTop: "auto" }}>
							<Card.Link href="https://github.com/Pokemonpower92/PiDration">
								Github
							</Card.Link>
						</div>
					</Card.Body>
				</Card>
			</div>
			<div className="Projects-Card">
				<Card
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						width: "20rem",
						height: "17rem",
					}}
				>
					<Card.Body
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "space-between",
						}}
					>
						<Card.Title>Word Searches</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							C++
						</Card.Subtitle>
						<Card.Text>
							A CLT that allows users to create pdf word searches
							from text files. Requires a postscript graphing
							utility called 'jgraph' that one of my favorite
							people wrote.
						</Card.Text>
						<div style={{ marginTop: "auto" }}>
							<Card.Link href="https://github.com/Pokemonpower92/WordSearch">
								Github
							</Card.Link>
						</div>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}
