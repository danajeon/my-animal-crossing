import Card from 'react-bootstrap/Card';

export const Island = () => {
    return (
        <div id="island" class="anchor">
            <h3>Introducing Nintenland</h3>
            <div>
                <p>Nintenland's name derives from the words "Nintendo" and "Land", and highlights my personal lack of creativity. It is a decision I regret but accept begrudgingly because, as a completionist, I'd rather not go through the pain of cataloging all 15,000+ items again.</p>

                <Card style={{
                    height: 200,
                    width: 300,
                    backgroundColor: 'ivory',
                }}>
                    <Card.Img variant="top" src="" style={{
                        objectFit: 'contain',
                        paddingTop: 10
                    }} />
                    <Card.Body>
                        <Card.Text>
                            <span>Native fruit: Cherries</span><br />
                            <span>Island theme: Castlecore</span><br />
                            <span>Airport color: Blue</span><br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <h4>Stats:</h4>
            <ul>
                <li>Fish caught: 80/80
                    <img src="icons/sea-bass.png" alt="sea-bass" />
                </li>
                <li>Bugs caught: 80/80
                    <img src="icons/paper-kite-butterfly.png" alt="paper-kite-butterfly" />
                </li>
                <li>Deep-sea creatures caught: 40/40
                    <img src="icons/scallop.png" alt="scallop" />
                </li>
                <li>Art pieces collected: 42/42
                    <img src="icons/art.png" alt="art" />
                </li>
                <li>Fossils discovered: 73/73
                    <img src="icons/fossil.png" alt="fossil" />
                </li>
                <li>Gyroids discovered: 36/36
                    <img src="icons/gyroid.png" alt="gyroid" />
                </li>
                <li>DIY recipes discovered: 924/924
                    <img src="icons/diy.png" alt="diy" />
                </li>
                <li>Golden tools: 6/6
                    <img src="icons/golden-tool.png" alt="golden-tool" />
                </li>
                <li>Island stars: 5/5
                    <img src="icons/star.png" alt="star" />
                </li>
            </ul>
        </div>
    )
}