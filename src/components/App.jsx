import React from 'react';
import Container from '../glamorous/structure/Container';
import Wrapper from '../glamorous/structure/Wrapper';
import Header from '../glamorous/header/Header';
import HeaderImage from '../glamorous/header/HeaderImage';
import HeaderText from '../glamorous/header/HeaderText';
import Header1 from '../glamorous/text/Header1';
import Header2 from '../glamorous/text/Header2';
import Header3 from '../glamorous/text/Header3';
import Image from '../glamorous/structure/Image';
import Paragraph from '../glamorous/text/Paragraph';
import PageRow from '../glamorous/structure/PageRow';
import HalfPageLeft from '../glamorous/structure/HalfPageLeft';
import HalfPageRight from '../glamorous/structure/HalfPageRight';

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
                        <PageRow>
                            <Header2 onClick={clickHandler}>Here's what we changed</Header2>
                            <Image css={{content: 'url(dota-profile.jpg)'}}/>
                            <Header3>Redesigned player profile</Header3>
                            <Paragraph>
                                We’ve redesigned the player profile to include many common feature requests, as well as
                                some new features. Check out your latest match performance, show off the uniquely
                                combined cosmetics you’ve chosen for your favorite heroes and personalize your profile
                                by choosing any background from the catalog of loading screens you own.
                            </Paragraph>
                        </PageRow>
                        <PageRow>
                            <HalfPageLeft>
                                <Image css={{content: 'url(dota-patchicons.jpg)'}}/>
                                <Header3>Gameplay changelog notifications</Header3>
                                <Paragraph>
                                    Dota constantly evolves, and keeping track of changes can be daunting. Now you can
                                    see which heroes have updates by looking at the top-bar portrait of a selected hero
                                    on the drafting screen. Hover over the icon to see any changes made since the last
                                    time you looked. In addition, there is now a section in the Learn tab with the full
                                    changelog. During a game you can hover over an ability or item tooltip to see if and
                                    how they've changed.
                                </Paragraph>
                            </HalfPageLeft>
                            <HalfPageRight>
                                <Image css={{content: 'url(dota-lasthit.jpg)'}}/>
                                <Header3>Last hit trainer</Header3>
                                <Paragraph>
                                    Make the most of every creep and push your GPM to the next level with the Last Hit
                                    Trainer, a new tool in the Learn tab. You can take the time to practice this vital
                                    mechanic anytime you want—even while queuing for a game.
                                </Paragraph>
                            </HalfPageRight>
                        </PageRow>
                        <PageRow>
                            <HalfPageLeft>
                                <Image css={{content: 'url(dota-buyback.jpg)'}}/>
                                <Header3>Improved buyback notifications</Header3>
                                <Paragraph>
                                    Keep your battle plans up-to-date with more prominent buyback notifications on the
                                    top bar portraits and in the kill feed. You can even hold ALT to see recent buybacks
                                    in the top bar after the initial notification has faded. Notifications in the kill
                                    feed will be sticky in that area for 45 seconds.
                                </Paragraph>
                            </HalfPageLeft>
                            <HalfPageRight>
                                <Image css={{content: 'url(dota-competitive.jpg)'}}/>
                                <Header3>Live pro circuit tournament tac=b</Header3>
                                <Paragraph>
                                    As the Dota Pro Circuit progresses towards The International, it should be easy to
                                    tune in for a stream without a scavenger hunt. Now when a Major or Minor is live,
                                    you'll see a dedicated front-page cell in the client. Clicking that button will
                                    launch your web browser to watch the stream.
                                </Paragraph>
                            </HalfPageRight>
                        </PageRow>
                        <PageRow>
                            <HalfPageLeft>
                                <Image css={{content: 'url(dota-pooling.jpg)'}}/>
                                <Header3>Strategy phase item pooling</Header3>
                                <Paragraph>
                                    The time before the battle horn blows is precious for early-game reconnaissance. Get
                                    to the business at hand before the game even begins by pooling tangos and wards to
                                    other players during the strategy phase.
                                </Paragraph>
                            </HalfPageLeft>
                            <HalfPageRight>
                                <Image css={{content: 'url(dota-teleportstatus.jpg)'}}/>
                                <Header3>Team teleport status</Header3>
                                <Paragraph>
                                    Need to see if your teammates are ready for rapid rotations? Just hold ALT to see a
                                    Teleport cooldown notification for Town Portal Scrolls and Boots of Travel under
                                    each hero portrait on the top bar.
                                </Paragraph>
                            </HalfPageRight>
                        </PageRow>
                        <PageRow>
                            <HalfPageLeft>
                                <Image css={{content: 'url(dota-bans.jpg)'}}/>
                                <Header3>6 month matchmakings bans</Header3>
                                <Paragraph>
                                    As part of this update, we are now automatically issuing 6 month matchmaking bans
                                    for players that show an extreme frequency of negative behavior (feeding,
                                    abandoning, player abuse, etc).
                                </Paragraph>
                            </HalfPageLeft>
                            <HalfPageRight>
                                <Image css={{content: 'url(dota-language.jpg)'}}/>
                                <Header3>Language-based matchmaking</Header3>
                                <Paragraph>
                                    Communication plays a vital role in destroying an Ancient. To help improve the lines
                                    of communication between teammates, your selected language is now a much greater
                                    factor when determining matchmaking.
                                </Paragraph>
                            </HalfPageRight>
                        </PageRow>
                        <PageRow>
                            <HalfPageLeft>
                                <Image css={{content: 'url(dota-courier.jpg)'}}/>
                                <Header3>Redeliver courier items</Header3>
                                <Paragraph>
                                    Good teammates help ensure the courier always gets where it needs to go, and with
                                    new hero-delivery icons that appear on the courier interface when it's carrying
                                    someone else's items, it's easier than ever to be a good teammate.
                                </Paragraph>
                            </HalfPageLeft>
                            <HalfPageRight>
                                <Image css={{content: 'url(dota-arcade.jpg)'}}/>
                                <Header3>Custom game arcade revamp</Header3>
                                <Paragraph>
                                    The Arcade tab has been revamped to help you find open Custom Game lobbies with
                                    greater ease. Peruse open lobbies from around the world, or use the list of the most
                                    recent lobbies in nearby regions to join a server with a good ping.
                                </Paragraph>
                            </HalfPageRight>
                        </PageRow>
                        <PageRow>
                            <HalfPageLeft>
                                <Image css={{content: 'url(dota-penalties.jpg)'}}/>
                                <Header3>Custom game matchmaking penalties</Header3>
                                <Paragraph>
                                    Custom Game developers can now opt their games into a penalty-enforcement mode.
                                    Players who abandon or fail to ready up for these custom games will receive
                                    matchmaking cooldowns in the Arcade.
                                </Paragraph>
                            </HalfPageLeft>
                            <HalfPageRight>
                                <Image css={{content: 'url(dota-servers.jpg)'}}/>
                                <Header3>Dedicated servers for custom games</Header3>
                                <Paragraph>
                                    To help improve the overall user experience when playing in the Arcade, dedicated
                                    server support is now enabled by default for all custom games.
                                </Paragraph>
                            </HalfPageRight>
                        </PageRow>
                        <PageRow>
                            <HalfPageLeft>
                                <Image css={{content: 'url(dota-neutrals.jpg)'}}/>
                                <Header3>Minimap neutral difficulty icons</Header3>
                                <Paragraph>
                                    The jungle is home to all manner of creeps, and for some heroes, knowing where each
                                    type lives is essential. To help keep track of these natural resources, the minimap
                                    has been updated to show the difficulty level of each creep camp.
                                </Paragraph>
                            </HalfPageLeft>
                            <HalfPageRight>
                                <Image css={{content: 'url(dota-ready.jpg)'}}/>
                                <Header3>Ready check</Header3>
                                <Paragraph>
                                    Want to see if your party is prepared to queue before you push Play and risk a
                                    failure to ready up? Just click the Ready Check button in your chat window to give
                                    everyone the chance to report for duty.
                                </Paragraph>
                            </HalfPageRight>
                        </PageRow>
                        <PageRow>
                            <HalfPageLeft>
                                <Image css={{content: 'url(dota-friends.jpg)'}}/>
                                <Header3>Active friend filter</Header3>
                                <Paragraph>
                                    When you're looking for players to fill out your party, it can be tough to know
                                    which friends on your list are prepared for battle. You can use this new filter to
                                    show you the list of friends that have been playing recently to ensure that everyone
                                    you see is ready to join the fight.
                                </Paragraph>
                            </HalfPageLeft>
                            <HalfPageRight>
                                <Image css={{content: 'url(dota-teleportcolors.jpg)'}}/>
                                <Header3>Color-coded teleport</Header3>
                                <Paragraph>
                                    In addition to the visible hero outline on incoming teleportation effects, heroes
                                    will have a color-coded ring around them that corresponds to the player's top-bar
                                    color when they use Teleport.
                                </Paragraph>
                            </HalfPageRight>
                        </PageRow>
                        <PageRow>
                            <Image css={{content: 'url(dota-tower.jpg)'}}/>
                            <Header3>Visual tower damage</Header3>
                            <Paragraph>
                                As you chip away at your enemy's towers—or watch from afar as they do the same to
                                yours—the visual condition of the structures will begin to deteriorate, before crumbling
                                down altogether.
                            </Paragraph>
                        </PageRow>
                    </Wrapper>
                </Container>
            </div>
        );
    }
}

App.propTypes = {};

export default App;