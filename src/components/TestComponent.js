import React from 'react'
import News from '../components/News'
import {inject, observer} from 'mobx-react'
import {observable, action} from 'mobx'
import html2canvas from 'html2canvas';

import Spinner from '../components/Spinner'

import { YMaps, Map, Placemark } from 'react-yandex-maps';

// import {
//   StaticGoogleMap,
//   Marker,
//   Path,
// } from 'react-static-google-map';

// import ReactGoogleMapImage from 'react-google-map-image';
 
// // Example Usage
// const googleMapApiConfig = { 
//   center: '32 wulemotu ajoke street akoka', 
//   size: '500x240', 
//   zoom: '15',
//     key: 'AIzaSyAoRHOew9R1suvFagpQV6hx5pUiAuKDCaE', 
//     maptype: 'roadmap'
// }



@inject('news')
@observer
class TestComponent extends React.Component {

  @observable capture;
  @observable opacity = 0.5
  componentWillMount() {
    this.props.news.fetchNews()
  }

  @action renderScreenshot = async () => {
    this.capture = await html2canvas(document.body).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      return imgData;
    
  });

    console.log(this.capture)
    // console.log(this.props)
      return this.capture
  }
  
  renderCapture = () => {
    return    <div> {this.capture} </div>
    
  }

  @action addOpacity =()=> {
    this.opacity += 0.1;
  }

  @action substractOpacity =()=> {
    this.opacity -= 0.1;
  }

  render() {
    console.log(this.props)
    // const {capture} = this.props

    const mapState = { center: [55.76, 37.64], zoom: 10, controls: [] };
    const mapState2 = { center: [59.939095, 30.315868    ], zoom: 10, controls: [] };

    return (
    <div> 
      map will go here
      <button onClick={this.renderScreenshot}>Capture </button>
      {/* <div style={{{position: 'absolute', width: '400px', height: '400px', zIndex: '2' background: 'url(https://habrastorage.org/files/9a7/e08/cab/9a7e08caba7249929135c177ce35a4ee.png)'}}></div>
      <div style={{position: 'absolute', width: '400px', height: '400px', zIndex: '2', background: 'url(https://hsto.org/files/715/4d8/98d/7154d898dff840e1a7ecacdaec3842ae.png)', opacity:this.opacity.toString()}}></div> */}
      {this.capture ?  <div style={{background: `url(${this.capture})`}}> Capture is here </div> : null }
      {/* {this.capture ? <div> {this.capture} </div> : null} */}
      {/* {this.capture && this.renderCapture() } */}


  <YMaps>
    <div style={{position: 'absolute', width: '400px', height: '400px', zIndex: '2'}}>
    <Map state={mapState} >
 
      {/* <Placemark
        geometry={{
          coordinates: [55.751574, 37.573856]
        }}
        properties={{
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
        }}
        options={{
          iconLayout: 'default#image',
          iconImageHref: 'images/myIcon.gif',
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42]
        }}
      /> */}
 
    </Map>
    </div>

  </YMaps>

<YMaps>
<div style={{position: 'absolute', width: '400px', height: '400px', zIndex: '2', opacity: this.opacity.toString()}}>

    <Map state={mapState2} >
 
   
    </Map>
    </div>

  </YMaps>

{/* <ReactGoogleMapImage 
    config={googleMapApiConfig}
    wrapperStyle={{ width: '100%' }}
    style={{ width: '400px', height: 'auto', border: '1px solid #ccc'}}
/> */}



      {/* <StaticGoogleMap size="600x600" >
  
      <Marker iconURL="https://goo.gl/1oTJ9Y" location="Canberra+ACT" />
  <Marker
    anchor="topleft"
    iconURL="http://tinyurl.com/jrhlvu6"
    location="Melbourne+VIC"
  />
  <Marker
    anchor="32,10"
    iconURL="https://goo.gl/5y3S82"
    location="Melbourne+VIC"
  />
</StaticGoogleMap> */}

      <button onClick ={this.addOpacity}> + </button>
      <button onClick ={this.substractOpacity}> - </button>

    </div>
    )

  }
}

export default TestComponent
