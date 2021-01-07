import React from "react";

function TrendingArticles(props) {
    console.log(props);
    if (props.articles) {
        let i = 0;
        let data = Array.from(props.articles.articles);
        const listItems = data.map((article, index) =>
            <div className="trend-entry d-flex" key={index}>
                <div className="number align-self-start">0{index + 1}</div>
                <div className="trend-contents">
                    <h2><a href={`/posts/${article.ArticleId}`}>{article.Title}</a>
                    </h2>
                    <div className="post-meta">
                                        <span className="d-block"><a href="#">{article.SourceName}</a></span>
                        <span className="date-read">{article.PublishedAt} <span
                            className="mx-1">•</span> 3 min read <span
                            className="icon-star2"/></span>
                    </div>
                </div>
            </div>
        );
        console.log(listItems)
        return listItems;
    }
    return (
        <p>Loading ...</p>
    );

}

const Trending = props => (
    <div className="col-lg-4">
        <div className="section-title">
            <h2>Trending</h2>
        </div>
        <TrendingArticles articles={props}/>
        <p>
            <a href="#" className="more">See All Trends <span
                className="icon-keyboard_arrow_right"/></a>
        </p>
    </div>
);

export default Trending;