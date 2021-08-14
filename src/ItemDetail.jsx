export default function ItemDeatail ({name, description, price, stock}) {
    return( <>
    <div className="card">
        <h3 className="card-title">{name}</h3>
        <p className="card-description"> {description}</p>
        <span className="card-price"> {price}</span>
    </div>
    </>)
}