import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbemsList";

function UsersListItem({user}){

    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleUserRemove = () => {
        doRemoveUser(user);
    }

    const header = <>
                {error && <div>Error removing user</div>}
            <Button onClick={handleUserRemove} loading={isLoading} className='mr-3'>
                <GoTrashcan></GoTrashcan>
            </Button>
            {user.name}
    </>

    return (
        <ExpandablePanel header={header}>
                <AlbumsList user={user}></AlbumsList>
        </ExpandablePanel>
    )
}

export default UsersListItem;