import React, {Component} from 'react'
import componentData from '../componentData';
import eventEmitter from '../lib/event-emitter';
import Slider from "react-slick";


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 200,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
};
export default class Comics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialSlide: 0,
            comics: []
        };
        this._fetch = this._fetch.bind(this);
    }

    _fetch(search) {
        componentData(
            this.props.tag,
            content => this.setState({comics: content.comics})
        );
    }

    componentDidMount() {
        this._fetch(this.props.search);
        eventEmitter.on('content-comics', message => {
            const tw = this.setState({comics: [message.content, ...this.state.comics], initialSlide: 0});
        });
    }


    render() {
        const {comics, initialSlide} = this.state;
        return (
            this.state.comics.length > 0 ?
                <div>
                    <Slider {...settings} initialSlide={initialSlide}>
                        {
                            comics.map(comic => (
                                <img src={comic.url} key={comic.url}/>

                            ))
                        }
                    </Slider>
                </div>
                : <p>No Comics. Add Something Funny :) </p>
        )
    }
}