import { Article } from "shared/api";
import { Link } from "@remix-run/react";

interface ArticlePreviewProps {
  article: Article;
}
export function ArticlePreview({ article }: ArticlePreviewProps) {
  return (
    <div className="article-preview">
      <div className="artible-meta">
        <Link to={`/profile/${article.author.username}`} prefetch="intent">
          <img src={article.author.image} alt="" />
        </Link>
        <div className="info">
          <Link to={`/profile/${article.author.username}`} className="author" prefetch="intent">
            {article.author.username}
          </Link>
          <span className="date" suppressContentEditableWarning>
            {new Date(article.createdAt).toLocaleDateString(undefined, {
              dateStyle: "long",
            })}
          </span>
          <button className="btn btn-outline-primary btn-sm btn-sm pull-xs-right">
            <i className="ion-heart"></i> {article.favoritesCount}
          </button>
        </div>
        <Link to={`article/${article.slug}`} className="preview-link" prefetch="intent">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <span>Read more...</span>
          <ul className="tag-list">
            {article.tagList.map((tag) => (
              <li key={tag} className="tag-default tag-pill tag-outline">
                {tag}
              </li>
            ))}
          </ul>
        </Link>
      </div>
    </div>
  );
}
