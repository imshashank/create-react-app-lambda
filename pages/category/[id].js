import {API} from 'aws-amplify'
import {useRouter} from 'next/router'
import '../../configureAmplify'
import {getFeed, getTopics} from '../../graphql/queries'
import CategoryList from '../../components/CategoryList';
import NavBar from "../../components/NavBar";
import React from "react";

export async function getArticles(requestType, appType, limit, nextToken, inputString) {
    const params = {
        "requestType": requestType,
        "appType": appType,
        "limit": limit,
        "inputStr": inputString,
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

export async function getStaticProps({ params, preview = false, previewData }) {
    const [topAppTypes, topByCategory] = await Promise.all([
        getCategories("TOP_APP_TYPE", null, 10, null),
        getArticles("TOP_BY_CATEGORY", null, 10, null, params.id),
    ]);

    return {
        props: {
            preview,
            category: params.id,
            topAppTypes: topAppTypes,
            topByCategory: topByCategory
        },
    }
}

export async function getStaticPaths() {
    const allPosts = await getCategories("TOP_APP_TYPE", null, 10, null);
    return {
        paths: allPosts.map(({ node }) => `/category/${node}`) || [],
        fallback: true,
    }
}


export default function Category({topAppTypes, category, topByCategory}) {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div style={bodyStyle}>
                <NavBar categories={topAppTypes}/>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="section-title">
                                    <span className="caption d-block small">Categories</span>
                                    <h2>{category}</h2>
                                </div>
                                <CategoryList articles={topByCategory}/>
                            </div>
                            <div className="col-lg-3">
                                <div className="section-title">
                                    <h2>Popular Posts</h2>
                                </div>
                                <div className="trend-entry d-flex">
                                    <div className="number align-self-start">01</div>
                                    <div className="trend-contents">
                                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They
                                            Are</a>
                                        </h2>
                                        <div className="post-meta">
                                        <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                            href="#">News</a></span>
                                            <span className="date-read">Jun 14 <span
                                                className="mx-1">•</span> 3 min read <span
                                                className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="trend-entry d-flex">
                                    <div className="number align-self-start">02</div>
                                    <div className="trend-contents">
                                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They
                                            Are</a>
                                        </h2>
                                        <div className="post-meta">
                                        <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                            href="#">News</a></span>
                                            <span className="date-read">Jun 14 <span
                                                className="mx-1">•</span> 3 min read <span
                                                className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="trend-entry d-flex">
                                    <div className="number align-self-start">03</div>
                                    <div className="trend-contents">
                                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They
                                            Are</a>
                                        </h2>
                                        <div className="post-meta">
                                        <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                            href="#">News</a></span>
                                            <span className="date-read">Jun 14 <span
                                                className="mx-1">•</span> 3 min read <span
                                                className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="trend-entry d-flex pl-0">
                                    <div className="number align-self-start">04</div>
                                    <div className="trend-contents">
                                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They
                                            Are</a>
                                        </h2>
                                        <div className="post-meta">
                                        <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                            href="#">News</a></span>
                                            <span className="date-read">Jun 14 <span
                                                className="mx-1">•</span> 3 min read <span
                                                className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <a href="#" className="more">See All Popular <span
                                        className="icon-keyboard_arrow_right"/></a>
                                </p>
                            </div>
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
            </div>
        </div>
    );
    // return (
    //     <div>
    //         <h1>{post.Title}</h1>
    //         <div>
    //             <p>{post.Content}</p>
    //         </div>
    //         <p>Created by: {post.Summary}</p>
    //     </div>
    // )
}

const bodyStyle = {minHeight: 'calc(100vh - 190px)', padding: '20px 40px'}
