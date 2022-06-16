import React from "react";
import "./Articles.style.scss";
export interface ArticlesProps {

}

export const Articles : React.FC<ArticlesProps> = (props) => {

  const articles = [
    {
      img: "news-1.png",
      alt: "alt1",
      date: "13.09.2020",
      title: "Lorem ipsum dolor sit amet, consectetuer",
      txt : "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim…"
    },
    {
      img: "news-2.png",
      alt: "alt2",
      date: "13.09.2020",
      title: "Lorem ipsum dolor sit amet, consectetuer",
      txt : "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim…"
    },
    {
      img: "news-3.png",
      alt: "alt3",
      date: "13.09.2020",
      title: "Lorem ipsum dolor sit amet, consectetuer",
      txt : "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim…"
    }
  ]

  return (
    <article id="news" className="articles l-container">
        {articles.map((article , index)=> (
      <div key={index} className="article">
        <header className="article_header">
          <img  src={`${process.env.PUBLIC_URL}/images/news/${article.img}`} alt={article.alt} className="article_img" />
        </header>
        <footer className="article_footer">
          <div className="article_data">
            <span className="article_date font_robotoMono">{article.date}</span>
            <h2 className="article_title font_robotoMono"> {article.title} </h2>
            <p className="article_txt font_roboto">{article.txt}</p>
          </div>

        </footer>
      </div>
))}

    </article>
  );
};

