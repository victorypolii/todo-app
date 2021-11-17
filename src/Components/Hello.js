import React from 'react';

class Hello extends React.Component{
    render(){
        //const {name, prodi, year} = this.props
        return(
            <h2>
                {this.props.name} adalah anak yang {this.props.sifat} seantero {this.props.wilayah}. {this.props.jumlah} galaksi.
            </h2>
        )
    }
}

export default Hello;