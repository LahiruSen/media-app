import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skelton from "./Skelton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList({user}){

    const {data, error, isLoading} = useFetchAlbumsQuery(user)
    const [addAlbum, results] = useAddAlbumMutation()

    const handleAddAlbum = ()=> {
        addAlbum(user)
    }
    
    let content;

    if (isLoading){
        content = <Skelton count={3} />
    }
    else if (error){
        content = <div>{error}</div>
    }
    else if (data){
        content = data.map(
            album => {
                const header = album.title;
                return <ExpandablePanel key={album.id} header={header}>
                    List of photos in the album
                </ExpandablePanel>

            }
        )
    }

    return (<div>
        <Button onClick={handleAddAlbum}>+ Add album</Button>
<div>Albems by {user.name}</div>
<div>{content}</div>
    </div>)
}

export default AlbumsList;