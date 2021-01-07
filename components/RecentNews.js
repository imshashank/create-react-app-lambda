import React from "react";

function RecentNewsItems(props) {
    if (props.articles) {
        let i = 0;
        let data = Array.from(props.articles.articles);
        const listItems = data.map((article, index) =>
            <div className="post-entry-2 d-flex">
                <div className="thumbnail order-md-2"
                     style={{backgroundImage: `url(${article.MainImage})`}}/>
                <div className="contents order-md-1 pl-0">
                    <h2><a href={`/posts/${article.ArticleId}`}>{article.Title}</a>
                    </h2>
                    <p className="mb-3">{article.Description}</p>
                    <div className="post-meta">
                                        <span className="d-block"><a
                                            href="#">{article.SourceName}</a></span>
                        <span className="date-read">{article.PublishedAt}<span
                            className="mx-1">•</span> 3 min read <span
                            className="icon-star2"/></span>
                    </div>
                </div>
            </div>
        );
        return listItems;
    }
    return (
        <p>Loading ...</p>
    );

}

const RecentNews = props => (
    // <div className="col-lg-4">
    //     <div className="section-title">
    //         <h2>Trending</h2>
    //     </div>
    //     <RecentNewsBuilder articles={props}/>
    //     <p>
    //         <a href="#" className="more">See All Trends <span
    //             className="icon-keyboard_arrow_right"/></a>
    //     </p>
    // </div>
    <div className="col-lg-9">
        <div className="section-title">
            <h2>{props.title}</h2>
        </div>
        <RecentNewsItems articles={props}/>
    </div>
);

export default RecentNews;