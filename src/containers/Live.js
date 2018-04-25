import React, { Component } from 'react';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import './Live_style.scss';

class Live extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Live">

                <div className="banner-wrap">
                    <Banner/>
                </div>

                <div className="pink-user">
                    <div className="wrap clear">
                        <div className="item">
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2849537798,2006195050&fm=27&gp=0.jpg" />
                            <p>斯利美</p>
                            <span>133.2万关注</span>
                        </div>

                        <div className="item">
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1711946689,2912391142&fm=27&gp=0.jpg" />
                            <p>斯利美</p>
                            <span>133.2万关注</span>
                        </div>

                        <div className="item">
                            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=93823518,317014191&fm=27&gp=0.jpg" />
                            <p>斯利美</p>
                            <span>133.2万关注</span>
                        </div>

                        <div className="item">
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1168281461,2067351561&fm=27&gp=0.jpg" />
                            <p>斯利美</p>
                            <span>133.2万关注</span>
                        </div>

                        <div className="item">
                            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2476143401,3682287615&fm=27&gp=0.jpg" />
                            <p>斯利美</p>
                            <span>133.2万关注</span>
                        </div>

                        <div className="item">
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2072669647,1848417192&fm=27&gp=0.jpg" />
                            <p>斯利美</p>
                            <span>133.2万关注</span>
                        </div>

                        <div className="item">
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3728824971,1065260223&fm=27&gp=0.jpg" />
                            <p>斯利美</p>
                            <span>133.2万关注</span>
                        </div>

                        <div className="item">
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2849537798,2006195050&fm=27&gp=0.jpg" />
                            <p>斯利美</p>
                            <span>133.2万关注</span>
                        </div>

                        <div className="item">
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2849537798,2006195050&fm=27&gp=0.jpg" />
                            <p>斯利美</p>
                            <span>133.2万关注</span>
                        </div>

                        <div className="item">
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2849537798,2006195050&fm=27&gp=0.jpg" />
                            <p>斯利美</p>
                            <span>133.2万关注</span>
                        </div>
                    </div>
                </div>

                <div className="live-wrap clear">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

            </div>
         )
    }
}
 
export default Live;