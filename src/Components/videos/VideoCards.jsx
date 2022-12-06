import { Link } from 'react-router-dom';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function VideoCards({videosList}){
   return (
   <>
    {videosList.length > 0 ? videosList.map((video) =>{
        let url = `/video/${video.id.videoId}`
        //console.log(video)
        return(<Col key={video.id.videoId} className="g-5">
            <Card border="light" style={{ width: '18rem' }}>
            <Card.Header className="cardheader">{video.snippet.channelTitle}</Card.Header>
            <Link to={url} className='black-hyperlink'><Card.Img className="cardimg" variant="top" src={video.snippet.thumbnails.high.url} /></Link>
            {/* <Card.Header bg="danger">Header</Card.Header> */}
            <Card.Body className="cardsize">
              <Card.Title>
                <Link to={url} className='black-hyperlink'>{video.snippet.title.replace('&amp;', '&').replace('&#39;', "'")}</Link>
              </Card.Title>
              {/* <Card.Text> */}
              <Accordion defaultActiveKey="1" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
        {video.snippet.description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
              {/* </Card.Text> */}
              {/* <Button variant="danger">Watch!</Button> */}
            </Card.Body>
            <Card.Footer className='cardfooter'>
          <small className="text-muted"><em>Published: {new Date(video.snippet.publishTime.split('T')[0]).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})}</em></small>
        </Card.Footer>
          </Card></Col>
        )
    }) : null}
    </>
    )
}