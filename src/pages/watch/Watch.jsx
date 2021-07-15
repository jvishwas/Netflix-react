import { ArrowBack} from '@material-ui/icons'
import React from 'react'
import "./watch.scss"

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBack />
                Home
            </div>
            <video className="" autoPlay Progress controls src="../assets/movies-pic/Johnny-Depp-long-ranger.mp4" />
        </div>
    )
}
