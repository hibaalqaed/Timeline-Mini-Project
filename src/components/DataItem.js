const DataItem = (props) => {
    return (
        <div>
        <p>{props.amir.id}</p>
        <p>{props.amir.name}</p>
        <p>{props.amir.title}</p>
        <p>{props.amir.birth}</p>
        <p>{props.amir.death}</p>
        <img src={props.amir.portrait}/>
        <p>{props.amir.reignedFrom}</p>
        <p>{props.amir.reignedUntil}</p>
      </div>
    )
}

export default DataItem;