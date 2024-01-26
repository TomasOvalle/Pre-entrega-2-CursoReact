import Item from "./item";

const ItemList = ({items}) => {
    return(
        <div className="ContainerMangas">
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ItemList