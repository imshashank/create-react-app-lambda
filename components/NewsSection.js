import React from "react";

function SectionArticles(props) {
    if (props.articles) {
        let i = 0;
        let data = Array.from(props.articles);
        const listItems = data.map((article, index) =>
            <div className="post-entry-2 d-flex" key={index}>
                <div className="thumbnail" style={{backgroundImage: `url(${article.MainImage})`}}/>
                <div className="contents">
                    <h2><a href={`/posts/${article.ArticleId}`}>{article.Title}</a>
                    </h2>
                    <p className="mb-3">{article.Description}</p>
                    <div className="post-meta">
                                        <span className="d-block"><a
                                            href="#">{article.SourceName}</a></span>
                        <span className="date-read">{article.PublishedAt} <span
                            className="mx-1">•</span> 3 min read <span
                            className="icon-star2"/></span>
                    </div>
                </div>
            </div>
        );
        return listItems;
    }
    return (<div>
            <p>Loading ...</p>
        </div>
    );

}

const NewsSection = props => (
    <div className="col-lg-6">
        <div className="section-title">
            <h2>{props.category}</h2>
        </div>
        <SectionArticles articles={props.articles}/>
    </div>
);

export default NewsSection;