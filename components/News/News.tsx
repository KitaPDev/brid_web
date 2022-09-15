import { useTranslation } from "next-i18next";
import { NewsData } from "../../interfaces/news";
import Image from "next/image";

interface NewsProps {
  news: NewsData[];
}

function News({ news }: NewsProps) {
  const { t } = useTranslation("news");
  const imageLinks = [
    "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/302753707_8167518656606618_7460009773524007020_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=JQE8J-vHP1cAX8SCHng&_nc_ht=scontent.fbkk5-7.fna&oh=00_AT_cPlXJvlo642H0moFQ8J31-cnY0-OK2nEDiPpChdPbWg&oe=632128B8",
    "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/302694001_8163269677031516_7678774886148039336_n.png?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=jsZsNehHI2cAX8n7q25&_nc_ht=scontent.fbkk5-3.fna&oh=00_AT-zyOZ3s2Im55ANUcy9fK7Zy_nFOWUKvu2m8o20Z2VhxA&oe=63214633",
    "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/302133438_8163271153698035_8767198430308193120_n.png?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Mpeem6Wo7oQAX_2tupE&tn=SDz7LmG5J1fVE413&_nc_ht=scontent.fbkk5-4.fna&oh=00_AT_DJcYwTgTRzjWhaO1yj-1JvkBfbmS8icLQZzEeyQwS4Q&oe=632131B0",
    "https://scontent.fbkk5-8.fna.fbcdn.net/v/t39.30808-6/302420642_8163272570364560_7317796315709533174_n.png?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=bY04J3zFdQ4AX-uXYW_&_nc_ht=scontent.fbkk5-8.fna&oh=00_AT85YZz-MHky2o6qHBt0aglP4YzQJFOd9us8lxWm8ED_mg&oe=6320A498",
    "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/302513723_8163271230364694_7928103690621292316_n.png?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=S_5Ah6rwHdMAX8Ce1bb&tn=SDz7LmG5J1fVE413&_nc_ht=scontent.fbkk5-6.fna&oh=00_AT9CBbH2jS5392ASYsGkOSstB8wCXaUHM5Y7AQNrHp256w&oe=63222886",
    "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/303608146_8168671189824698_592039730330882762_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=3RF-cQWIkOoAX83_ioK&_nc_ht=scontent.fbkk5-4.fna&oh=00_AT_HxrhLuVI-30CJjIyQ4k6efIXFVZC0rjWgfDErt4EPvQ&oe=63224AE4",
    "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/303574254_8168671169824700_324852884747492797_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Uw2p-b_q0UQAX8yihtS&_nc_oc=AQlJ4QMXKiU0kSW2dAN6w6bptWnCUNb6NPHEGfQkdXwTLN-1sh1XwH9YouwvY2mKFSc&_nc_ht=scontent.fbkk5-4.fna&oh=00_AT_LZJnd8QDzOprXBGLHWwze2XrABWniNh7pQOvFOPXeJg&oe=63223873",
    "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/302421022_8168671436491340_5240840426419622463_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=OsLAfkxmnlQAX96nZGc&_nc_ht=scontent.fbkk5-7.fna&oh=00_AT_OhYrWRKmE6c3iqGrwL_Tld5nkYmu_QyIfMXKR_iP6-w&oe=63212C36",
    "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/302430153_8168671433158007_7372746972604384874_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZNZ2445zbG4AX8Yw9Zm&_nc_ht=scontent.fbkk5-6.fna&oh=00_AT_p-kXZJJz3cGmSNx8x5WXQkqC7Bw_ZBUoKmoZxB001fQ&oe=6320DB2C"
  ]

  return (
    <div>
      <section className="hero">
        <div className="flex flex-col justify-center align-middle">
          <h1 className="text-white text-3xl xl:text-6xl font-semibold text-center">
            {t("heroTitle")}
          </h1>
        </div>
      </section>
      <section className="p-4 md:p-8 pt-8 md:pt-16 mb-4 md:mb-8 bg-gray-100">
        <div className="space-y-2">
          <div className="block-news">
            <h3>{t("title4")}</h3>
            <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-3 md:space-y-0">
              {Array.from({ length: 9 }, (_, i) => i + 1).map((val) => {
                let imgPath = `/content_news/atsi_dig_ent_award/${val}.JPG`;
                return (
                  <div
                    key={val}
                    className="max-h-full aspect-w-16 aspect-h-9 relative"
                  >
                    <Image src={imgPath} alt="" layout="fill" />
                  </div>
                );
              })}
            </div>
            <p>{t("description4")}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-2 md:space-y-0">
            <div className="block-news">
              <h3>{t("title1")}</h3>
              <a
                href="http://www.smartbomb.co.th/program/details/107642"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="max-h-full aspect-w-16 aspect-h-9 relative">
                  <Image
                    src="/content_news/radio905_02.png"
                    alt=""
                    layout="fill"
                  />
                </div>
              </a>
            </div>
            <div className="block-news">
              <h3>{t("title2")}</h3>
              <a
                href="http://www.smartbomb.co.th/program/details/107642"
                target="_blank"
                rel="noreferrer noopener"
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/yGFFnZkiJKw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </a>
              <p>{t("description2")}</p>
            </div>
          </div>
          <div className="block-news">
            <h3>{t("title5")}</h3>
            <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-3 md:space-y-0">
              {Array.from({ length: 9 }, (_, i) => i + 1).map((val) => {
                let imgPath = `/content_news/icti/${val}.jpg`;
                return (
                  <div
                    key={val}
                    className="max-h-full aspect-w-16 aspect-h-9 relative"
                  >
                    <Image src={imgPath} alt="" layout="fill" />
                  </div>
                );
              })}
            </div>
            <p>{t("description5")}</p>
            <a href="https://www.facebook.com/icticlub/posts/pfbid0zFSH6TFDprrxdZb6jzFNFvpamDCSdmSAAG4H4jJwcqABAM6NVXxnkw1TPqW5W2qel" target="_blank" rel="noreferrer">https://www.facebook.com/163980190293878/posts/pfbid033hwSN35s8LiUxAUx484Tt7pLrVmKL9fQdsDDQsXpe36uZLAk2xGp1frTNoLt4M3Zl/ Click Here to View Post</a>
          </div>
          <div className="block-news">
            <h3>{t("title3")}</h3>
            <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-4 md:space-y-0">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/1eaPInZzpgQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/HR8gFsSAEc0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/LY1vddINIEU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/9Ibv-F65mqo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>{t("description3")}</p>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default News;
