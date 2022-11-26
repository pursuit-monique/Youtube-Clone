// js
import {React, useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';



import Error from '../error/Error.jsx'


export default function Videos(){
    const [modalShow, setModalShow] = useState(false);

    const [userSearch, setUserSearch] = useState([]);
    const [videosList, setVideos] = useState([]);
    const videos = useRef([])
    // const [cards, setCards] = useState([]);
    let videoList = [];


    function errorDisplay(error){
        setModalShow(true);
        // console.log(error.error.code, error.error.message);
        setVideos({code: error.error.code, message: error.error.message});
    }


    function getVideoQuery(event){
        event.preventDefault();

            fetch(
              `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${userSearch}&key=${process.env.REACT_APP_API_KEY}`,
              {
                method: "GET",
              }
            )
              .then((response) => response.json())
              .then((data) => {
                if (videos.current.length > 0)  videos.current.length = 0;
                !!data.items ? data.items.forEach((movie) => videos.current.push(movie)) : errorDisplay(data);
                // if (data.items.length > 0) data.items.forEach((movie) => videos.current.push(movie))
                console.log(data);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
              videoList = [...videos.current]
              console.log(userSearch)
         videoList.map((item) => {
            return (
            <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.snippet.thumbnails.default} />
            <Card.Body>
              <Card.Title>{item.snippet.title}</Card.Title>
              <Card.Text>
                {item.snippet.description}
              </Card.Text>
              <Button variant="danger">Watch!</Button>
            </Card.Body>
          </Card>
          </>) 
          } 
          )
    }

    return  ( <><>
 <Container>
      <Row>
        <Col></Col>
        <Col xs={6}><Form onSubmit={(event)=>getVideoQuery(event, videos)}>
                <InputGroup className="mb-3">
                <Form.Control 
                type="text" 
                onChange={(event) => {setUserSearch(event.target.value)}} 
                placeholder="Search for videos"
                aria-label="Search"
                aria-describedby="basic-addon2"
                />
                <Button type="submit" variant="danger" id="button-addon2">
                Search
                </Button>
            </InputGroup>
            </Form></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={6}>      
            <Alert variant="secondary" >
            Please submit a search keyword and hit 'Submit'.
            </Alert>
         </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={5}>            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>agai</Card.Title>
              <Card.Text>
                it blew up
              </Card.Text>
              <Button variant="danger">Watch!</Button>
            </Card.Body>
          </Card></Col>
        <Col></Col>
      </Row>
    </Container>
            <Error show={modalShow} error={videosList} onHide={() => setModalShow(false)} />
    <><>
    {videoList ? videoList : 'undefined'}
    </>
    </>
        </></>
        )

  

}


// export default class Videos extends React.Component {
//     render() {
//       const opts = {
//         height: '390',
//         width: '640',
//         playerVars: {
//           // https://developers.google.com/youtube/player_parameters
//           autoplay: 1,
//         },
//       };
  
//       return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
//     }
  
//     _onReady(event) {
//       // access to player in all event handlers via event.target
//       event.target.pauseVideo();
//     }
//   }
  