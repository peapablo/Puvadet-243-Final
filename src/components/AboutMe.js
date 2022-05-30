import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({ item }) {

    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Contact(props) {
    return (
        <div className="container" >
            <CardImg src="https://fcbinside.com/wp-content/uploads/2022/02/imago1010042388h.jpg"></CardImg>
            <div className="row row-content">
                <div className="col-12">
                    <p>Introducing Myself:</p>
                    <Card>
                        <CardBody>
                            Name : <b> Puvadet Niyomdaychar (Pea)</b> <br />
                            Education : <br />
                            <ul>
                                <li>Kindergarten</li>
                                <span>
                                    <b>St.Peter School Sampran</b>
                                </span>
                                <li>Primary School to High School</li>
                                <span>
                                    <b>Sukhondheerawidh School</b>
                                </span>
                                <li>Colleagues</li>
                                <span>
                                    <b>King Mongkut's University of Technology Thonburi</b>
                                </span>
                            </ul>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <ul>Favorite subjects:</ul>
                            <li>
                                <b>Web App development</b>
                            </li>
                            <span>
                                reason :The reason that i like to study Web App develpment is because I can use all
                                of
                                my
                                thinking and imaginations for design.I usually be a designer for programming activity.Just like
                                Videos
                                Games
                                Design in posintion of game design(UX,UI,Gameplay,Tutorial and also music too).andIn competition for
                                using
                                Blender to design a lot of things. Maybe I let my imagination out is one of my way to relax. But of
                                course
                                not in this exam(Just Kidding kub Ajarn, I love you kub). So that's why i love tobe computer design.
                            </span>
                            <li>
                                <b>Physical Education</b>
                            </li>
                            <span>
                                reason : I never refuse I'm one of the biggest fans of Football and I'm also be a
                                Footballer
                                too. So the way to keep my body to be strength and healthy is Physical Education. And I'm always
                                think
                                if we
                                have a healthy mind and body , We will have a happy with body and mind too.
                            </span>
                            <li>
                                <b>Computer Architecture</b>
                            </li>
                            <span>
                                reason : Computer Architecture(Com Arch) is one of my interested topics that I
                                always
                                use to
                                learn and update news. Because All of these are improved and moving so fast. It's good to know that
                                at
                                all in our occupation.
                            </span>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <ul>Favorite Movies:</ul>
                            <li>
                                <b>Avengers: Endgame</b>
                            </li>
                            <span>
                                One of the best in my list. Because It's talk about After the
                                devastating
                                events of Avengers: Infinity War (2018), the universe is in ruins. With the
                                help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions
                                and
                                restore balance to the universe. So It's a end game for this Marvel Phase 3 is that the best
                                phase
                                and
                                start the new era for Marvel. And It's one of mylovely movies for sure.
                            </span>
                            <li>
                                <b>Pacific Rim</b>
                            </li>
                            <span>
                                Pacific Rim Reminds me to be a little boy who loves too watch and play
                                myself
                                to be a Robot or Ultraman fihting with Monster from others universe.And come with a big scale
                                action.
                                So I'm happy to watch this movies everytime.
                            </span>
                            <li>
                                <b>The Batman(2022)</b>
                            </li>
                            <span>
                                The Batman movies it's the movies that Batman should be. Because he is
                                the
                                world gratest's detctive. And This movies show it he can be and be a justice in the time, Come
                                with
                                a
                                story that not fantasy too much. And base on how should rreal people do. The Batman is Number 1
                                in
                                my
                                favourite movies tier lists right now.
                            </span>
                        </CardBody>
                    </Card>
                </div >
            </div >
        </div >
    );
}



export default Contact;
