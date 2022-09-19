export default function UserComponents({item, chooseUser}) {
    return (
        <div>
            <h2>{item.id}. {item.name}</h2>
            <button onClick={() => {
                chooseUser(item.id);
            }}>Information about the user
            </button>
        </div>
    );
}