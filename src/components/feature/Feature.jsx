import React from 'react'
import "./feature.scss"
import { PlayArrow , InfoOutlined} from '@material-ui/icons'
export default function Feature({type}) {
    return (
        
        <div className="feature">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                            
                        
                    </select>
                </div>
            )}
             <img src="../assets/user/Alice.jpg" alt="user pic" className="userImg" width="100%" />
            
        
            <div className="info">

                <img src="../assets/movies-pic/matrix.png" alt="movie pic" className="userImg" width="100%" />
                <span className="desc">Lorem ipsum
                    dolor sit amet
                    consectetur adipisicing elit.
                    Cumque sint dolorum minima, perspiciatis 
                  
                    </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>

                </div>

            </div>
            </div>
    )
}
