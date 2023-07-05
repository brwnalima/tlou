import './PostsAndActors.css'
import { Fade } from "react-awesome-reveal";

function PostsAndActors() {

    const actors = [
        {
            icon: "https://images.mubicdn.net/images/cast_member/310395/cache-118877-1598256308/image-w856.jpg",
            nome: "Pedro Pascal"
        },
        {
            icon: "https://m.media-amazon.com/images/M/MV5BMWJkZWEyMWYtYWI1MS00ZTY0LTg2MTAtYjUzMWIwZDhjNmViXkEyXkFqcGdeQXVyNzI5MjUxNjE@._V1_FMjpg_UX1000_.jpg",
            nome: "Bella Ramsey"
        },
        {
            icon: "https://images.mubicdn.net/images/cast_member/102157/cache-56709-1600875483/image-w856.jpg?size=800x",
            nome: "Nick Offerman"
        }
    ]

    const posters = [
        {
            posterImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvjTfPrV90FCXNUQZjlbGbPIYlSu0CaSxj4l0haQj7yv5j6nMJd4wVfgIYPzyPhTLwaA&usqp=CAU"
        },
        {
            posterImg: "https://img.elo7.com.br/product/original/4708878/big-poster-serie-the-last-of-us-hbo-tamanho-90x60-cm-lo04-poster-geek.jpg"
        },
        {
            posterImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6BfOdWxO77OQsWF07YFl2sYW8Z0mxjOIXg&usqp=CAU"
        },
        {
            posterImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCn2NYxQlqzOA-RzAL6wR7FFGlBCgZVTiiZiVwyN8JNRvZeeGoevCGoCA6yCfHKQIXsTo&usqp=CAU"
        },
    ]
    return (
        <div className='container'>
            <Fade direction='right'>
                <h3>Posters</h3>
                <div className="posters-wrapper">

                    {posters.map((item, index) => (
                        <div className="posters" key={index}>
                            <img src={item.posterImg} />
                        </div>
                    ))}

                </div>
            </Fade>

            <h3>Actors</h3>
            <div className="actors-wrapper">
                <Fade direction='right'>
                    {actors.map((item, index) => (
                        <div className="actors" key={index}>
                            <div className="act-minicard">
                                <img src={item.icon} alt={item.nome} />
                                <h4>{item.nome}</h4>
                            </div>
                        </div>
                    ))}
                    <div className="viewAll"><button id='viewAll-btn'><a href="https://www.google.com/search?q=the+last+of+us+serie+elenco&bih=678&biw=1396&hl=pt-BR&ei=oG-kZI3uKdfK1sQPpLCnUA&oq=the+last+of+us+serie+&gs_lp=Egxnd3Mtd2l6LXNlcnAiFXRoZSBsYXN0IG9mIHVzIHNlcmllICoCCAAyBRAAGIAEMgUQABiABDIFEC4YgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESNUcULECWLECcAF4AZABAJgBiQGgAYkBqgEDMC4xuAEByAEA-AEBwgIKEAAYRxjWBBiwA8ICChAAGIoFGLADGEPCAg4QABjkAhjWBBiwA9gBAcICEBAuGIoFGMgDGLADGEPYAQLCAhQQLhiABBiXBRjcBBjeBBjgBNgBA-IDBBgAIEGIBgGQBhK6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBQ&sclient=gws-wiz-serp" target="_blank">View All</a></button></div>
                </Fade>
            </div>
        </div >
    )
}

export default PostsAndActors