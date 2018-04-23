import React, { Component } from 'react';
import Banner from '../components/Banner/Banner';
import './Category_style.scss';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Category">
                <div className="top">
                    <div className="banner-wrap">
                        <Banner/>
                    </div>
                    <div className="menu">
                        <div className="item">
                            <img src="/icon/动画.png" />
                            动画
                        </div>
                        <div className="item">
                            <img src="/icon/游戏.png" />
                            游戏
                        </div>
                        <div className="item">
                            <img src="/icon/番剧.png" />
                            影视
                        </div>
                        <div className="item">
                            <img src="/icon/生活.png" />
                            生活
                        </div>
                        <div className="item">
                            <img src="/icon/游戏中心.png" />
                            更多
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="user-info clear">
                        <img className="fl" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" />
                        <span className="uname">Devon</span>
                    </div>
                    <h4>幸福的背景是不幸？——《unnatural》万字评</h4>
                    <div className="ibanner" style={{backgroundImage: "url(/img/cbanner.png)"}}></div>
                    <p className="dec"> 写在前面，内含大量剧透，适合至少看过一遍本剧的朋友观看，另外文章非常长，真的...很长，希望喜欢本剧的朋友能耐心看完。另外第一次在B站发长评，任何觉得可以改善的地方希望能留言告诉我，以后有机会再写些别的日剧安利</p>
                    <div className="clear tags">
                        <span className="fl">影视·1213阅读</span>

                        <span className="fr"><i className="iconfont icon-icon--"/> 2</span>
                        <span className="fr"><i className="iconfont icon-dianzan1"/> 124</span>
                    </div>
                </div>

                <div className="item">
                    <div className="user-info clear">
                        <img className="fl" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" />
                        <span className="uname">Devon</span>
                    </div>
                    <h4>幸福的背景是不幸？——《unnatural》万字评</h4>
                    <div className="ibanner" style={{backgroundImage: "url(/img/cbanner.png)"}}></div>
                    <p className="dec"> 写在前面，内含大量剧透，适合至少看过一遍本剧的朋友观看，另外文章非常长，真的...很长，希望喜欢本剧的朋友能耐心看完。另外第一次在B站发长评，任何觉得可以改善的地方希望能留言告诉我，以后有机会再写些别的日剧安利</p>
                    <div className="clear tags">
                        <span className="fl">影视·1213阅读</span>

                        <span className="fr"><i className="iconfont icon-icon--"/> 2</span>
                        <span className="fr"><i className="iconfont icon-dianzan1"/> 124</span>
                    </div>
                </div>

                <div className="item">
                    <div className="user-info clear">
                        <img className="fl" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" />
                        <span className="uname">Devon</span>
                    </div>
                    <h4>幸福的背景是不幸？——《unnatural》万字评</h4>
                    <div className="ibanner" style={{backgroundImage: "url(/img/cbanner.png)"}}></div>
                    <p className="dec"> 写在前面，内含大量剧透，适合至少看过一遍本剧的朋友观看，另外文章非常长，真的...很长，希望喜欢本剧的朋友能耐心看完。另外第一次在B站发长评，任何觉得可以改善的地方希望能留言告诉我，以后有机会再写些别的日剧安利</p>
                    <div className="clear tags">
                        <span className="fl">影视·1213阅读</span>

                        <span className="fr"><i className="iconfont icon-icon--"/> 2</span>
                        <span className="fr"><i className="iconfont icon-dianzan1"/> 124</span>
                    </div>
                </div>

                <div className="item">
                    <div className="user-info clear">
                        <img className="fl" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" />
                        <span className="uname">Devon</span>
                    </div>
                    <h4>幸福的背景是不幸？——《unnatural》万字评</h4>
                    <div className="ibanner" style={{backgroundImage: "url(/img/cbanner.png)"}}></div>
                    <p className="dec"> 写在前面，内含大量剧透，适合至少看过一遍本剧的朋友观看，另外文章非常长，真的...很长，希望喜欢本剧的朋友能耐心看完。另外第一次在B站发长评，任何觉得可以改善的地方希望能留言告诉我，以后有机会再写些别的日剧安利</p>
                    <div className="clear tags">
                        <span className="fl">影视·1213阅读</span>

                        <span className="fr"><i className="iconfont icon-icon--"/> 2</span>
                        <span className="fr"><i className="iconfont icon-dianzan1"/> 124</span>
                    </div>
                </div>


            </div>
         )
    }
}
 
export default Category;