import React, { Component } from 'react';
import './Bangumi_style.scss';
import Banner from '../components/Banner/Banner';

const style= {
    paddingBottom: '3.5rem'
}

class Bangumi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Bangumi" style={style}>
                <div className="top">
                    <div className="iclass">
                        <div className="item item-l">
                            <img src="data:image/png;base64,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" />
                            番剧
                        </div>
                        <div className="item item-r">
                            <img src="data:image/png;base64,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" />
                            国创
                        </div>
                    </div>

                    <div className="tags clear">
                        <a>
                            <img src="/icon/娱乐.png" />    点评
                        </a>
                        <a className="center">
                            <img src="/icon/动画.png" />    时间表
                        </a>
                        <a>
                            <img src="/icon/科技.png" />    索引
                        </a>
                    </div>
                </div>

                <Banner />
                
                {/* 推荐 */}
                <div className="tui-wrap">
                    <div className="sm-title clear">
                        <h5 className="fl">番剧推荐</h5>
                        <span className="fr">查看更多</span>
                    </div>
                    <div className="boxs">
                        <div className="fan-card">
                            <div className="fan-info">
                                <img src="/img/fan.png" />
                                <p>110.6万人追番</p>
                            </div>
                            <h5>笨女孩</h5>
                            <p>更新至第3话</p>
                        </div>
                        <div className="fan-card">
                            <div className="fan-info">
                                <img src="/img/fan.png" />
                                <p>110.6万人追番</p>
                            </div>
                            <h5>笨女孩</h5>
                            <p>更新至第3话</p>
                        </div>
                        <div className="fan-card">
                            <div className="fan-info">
                                <img src="/img/fan.png" />
                                <p>110.6万人追番</p>
                            </div>
                            <h5>笨女孩</h5>
                            <p>更新至第3话</p>
                        </div>
                    </div>

                    <div className="news">
                        <img src="/banner/banner_0.png" />
                        <div className="news-info">
                            <h5>资讯档,2018年第16周</h5>
                            <p>剧场版涌入</p>
                        </div>
                    </div>


                </div>

                <div className="tui-wrap">
                    <div className="sm-title clear">
                        <h5 className="fl">番剧推荐</h5>
                        <span className="fr">查看更多</span>
                    </div>
                    <div className="boxs">
                        <div className="fan-card">
                            <div className="fan-info">
                                <img src="/img/fan.png" />
                                <p>110.6万人追番</p>
                            </div>
                            <h5>笨女孩</h5>
                            <p>更新至第3话</p>
                        </div>
                        <div className="fan-card">
                            <div className="fan-info">
                                <img src="/img/fan.png" />
                                <p>110.6万人追番</p>
                            </div>
                            <h5>笨女孩</h5>
                            <p>更新至第3话</p>
                        </div>
                        <div className="fan-card">
                            <div className="fan-info">
                                <img src="/img/fan.png" />
                                <p>110.6万人追番</p>
                            </div>
                            <h5>笨女孩</h5>
                            <p>更新至第3话</p>
                        </div>
                    </div>

                    <div className="news">
                        <img src="/banner/banner_0.png" />
                        <div className="news-info">
                            <h5>资讯档,2018年第16周</h5>
                            <p>剧场版涌入</p>
                        </div>
                    </div>


                </div>




            </div>
        )
    }
}
 
export default Bangumi;