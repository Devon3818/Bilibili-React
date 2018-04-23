import React, { Component } from 'react';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import './Cinephile_style.scss';

class Cinephile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Cinephile">
                <div className="top">
                    <div className="banner-wrap">
                        <Banner/>
                    </div>
                    <div className="menu">
                        <div className="item">
                            <img src="/img/纪录片.png" />
                            纪录片
                        </div>
                        <div className="item">
                            <img src="/img/眼镜.png" />
                            眼镜
                        </div>
                        <div className="item">
                            <img src="/img/沙发.png" />
                            电视剧
                        </div>
                        <div className="item">
                            <img src="/img/拍档.png" />
                            巅峰拍档
                        </div>
                    </div>
                </div>

                <div className="tui-wrap">
                    <div className="sm-title clear">
                        <h5 className="fl">正在热播</h5>
                        <span className="fr">查看更多</span>
                    </div>
                    <div className="videos">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>

                <div className="tui-wrap">
                    <div className="sm-title clear">
                        <h5 className="fl">经典推荐</h5>
                        <span className="fr">查看更多</span>
                    </div>
                    <div className="videos">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>


                <div className="tui-wrap">
                    <div className="sm-title clear">
                        <h5 className="fl">纪录片</h5>
                        <span className="fr">查看更多</span>
                    </div>
                    <div className="videos">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>



                <div className="tui-wrap">
                    <div className="sm-title clear">
                        <h5 className="fl">电影</h5>
                        <span className="fr">查看更多</span>
                    </div>
                    <div className="videos">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>



                <div className="tui-wrap">
                    <div className="sm-title clear">
                        <h5 className="fl">电视剧</h5>
                        <span className="fr">查看更多</span>
                    </div>
                    <div className="videos">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>



            </div>
         )
    }
}
 
export default Cinephile;