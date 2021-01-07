import {API} from 'aws-amplify'
import {useRouter} from 'next/router'
import '../../configureAmplify'
import {getArticles} from '../../graphql/queries'

export default function Post({post}) {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="site-wrap">
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 single-content">
                                <p className="mb-5">
                                    <img src={post.MainImage} alt="Image" className="img-fluid"/>
                                </p>
                                <h1 className="mb-4">
                                    {post.Title}
                                </h1>
                                <div className="post-meta d-flex mb-5">
                                    <div className="bio-pic mr-3">
                                        <img src="../images/person_1.jpg" alt="Image" className="img-fluidid"/>
                                    </div>
                                    <div className="vcard">
                                        <span className="d-block"><a
                                            href="#">{post.SourceName}</a></span>
                                        <span className="date-read">Jun 14 <span
                                            className="mx-1">•</span> 3 min read <span className="icon-star2"/></span>
                                    </div>
                                </div>
                                {post.Description}
                                <div className="pt-5">
                                    <p>Categories:
                                        {
                                            post.Categories && post.Categories.map(category => {
                                                return category && category != "Uncategorized" && (
                                                    <a className="pl-1 pr-1 text-black-50" href="#">{category},</a>
                                                )
                                            })
                                        }
                                        Tags:
                                        {

                                            post.Tags && post.Tags.map(tag => {
                                                return tag && tag != "Uncategorized" && (
                                                    <a className="pl-1 pr-1 text-black-50" href="#">{tag},</a>
                                                )
                                            })
                                        }
                                    </p>
                                    <a href={post.Url} target="_blank" className="btn btn-outline-dark">View Full
                                        Article</a>
                                </div>
                            </div>
                            <div className="col-lg-3 ml-auto">
                                <div className="section-title">
                                    <h2>Popular Posts</h2>
                                </div>
                                <div className="trend-entry d-flex">
                                    <div className="number align-self-start">01</div>
                                    <div className="trend-contents">
                                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They
                                            Are</a></h2>
                                        <div className="post-meta">
                                            <span className="d-block"><a
                                                href="#">{post.SourceName}</a></span>
                                            <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span
                                                className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="trend-entry d-flex">
                                    <div className="number align-self-start">02</div>
                                    <div className="trend-contents">
                                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They
                                            Are</a></h2>
                                        <div className="post-meta">
                                            <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                                href="#">News</a></span>
                                            <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span
                                                className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="trend-entry d-flex">
                                    <div className="number align-self-start">03</div>
                                    <div className="trend-contents">
                                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They
                                            Are</a></h2>
                                        <div className="post-meta">
                                            <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                                href="#">News</a></span>
                                            <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span
                                                className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="trend-entry d-flex pl-0">
                                    <div className="number align-self-start">04</div>
                                    <div className="trend-contents">
                                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They
                                            Are</a></h2>
                                        <div className="post-meta">
                                            <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                                href="#">News</a></span>
                                            <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span
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
                    </div>
                </div>
                <div className="site-section subscribe bg-light">
                    <div className="container">
                        <form action="#" className="row align-items-center">
                            <div className="col-md-5 mr-auto">
                                <h2>Newsletter Subcribe</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut
                                    at quae omnis pariatur obcaecati possimus nisi ea iste!</p>
                            </div>
                            <div className="col-md-6 ml-auto">
                                <div className="d-flex">
                                    <input type="email" className="form-control" placeholder="Enter your email"/>
                                    <button type="submit" className="btn btn-secondary"><span
                                        className="icon-paper-plane"/></button>
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


export async function getServerSideProps({params}) {
    const {id} = params
    const articleId = {
        "ArticleId": id
    }
    const postData = await API.graphql({
        query: getArticles, variables: articleId
    })
    return {
        props: {
            post: postData.data.getArticles
        }
    }
}

const markdownStyle = {padding: 20, border: '1px solid #ddd', borderRadius: 5}