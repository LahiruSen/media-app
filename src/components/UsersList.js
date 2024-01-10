
import { useEffect} from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skelton from "./Skelton";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

function UsersList() {

    const [runFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [runAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        runFetchUsers();
    }, [runFetchUsers]);

    const handleUserAdd = ()=> {
        runAddUser()
    }

    let content;
    if (isLoadingUsers) {
        content = <Skelton times={6} className='h-10 w-full' />
    }
    else if (loadingUsersError) {
        content =  <div>Error fetching data</div>
    }
    else{
        content = data.map((user) => {
            return (<UsersListItem key={user.id} user={user}></UsersListItem> )
        })
    
    }

    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                    <Button loading={isCreatingUser} onClick={handleUserAdd}>Add User</Button>
            </div>
            {creatingUserError && <div>Error creating user</div>}
            <h1>{content}</h1>
        </div>
    )
}

export default UsersList;