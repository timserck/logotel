import React from "react";
import "./Articles.style.scss";
export interface ArticlesProps {

}

export const Articles : React.FC<ArticlesProps> = (props) => {

  const articles = [
    {
      img: "news-1.jpg",
      alt: "alt1",
      date: "13.09.2020",
      title: "Lorem ipsum dolor sit amet, consectetuer",
      txt : "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      img: "news-2.jpg",
      alt: "alt2",
      date: "13.09.2020",
      title: "Lorem ipsum dolor sit amet, consectetuer",
      txt : "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      img: "news-3.jpg",
      alt: "alt3",
      date: "13.09.2020",
      title: "Lorem ipsum dolor sit amet, consectetuer",
      txt : "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]

  return (
    <article id="news" className="articles l-container l-container-padding l-grid">
        {articles.map((article , index)=> (
      <div key={index} className="article l-grid_col l-grid_col-3">
        <header className="article_header">
          <img  src={`${process.env.PUBLIC_URL}/images/news/${article.img}`} alt={article.alt} className="article_img" />
        </header>
        <footer className="article_footer">
          <div className="article_data">
            <span className="article_date font_robotoMono">{article.date}</span>
            <h2 className="article_title font_robotoMono"> {article.title} </h2>
            <p className="article_txt">{article.txt}</p>
          </div>

        </footer>
      </div>
))}

    </article>
  );
};

