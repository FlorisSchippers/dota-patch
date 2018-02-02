import React from 'react';
import Container from '../glamorous/structure/Container';
import Wrapper from '../glamorous/structure/Wrapper';
import Header from '../glamorous/header/Header';
import HeaderImage from '../glamorous/header/HeaderImage';
import HeaderText from '../glamorous/header/HeaderText';
import Header1 from '../glamorous/text/Header1';
import Header2 from '../glamorous/text/Header2';
import Header3 from '../glamorous/text/Header3';
import FullImage from '../glamorous/structure/FullImage';
import Paragraph from '../glamorous/text/Paragraph';

class App extends React.Component {
    constructor() {
        super();
        // Bindings
    }

    render() {
        function clickHandler(e) {
            e.preventDefault();
            window.location.replace('http://www.dota2.com/springcleaning/');
        }

        return (
            <div>
                <Container>
                    <Header>
                        <HeaderImage/>
                        <Wrapper>
                            <Header1>Spring cleaning</Header1>
                            <HeaderText>
                                The Spring Cleaning 2018 update has arrived to sweep in a slew of bug fixes and
                                quality-of-life improvements. We've highlighted a handful of larger changes like the new
                                Profile and the new Hero Changelog Notifications, and you can find a comprehensive list
                                of fixes and various gameplay adjustments in the notes below.
                            </HeaderText>
                        </Wrapper>
                    </Header>
                    <Wrapper>
                        <Header2 onClick={clickHandler}>Here's what we changed</Header2>
                        <FullImage css={{content: 'url(dota-profile.jpg)'}}/>
                        <Header3>Redesigned player profile</Header3>
                        <Paragraph>
                            We’ve redesigned the player profile to include many common feature requests, as well as some
                            new features. Check out your latest match performance, show off the uniquely combined
                            cosmetics you’ve chosen for your favorite heroes and personalize your profile by choosing
                            any background from the catalog of loading screens you own.
                        </Paragraph>
                        <FullImage css={{content: 'url(dota-tower.jpg)'}}/>
                        <Header3>Visual tower damage</Header3>
                        <Paragraph>
                            As you chip away at your enemy's towers—or watch from afar as they do the same to yours—the
                            visual condition of the structures will begin to deteriorate, before crumbling down
                            altogether.
                        </Paragraph>
                    </Wrapper>
                </Container>
            </div>
        );
    }
}

App.propTypes = {};

export default App;