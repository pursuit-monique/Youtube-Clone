// js
import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



import VideoCards from './VideoCards'
import Error from '../error/Error.jsx';
import dummySearch from '../../data/video.js';


export default function Videos(){
    const [modalShow, setModalShow] = useState(true);

    const [userSearch, setUserSearch] = useState([]);
    const [videosList, setVideos] = useState([]);
    const [safeSearch, setSafeSearch] = useState(true);
    const [error, setError] = useState(false);
    const [sort, setSort] = useState('Default');
    // const {items} = dummySearch;

    
    const baseurl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9';


    function errorDisplay(error){
        setModalShow(true);
        setError({code: error.error.code, message: error.error.message});
        setUserSearch('');
    }

    function urlGenerator(baseurl, userSearch, safeSearch, sort){
        let safe = safeSearch ? '&safeSearch=strict' : '&safeSearch=none'
        let order = sort.toLowerCase() === 'default' ? '' : `&order=${sort.toLowerCase()}`
      if (!userSearch){
        return null;
      }
        return `${baseurl}&q=${userSearch}${safe}${order}&key=${process.env.REACT_APP_API_KEY}`;
    }


    function getVideoQuery(event){
        event.preventDefault();

      
            // console.log(urlGenerator(baseurl, userSearch, safeSearch, sort))
            console.log(userSearch)
            if (userSearch.length < 1 ){ return null;}
            fetch(
                `${urlGenerator(baseurl, userSearch, safeSearch, sort)}`,
              {
                method: "GET",
              }
            )
              .then((response) => response.json())
              .then((data) => {
                data.items.length > 0 ? setVideos([...data.items]) : errorDisplay(data);
                // console.log(data);
                setUserSearch('');
              })
              .catch((error) => {
                console.error("Error:", error);
              });

            //   console.log(userSearch)

          
        // console.log(dummySearch);
        // console.log(videosList);


    }
    // console.log(videosList);
    // console.log(items)

    return  ( <><>
    
 <Container>
      <Row className="mb-3">
        <Col></Col>
        <Col xs={7}><Form onSubmit={(event)=>getVideoQuery(event)}>
                <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkbox" onChange={() => setSafeSearch(!safeSearch)} aria-label="Checkbox for following text input" />
                <InputGroup.Text>Safe Search: {!safeSearch? 'on' : 'off'}</InputGroup.Text>
                
                <Form.Control 
                
                type="text" 
                value={userSearch}
                onChange={(event) => {setUserSearch(event.target.value)}} 
                placeholder="Search for videos"
                aria-label="Search"
                aria-describedby="basic-addon2"
                required
                />
            
                <DropdownButton
                onSelect={(event) =>{ setSort(event) }}
          variant="outline-secondary"
          title={sort.replace('wC', 'w C')}
          id="input-group-dropdown-1"
        >
          <Dropdown.Item eventKey="Default" >Default</Dropdown.Item>
          <Dropdown.Item eventKey="Date" >Date</Dropdown.Item>
          <Dropdown.Item eventKey="Rating" >Rating</Dropdown.Item>
          <Dropdown.Item eventKey="Relevance" >Relevance</Dropdown.Item>
          <Dropdown.Item eventKey="Title" >Title</Dropdown.Item>
          <Dropdown.Item eventKey="ViewCount" >View Count</Dropdown.Item>
        </DropdownButton>
                <Button type="submit" variant="danger" id="button-addon2">
                Search
                </Button>
            </InputGroup>
            </Form></Col>
        <Col></Col>
      </Row>
      <Row className="mb-3">
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
      <Row className="container row-cols-xs-3 " >
<VideoCards videosList={videosList} />
    </Row>
  </Container>
            <Error show={modalShow} error={error} onHide={() => setModalShow(false)} />
    <><>
    </>
    </>
        </></>
        )

  

}


