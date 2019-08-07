import React from 'react';
import { Link } from 'react-router-dom';

const ICON_COLORS = [
    '#FF8360',
    '#E8E288',
    '#0FA3B1',
    '#00FFCD',
    '#1A535C',
    '#FF6B6B',
    '#0E103D',
    '#69306D'
];

class ServerNode extends React.Component {
    constructor (props) {
        super(props);
        this.makeDefaultIcon = this.makeDefaultIcon.bind(this);
        
        this.state = {
            imageIcon: <img src={this.props.server.icon_url} id={this.props.server.id} className={'icon_' + this.props.server.id} />,
            fallbackIcon: null
        };
    }

    componentDidMount () {
        let outside;
        fetch("http://www.direcorgi.com/assets/images/corgi-icon.png", {"Access-Control-Allow-Origin": "*"}).then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                response.blob().then((image) => {
                    outside = URL.createObjectURL(images)

                    console.log(image)
                    console.log(outside)
                });
            }
        )
        // fetch(this.props.server.icon_url)
        //     //                         vvvv
        //     .then(response => response.blob())
        //     .then(images => {
        //         // Then create a local URL for that image and print it 
        //         outside = URL.createObjectURL(images)
        //         console.log(outside)
        //     })
    }

    componentDidUpdate () {

        // let context = this

        // if (this.state.imageIcon) {
        //     setTimeout(()=>{
        //         let el = document.querySelector(`.icon_${context.props.server.id}`)
        //         if (el && !el.complete) {
        //             context.setState({ imageIcon: null, fallbackIcon: this.makeDefaultIcon() })
        //         } 
        //     }, 250)
        // } 
    }

    makeDefaultIcon (e) {
        let defaultStyle = {
            fontSize: '30px',
            textShadow: '2px 2px 3px rgba(0, 0, 0, 0.3)',
            color: 'white',
            backgroundColor: ICON_COLORS[this.props.server.id % ICON_COLORS.length],
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }

        return (
            <div id={ this.props.server.id } style={ defaultStyle }>
                { this.props.server.name[0].toUpperCase() }
            </div>
        );
    }

    render () {

        return (
            <Link to={`/server/${this.props.server.id}`} onClick={this.props.handleServerClick} style={{}} className="server-node" id={this.props.server.id} key={this.props.server.id}>
                { this.state.fallbackIcon }
                { this.state.imageIcon }
                <span className="server-tag">{this.props.server.name}</span>
                {/* { selectPointer } */}
            </Link>
        );
    }
}

export default ServerNode;