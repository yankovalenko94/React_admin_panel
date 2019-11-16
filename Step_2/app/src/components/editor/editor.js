import axios from 'axios';
import React, {Component} from 'react';

export default class Editor extends Component {
    constructor() {
        super();

        this.state = {
            pageList: [],
            newPageName: ""
        }
        this.createNewPage = this.createNewPage.bind(this);
    }

    componentDidMount() {
        this.loadPageList();
    }

    loadPageList() {
        axios
            .get("./api")
            .then(res => this.setState({pageList: res.data}))
    }

    createNewPage() {
        axios
            .post("./api/createNewPage.php", {"name": this.state.newPageName})
            .then(this.loadPageList())
            .catch(() => alert("Страница уже существует!"));
    }

    deletePage(page) {
        axios
            .post("./api/deletePage.php", {"name": page})
            .then(this.loadPageList())
            .catch(() => alert("Страницы не существует!"));
    }

    render() {
        const {pageList} = this.state;
        const pages = pageList.map((page, i) => {
            return (
                <h1 key={i}>{page}
                    <a 
                    href="#"
                    onClick={() => this.deletePage(page)}>(x)</a>
                </h1>
            )
        });

        return (
            <>
                <input
                    onChange={(e) => {this.setState({newPageName: e.target.value})}} 
                    type="text"/>
                <button onClick={this.createNewPage}>Создать страницу</button>
                {pages}
            </>
        )
    }
}