// js
import {React, useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';



import VideoCards from './VideoCards'
import Error from '../error/Error.jsx';
import dummySearch from '/Users/moniquecorrea/pursuit/module-3/youtube-clone/src/data/video.js';


export default function Videos(){
    const [modalShow, setModalShow] = useState(false);

    const [userSearch, setUserSearch] = useState([]);
    const [videosList, setVideos] = useState([]);
    const videos = useRef([])
    const {items} = dummySearch;


    function errorDisplay(error){
        setModalShow(true);
        setVideos({code: error.error.code, message: error.error.message});
        setUserSearch('');
    }


    function getVideoQuery(event){
        event.preventDefault();

            fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${userSearch}&key=${process.env.REACT_APP_API_KEY}`,
            {dummySearch},
              {
                method: "GET",
              }
            )
              .then((response) => response.json())
              .then((data) => {
                if (videos.current.length > 0)  videos.current.length = 0;
                !!data.items ? setVideos([...data.items]) : errorDisplay(data);
                // if (data.items.length > 0) data.items.forEach((movie) => videos.current.push(movie))
                console.log(data);
                setUserSearch('');
              })
              .catch((error) => {
                console.error("Error:", error);
              });

              console.log(userSearch)

          
        console.log(dummySearch);
        ;
        console.log(videosList);


    }
    console.log(videosList);
    // videosList.forEach(video => videos.current.push(video.snippet))
    console.log(items)

    return  ( <><>
    
 <Container>
      <Row>
        <Col></Col>
        <Col xs={7}><Form onSubmit={(event)=>getVideoQuery(event, videos)}>
                <InputGroup className="mb-3">
                <Form.Control 
                type="text" 
                value={userSearch}
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
        <Col xs={4}>      
           {videosList.length === 0 ?  <Alert variant="secondary" className="text-center">
            Please submit a search keyword and hit 'Submit'.
            </Alert> : null}
         </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={5}>            
     </Col>
        <Col></Col>
      </Row>
      <Row>
      
      </Row>
    </Container>
    <Container fluid>
      <Row className="justify-content-md-center g-5" xs={3} md={4}>
<VideoCards videosList={videosList} />
    </Row>
  </Container>
            <Error show={modalShow} error={videosList} onHide={() => setModalShow(false)} />
    <><>
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
  