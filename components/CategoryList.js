import React from "react";

function CategoryListItems(props) {
    if (props.articles) {
        let i = 0;
        let data = Array.from(props.articles.items);
        const listItems = data.map((article, index) =>
            <div className="post-entry-2 d-flex">
                <div className="thumbnail order-md-2"
                     style={{backgroundImage: `url(${article.MainImage})`}}/>
                <div className="contents order-md-1 pl-0">
                    <h2>
                        <a href={`/posts/${article.ArticleId}`}>{article.Title}</a>
                    </h2>
                    <p className="mb-3">{article.Description}</p>
                    <div className="post-meta">
                                        <span className="d-block"><a href="#">Dave Rogers</a> in <a
                                            href="#">News</a></span>
                        <span className="date-read">Jun 14 <span
                            className="mx-1">•</span> 3 min read <span className="icon-star2"/></span>
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

const CategoryList = props => (
    <CategoryListItems articles={props.articles}/>
);

export default CategoryList;