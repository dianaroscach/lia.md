import type {Article} from "@/types/article";export function ArticleContent({article}:{article:Article}){return <div className="prose-custom">{article.content.map(p=><p key={p}>{p}</p>)}</div>}
