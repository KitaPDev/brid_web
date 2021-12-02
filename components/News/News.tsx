import { useTranslation } from "next-i18next";
import { NewsData } from "../../interfaces/news";

interface NewsProps {
  news: NewsData[];
}

function News({ news }: NewsProps) {
  const { t } = useTranslation("news");
  console.log(news);

  return <div></div>;
}

export default News;
