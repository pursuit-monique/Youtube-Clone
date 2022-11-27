import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function VideoCards({items, videosList}){
    console.log(items);
   return (<>
    {videosList.length > 0 ? items.map((video) =>{
        console.log(video)
        return(<Col>
            <Card  border="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={video.snippet.thumbnails.high.url} />
            {/* <Card.Header bg="danger">Header</Card.Header> */}
            <Card.Body>
              <Card.Title>{video.snippet.title}</Card.Title>
              <Card.Text>
              <Accordion defaultActiveKey="1" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header >Description</Accordion.Header>
        <Accordion.Body>
        {video.snippet.description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
              </Card.Text>
              {/* <Button variant="danger">Watch!</Button> */}
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">{video.snippet.channelTitle}</small>
        </Card.Footer>
          </Card></Col>
        )
    }) : 'crap'}
    </>)
}