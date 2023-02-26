import { Component } from "react";
import './grid.css'
import { getData } from "../Utils/api";
import { GridItem } from "./GridItem";

export class Grid extends Component {
    state = {
        news:[]
    }
    async componentDidMount() {
        const data =  await getData(this.props.request);
        this.setState({news:data});
    }

    async componentDidUpdate(prevProps) {
        if (this.props.request !== prevProps.request) {
            const data =  await getData(this.props.request);
            this.setState({news:data});
        }
    }

    render() {
        const {news} = this.state
        return(
            <ul className="grid">
                {news.map(item => {
                    return (<li>
                        <GridItem title={item.title} author={item.author} url={item.url} />
                    </li>)
                })}
            </ul>
        )
    }
}