import './grid.css'

export const GridItem =({title, author, url}) => {
    return (
        <div className="item">
        <a href={url}>{title}</a>
        <p className="author">by<span>{author}</span></p>
        </div>
    )
}