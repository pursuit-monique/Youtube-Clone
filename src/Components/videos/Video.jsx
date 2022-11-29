import {useParams} from 'react-router-dom';

export default function Video (){
    let {id} = useParams();
    return <div>Video ID: {id}</div>
}