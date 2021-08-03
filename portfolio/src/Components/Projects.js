import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Styles/Projects.css';

export default function Projects() {

    return (
        <div className="Projects">
            <div className="Projects-Card">
            <Card style={{display: 'flex',
                            flexDirection: 'column', 
                            justifyContent: 'space-between', 
                            width: '20rem', 
                            height: '17rem'}}>
                    <Card.Body style={{display: "flex", flexDirection: "column", alignItems: 'space-between'}}>
                        <Card.Title>LightsOut!</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React app</Card.Subtitle>
                        <Card.Text>
                        A simple and familliar puzzle game implemented as a react application. Turn out all the lights to win!
                        </Card.Text>
                        <div style={{marginTop: "auto"}}>
                            <Card.Link href="https://pokemonpower92.github.io/lightsOut/">Demo</Card.Link>
                            <Card.Link href="https://github.com/Pokemonpower92/lightsOut">Github</Card.Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="Projects-Card">
            <Card style={{display: 'flex',
                            flexDirection: 'column', 
                            justifyContent: 'space-between', 
                            width: '20rem', 
                            height: '17rem'}}>
                    <Card.Body style={{display: "flex", flexDirection: "column", alignItems: 'space-between'}}>
                        <Card.Title>Todo</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React app</Card.Subtitle>
                        <Card.Text>
                        The canonical todo application implemented as a React Application.
                        </Card.Text>
                        <div style={{marginTop: "auto"}}>
                            <Card.Link href="https://pokemonpower92.github.io/todo/">Demo</Card.Link>
                            <Card.Link href="https://github.com/Pokemonpower92/todo">Github</Card.Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="Projects-Card">
            <Card style={{display: 'flex',
                            flexDirection: 'column', 
                            justifyContent: 'space-between', 
                            width: '20rem', 
                            height: '17rem'}}>
                    <Card.Body style={{display: "flex", flexDirection: "column", alignItems: 'space-between'}}>
                        <Card.Title>Radio-Controlled Car</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Arduino -- C++</Card.Subtitle>
                        <Card.Text>
                        A radio-controlled robot built with Arduino nano microcontrollers. 
                        The car can be controlled by both a wireless controller and a command-line python program on a 
                        Raspberry Pi.
                        </Card.Text>
                        <div style={{marginTop: "auto"}}>
                            <Card.Link href="https://github.com/Pokemonpower92/RCCar">Github</Card.Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="Projects-Card">
            <Card style={{display: 'flex',
                            flexDirection: 'column', 
                            justifyContent: 'space-between', 
                            width: '20rem', 
                            height: '17rem'}}>
                    <Card.Body style={{display: "flex", flexDirection: "column", alignItems: 'space-between'}}>
                        <Card.Title>PawPoll</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">MERN Application</Card.Subtitle>
                        <Card.Text>
                        A polling application built with a mern stack. Data visualizations implemented with d3.
                        </Card.Text>
                        <div style={{marginTop: "auto"}}>
                            <Card.Link href="https://github.com/Pokemonpower92/PawPoll">Github</Card.Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}