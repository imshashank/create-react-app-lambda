import React from 'react'
import {API} from 'aws-amplify'
import {getFeed, getTopics} from '../graphql/queries'
import Trending from "../components/Trending";
import TrendingNext from "../components/TrendingNext";
import NewsSection from "../components/NewsSection";
import RecentNews from "../components/RecentNews";
import NavBar from "../components/NavBar";

async function getArticles(requestType, appType, limit, nextToken) {
    const params = {
        "requestType": requestType,
        "appType": appType,
        "limit": limit,
        "nextToken": nextToken
    }
    const postData = await API.graphql({
        query: getFeed, variables: params
    })
    return postData.data.getFeed;
}

async function getCategories(requestType, appType, limit, nextToken) {
    const params = {
        "requestType": requestType,
        "appType": appType,
        "limit": limit,
        "nextToken": nextToken
    }
    const postData = await API.graphql({
        query: getTopics, variables: params
    })
    return postData.data.getTopics;
}

export async function getStaticProps() {
    const [topAppTypes, trendingArticles, startupArticles, businessArticles, space, photography] = await Promise.all([
        getCategories("TOP_APP_TYPE", null, 10, null),
        getArticles("TOP", "AI", 4, null),
        getArticles("TOP", "STARTUPS", 4, null),
        getArticles("TOP", "BUSINESS", 4, null),
        getArticles("TOP", "HOLLYWOOD", 4, null),
        getArticles("TOP", "PHOTOGRAPHY", 4, null),
    ]);
    const trendingArticlesNext = await getArticles("TOP", "AI", 4, trendingArticles.nextToken);

    return {
        props: {
            topAppTypes: topAppTypes,
            trending: trendingArticles.items,
            trendingNext: trendingArticlesNext.items,
            startups: startupArticles.items,
            business: businessArticles.items,
            space: space.items,
            photography: photography.items,
        }
    };
}

export default function Home({topAppTypes, trending, trendingNext, startups, business, space: hollywood, photography}) {
    // const [posts, setPosts, startups, setStartups] = useState([])
    // useEffect(() => {
    //     fetchPosts();
    //     fetchStartups();
    // }, [])
    //
    // async function fetchStartups() {
    //     const params = {
    //         "requestType": "TOP",
    //         "limit": 5
    //     }
    //     const postData = await API.graphql({
    //         query: getFeed, variables: params
    //     })
    //     ('startups: ', postData)
    //     this.setState({startups: postData.data.getFeed.items})
    // }
    //
    // async function fetchPosts() {
    //     const params = {
    //         "requestType": "TOP",
    //         "appType": "STARTUPS",
    //         "limit": 5
    //     }
    //     const postData = await API.graphql({
    //         query: getFeed, variables: params
    //     })
    //     console.log('postData: ', postData)
    //     setPosts(postData.data.getFeed.items)
    // }

    return (
        <div>
            <div style={bodyStyle}>
                <NavBar categories={topAppTypes}/>
                <div className="site-section py-0">
                    <div className="owl-carousel hero-slide owl-style">
                        <div className="site-section">
                            <div className="container">
                                <div className="half-post-entry d-block d-lg-flex bg-light">
                                    <div className="img-bg" style={{backgroundImage: 'url("images/big_img_1.jpg")'}}/>
                                    <div className="contents">
                                        <span className="caption">Editor's Pick</span>
                                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They
                                            Are</a>
                                        </h2>
                                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad
                                            reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid
                                            quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus
                                            aliquam accusantium beatae?</p>
                                        <div className="post-meta">
                                        <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                            href="#">Food</a></span>
                                            <span className="date-read">Jun 14 <span
                                                className="mx-1">•</span> 3 min read <span
                                                className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="site-section">
                            <div className="container">
                                <div className="half-post-entry d-block d-lg-flex bg-light">
                                    <div className="img-bg" style={{backgroundImage: 'url("images/big_img_1.jpg")'}}/>
                                    <div className="contents">
                                        <span className="caption">Editor's Pick</span>
                                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They
                                            Are</a>
                                        </h2>
                                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad
                                            reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid
                                            quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus
                                            aliquam accusantium beatae?</p>
                                        <div className="post-meta">
                                        <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                            href="#">Food</a></span>
                                            <span className="date-read">Jun 14 <span
                                                className="mx-1">•</span> 3 min read <span
                                                className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-title">
                                            <h2>Editor's Pick</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="post-entry-1">
                                            <a href="post-single.html">
                                                <img src="images/img_h_1.jpg" alt="Image"
                                                     className="img-fluid"/></a>
                                            <h2><a href="blog-single.html">1News Needs to Meet Its Audiences Where They
                                                Are</a></h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                                                temporibus
                                                praesentium neque, voluptatum quam quibusdam.</p>
                                            <div className="post-meta">
                                            <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                                href="#">News</a></span>
                                                <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span
                                                    className="icon-star2"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post-entry-2 d-flex bg-light">
                                            <div className="thumbnail"
                                                 style={{backgroundImage: 'url("images/img_v_1.jpg")'}}/>
                                            <div className="contents">
                                                <h2><a href="blog-single.html">2News Needs to Meet Its Audiences Where
                                                    They
                                                    Are</a></h2>
                                                <div className="post-meta">
                                                <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                                    href="#">News</a></span>
                                                    <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span
                                                        className="icon-star2"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-entry-2 d-flex">
                                            <div className="thumbnail"
                                                 style={{backgroundImage: 'url("images/img_v_2.jpg")'}}/>
                                            <div className="contents">
                                                <h2><a href="blog-single.html">3News Needs to Meet Its Audiences Where
                                                    They
                                                    Are</a></h2>
                                                <div className="post-meta">
                                                <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                                    href="#">News</a></span>
                                                    <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span
                                                        className="icon-star2"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-entry-2 d-flex">
                                            <div className="thumbnail"
                                                 style={{backgroundImage: 'url("images/img_v_3.jpg")'}}/>
                                            <div className="contents">
                                                <h2><a href="blog-single.html">4News Needs to Meet Its Audiences Where
                                                    They
                                                    Are</a></h2>
                                                <div className="post-meta">
                                                <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                                    href="#">News</a></span>
                                                    <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span
                                                        className="icon-star2"/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Trending articles={trending}/>
                        </div>
                    </div>
                </div>
                <div className="py-0">
                    <div className="container">
                        <div className="half-post-entry d-block d-lg-flex bg-light">
                            <div className="img-bg" style={{backgroundImage: 'url("images/big_img_1.jpg")'}}/>
                            <div className="contents">
                                <span className="caption">Editor's Pick</span>
                                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
                                    vero
                                    obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim
                                    praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo
                                    veritatis,
                                    iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
                                <div className="post-meta">
                                    <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">Food</a></span>
                                    <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span
                                        className="icon-star2"/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <NewsSection articles={startups} category={"Startups"}/>
                            <NewsSection articles={business} category={"Business"}/>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <RecentNews articles={hollywood} title={"Hollywood"}/>
                            <TrendingNext articles={trendingNext}/>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="custom-pagination list-unstyled">
                                    <li><a href="#">1</a></li>
                                    <li className="active">2</li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section subscribe bg-light">
                    <div className="container">
                        <form action="#" className="row align-items-center">
                            <div className="col-md-5 mr-auto">
                                <h2>Newsletter Subcribe</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut
                                    at
                                    quae omnis pariatur obcaecati possimus nisi ea iste!</p>
                            </div>
                            <div className="col-md-6 ml-auto">
                                <div className="d-flex">
                                    <input type="email" className="form-control" placeholder="Enter your email"/>
                                    <button type="submit" className="btn btn-secondary"><span
                                        className="icon-paper-plane"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/*<h1>Posts</h1>*/}
                {/*{*/}
                {/*    posts.map((post, index) => (*/}
                {/*        <Link key={index} href={`/posts/${post.ArticleId}`}>*/}
                {/*            <div style={linkStyle}>*/}
                {/*                <h2>{post.Title}</h2>*/}
                {/*                <p style={authorStyle}>Author: {post.Summary}</p>*/}
                {/*            </div>*/}
                {/*        </Link>)*/}
                {/*    )*/}
                {/*}*/}
            </div>
        </div>
    )
}

const bodyStyle = {minHeight: 'calc(100vh - 190px)', padding: '20px 40px'}
const linkStyle = {cursor: 'pointer', borderBottom: '1px solid rgba(0, 0, 0 ,.1)', padding: '20px 0px'}
const authorStyle = {color: 'rgba(0, 0, 0, .55)', fontWeight: '600'}